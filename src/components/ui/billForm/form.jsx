import CurrencyFormat from "react-currency-format";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { useAuth } from "../../../hooks/useAuth";
import StatusAutocompleteComponent from "@/components/autoComplete/status";
import { createBill, fetchBills } from "@/lib/clientControllers/bills";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "react-router-dom";
import { db, storage } from "@/lib/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import OpenAI from "openai";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
  addDoc,
  where,
} from "firebase/firestore";
import { format, parse } from "date-fns";
import { fetchBillsForSpecificUser } from "@/lib/clientControllers/bills";

export default function BillFormComponent({ bill = {}, update = false }) {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue,
    watch,
  } = useForm();
  const [state, setState] = useState({});
  const [extractedText, setExtractedText] = useState(null);
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [showProviderDropdown, setShowProviderDropdown] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isExtracting, setIsExtracting] = useState(false);
  const providerInputRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { upload } = useParams();

  const isUploadMode = upload === "true";
  
  // Initialize OpenAI client
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, // This is needed for client-side usage
  });

  // Helper function to convert file to base64 data URL
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // This already returns a data URL format
      reader.onload = () => {
        // Return the complete data URL with format data:image/jpeg;base64,/9j/4AAQ...
        resolve(reader.result.toString());
      };
      reader.onerror = (error) => reject(error);
    });
  };

  // Function to extract date from various formats
  const extractDate = (text) => {
    // Try various date formats
    const datePatterns = [
      // Month Name, Day, Year (e.g. January 15, 2023)
      /([a-zA-Z]+\s\d{1,2},\s\d{4})/i,
      // MM/DD/YYYY
      /(\d{1,2}\/\d{1,2}\/\d{4})/i,
      // DD/MM/YYYY
      /(\d{1,2}\/\d{1,2}\/\d{4})/i,
      // YYYY-MM-DD
      /(\d{4}-\d{1,2}-\d{1,2})/i,
      // DD-MM-YYYY
      /(\d{1,2}-\d{1,2}-\d{4})/i,
      // Month Abbreviation. Day, Year (e.g. Jan. 15, 2023)
      /([a-zA-Z]{3}\.?\s\d{1,2},\s\d{4})/i
    ];

    for (const pattern of datePatterns) {
      const match = text.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  // Extract text using OpenAI's Vision API
  const extractText = async (event) => {
    try {
      setIsExtracting(true);
      console.log("Extract text triggered:", event);
      const file = event.target.files[0];
      if (!file) {
        throw new Error("No file selected.");
      }

      // Check if file is a PDF or image
      const isPDF = file.type === "application/pdf";
      const isImage = file.type.startsWith("image/");

      if (!isPDF && !isImage) {
        throw new Error("Please upload a PDF or image file.");
      }

      // Convert file to base64
      const base64File = await fileToBase64(file);

      // Create the API payload
      let prompt = "Extract the following information from this bill or invoice: service provider name, amount, account number, and due date. Format the response as a JSON object with keys: 'name', 'amount', 'accountNumber', and 'dueDate'.";

      // Call OpenAI Vision API using the current API structure
      const response = await openai.responses.create({
        model: "gpt-4.1-mini",
        input: [
          {
            role: "user",
            content: [
              { type: "input_text", text: prompt },
              {
                type: "input_image",
                image_url: base64File, // Already contains the full data URL
              }
            ],
          },
        ],
      });

      // Extract the response text from the new API response structure
      const extractedContent = response.output_text;
      console.log("OpenAI Response:", extractedContent);

      // Parse the JSON from the response
      let extractedData = {};

      try {
        // Try to find JSON in the response
        const jsonMatch = extractedContent.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          extractedData = JSON.parse(jsonMatch[0]);
        } else {
          // If no JSON found, parse manually
          if (extractedContent.includes("name")) {
            const nameMatch = extractedContent.match(/name[:\s]+([^\n,]+)/i);
            if (nameMatch && nameMatch[1]) extractedData.name = nameMatch[1].trim();
          }

          if (extractedContent.includes("amount")) {
            const amountMatch = extractedContent.match(/amount[:\s]+([$]?[\d,.]+)/i);
            if (amountMatch && amountMatch[1]) {
              extractedData.amount = amountMatch[1].replace(/[^0-9.]/g, "");
            }
          }

          if (extractedContent.includes("account")) {
            const accountMatch = extractedContent.match(/account\s*number[:\s]+([\d\-]+)/i);
            if (accountMatch && accountMatch[1]) extractedData.accountNumber = accountMatch[1].trim();
          }

          if (extractedContent.includes("due date") || extractedContent.includes("dueDate")) {
            const dueDateMatch = extractedContent.match(/due\s*date[:\s]+([^\n,]+)/i);
            if (dueDateMatch && dueDateMatch[1]) extractedData.dueDate = dueDateMatch[1].trim();
          }
        }
      } catch (parseError) {
        console.error("Error parsing OpenAI response:", parseError);
      }

      console.log("Extracted Data:", extractedData);

      // Clean and format the extracted data
      const cleanedValues = {};

      if (extractedData.name) {
        // Check if there's a similar name in the serviceProviders array
        const extractedName = extractedData.name.trim();
        let matchedProvider = null;
        
        // Try to find an exact or similar match in existing providers
        if (serviceProviders.length > 0) {
          // First try exact match
          matchedProvider = serviceProviders.find(
            provider => provider.toLowerCase() === extractedName.toLowerCase()
          );
          
          // If no exact match, try partial match
          if (!matchedProvider) {
            matchedProvider = serviceProviders.find(
              provider => {
                return provider.toLowerCase().includes(extractedName.toLowerCase()) || 
                       extractedName.toLowerCase().includes(provider.toLowerCase());
              }
            );
          }
        }
        
        // Use matched provider if found, otherwise use extracted name
        cleanedValues.name = matchedProvider || extractedName;
        setName(cleanedValues.name);
      }

      if (extractedData.amount) {
        cleanedValues.amount = extractedData.amount.replace(/[^0-9.]/g, "");
      }

      if (extractedData.accountNumber) {
        cleanedValues.accountNumber = extractedData.accountNumber.trim();
      }

      if (extractedData.dueDate) {
        try {
          const dateStr = extractedData.dueDate.trim();
          // Try to parse the date and format it to yyyy-MM-dd
          const parsedDate = new Date(dateStr);
          if (!isNaN(parsedDate.getTime())) {
            cleanedValues.dueDate = format(parsedDate, "yyyy-MM-dd");
          } else {
            // If standard parsing fails, try to extract the date using regex
            const extractedDateStr = extractDate(dateStr);
            if (extractedDateStr) {
              // Attempt to parse with different formats
              let parsedDate;
              try {
                // Try MMMM d, yyyy format (e.g., January 15, 2023)
                parsedDate = parse(extractedDateStr, "MMMM d, yyyy", new Date());
              } catch (e) {
                try {
                  // Try MM/DD/YYYY format
                  parsedDate = parse(extractedDateStr, "MM/dd/yyyy", new Date());
                } catch (e) {
                  try {
                    // Try YYYY-MM-DD format
                    parsedDate = parse(extractedDateStr, "yyyy-MM-dd", new Date());
                  } catch (e) {
                    console.error("Could not parse date:", extractedDateStr);
                  }
                }
              }

              if (parsedDate && !isNaN(parsedDate.getTime())) {
                cleanedValues.dueDate = format(parsedDate, "yyyy-MM-dd");
              }
            }
          }
        } catch (dateError) {
          console.error("Error parsing date:", dateError);
        }
      }

      // Set the extracted values to form fields
      setExtractedText(cleanedValues);
      console.log("Final Cleaned Values:", cleanedValues);

      // Make sure to set each form field with the specific values
      if (cleanedValues.name) {
        console.log("Setting name:", cleanedValues.name);
        setValue("name", cleanedValues.name);
        setName(cleanedValues.name);
      }
      
      if (cleanedValues.amount) {
        console.log("Setting amount:", cleanedValues.amount);
        const amountVal = parseFloat(cleanedValues.amount);
        setValue("amount", amountVal);
        setAmount(amountVal);
      }
      
      if (cleanedValues.accountNumber) {
        console.log("Setting accountNumber:", cleanedValues.accountNumber);
        setValue("accountNumber", cleanedValues.accountNumber);
        setAccountNumber(cleanedValues.accountNumber);
      }
      
      if (cleanedValues.dueDate) {
        console.log("Setting dueDate:", cleanedValues.dueDate);
        setValue("dueDate", cleanedValues.dueDate);
        setDueDate(cleanedValues.dueDate);
      }
      
      // Also log all form values after setting them
      setTimeout(() => {
        console.log("Current form values:", {
          name: watch("name"),
          amount: watch("amount"),
          accountNumber: watch("accountNumber"),
          dueDate: watch("dueDate")
        });
      }, 100);

      // For debugging, also log all the entries
      for (const [key, value] of Object.entries(cleanedValues)) {
        console.log("Extracted value:", key, value);
      }

      // Upload file to storage
      const storageRef = ref(storage, `documents/${user?.id}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(snapshot.ref);

      // Add document metadata to Firestore
      const documentsCollection = collection(db, "documents");
      await addDoc(documentsCollection, {
        userId: user.id,
        documentUrl: fileUrl,
        documentName: file.name,
        documentType: file.type,
        uploadedAt: new Date(),
        purpose: "Bill",
        extractedData: cleanedValues,
        isDeleted: false,
      });

      // Notify user of successful upload and extraction
      toast({
        title: "Success",
        description: "Document uploaded and text extracted successfully",
      });
    } catch (error) {
      console.error("Failed to extract text:", error);
      toast({
        title: "Error",
        description: `Failed to extract text: ${error.message}`,
      });
    } finally {
      setIsExtracting(false);
    }
  };

  const onSubmit = async (formData) => {
    try {
      setState({});
      const action = createBill;
      formData.user_id = user?.id;
      formData.status = "unpaid";
      let file = formData.uploadBill[0];
      console.log(file);

      const storageRef = ref(storage, `documents/${user?.id}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(snapshot.ref);

      // Step 2: Add document metadata to Firestore
      const documentsCollection = collection(db, "documents");

      console.log(user.id, file.name, fileUrl, file.name, file.type);
      await addDoc(documentsCollection, {
        userId: user.id,
        documentUrl: fileUrl,
        documentName: file.name,
        documentType: file.type,
        uploadedAt: new Date(),
        purpose: "Bill",
        isDeleted: false,
      });

      formData.uploadBill = null;

      await action(formData);
      setState({ success: true });
      toast({
        title: "Bill Created Successfully",
        description:
          "Bill with the provided information has been created successfully.",
      });
    } catch (error) {
      console.error("Error creating bill:", error);
    }
  };

  useEffect(() => {
    if (state?.success) {
      navigate("/bills");
    }
  }, [state, navigate]);

  // Fetch all bills to extract service provider names
  useEffect(() => {
    const fetchServiceProviders = async () => {
      if (!user?.id) return;
      
      try {
        const bills = await fetchBills();
        
        // Extract unique service provider names from bills
        const providers = bills.map(bill => bill.name).filter(Boolean);
        const uniqueProviders = [...new Set(providers)];
        
        setServiceProviders(uniqueProviders);
        // Initialize filtered providers with up to 5 service providers
        setFilteredProviders(uniqueProviders.slice(0, 5));
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };
    
    fetchServiceProviders();
  }, [user]);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (providerInputRef.current && !providerInputRef.current.contains(event.target)) {
        setShowProviderDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter service providers based on user input
  const handleProviderInputChange = (e) => {
    const value = e.target.value;
    setValue("name", value);
    setName(value);
    
    if (value.trim() === "") {
      setFilteredProviders(serviceProviders.slice(0, 5));
    } else {
      const filtered = serviceProviders
        .filter(provider => 
          provider.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setFilteredProviders(filtered);
    }
    
    setShowProviderDropdown(true);
  };

  const selectProvider = (provider) => {
    setValue("name", provider);
    setShowProviderDropdown(false);
  };

  
  let formLabels = {
    name: "Service Provider",
    amount: "Bill Amount",
    dueDate: "Bill Due Date",
    accountNumber: "Bill Account Number",
    uploadBill: "Upload Bill",
  };

  return (
    <Modal
      backdrop="blur"
      isOpen={true}
      size="3xl"
      onClose={() => navigate(-1)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>{isUploadMode ? "Upload " : "Create "}Bill</ModalHeader>

          <ModalBody>
            {state?.error && <div className="error">{state.error}</div>}
            <div className={styles.formElementsWrapper}>
              <div className={styles.fileInputWrapper}>
                <Input
                  ref={fileInputRef}
                  type="file"
                  isInvalid={!!errors.uploadBill}
                  accept=".pdf,.jpg,.jpeg,.png"
                  radius="sm"
                  variant="bordered"
                  errorMessage={
                    !!errors.uploadBill && "Please provide the bill file"
                  }
                  label={formLabels.uploadBill}
                  labelPlacement="outside"
                  description="Upload a PDF or image of your bill for automatic data extraction"
                  {...register("uploadBill", { 
                    required: true,
                    onChange: (e) => {
                      console.log("File input change event", e);
                      if (e.target.files && e.target.files.length > 0) {
                        extractText(e);
                      }
                    }
                  })}
                  disabled={isExtracting}
                />
                {isExtracting && (
                  <div className={styles.extractingIndicator}>
                    <Spinner size="sm" />
                    <span>Extracting data...</span>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.formWrapper}>
              <div className={styles.formElementsWrapper}>
                <div className={styles.autocompleteContainer} ref={providerInputRef}>
                  <Input
                    errorMessage={!!errors.name && "Please provide the bill name"}
                    isInvalid={!!errors.name}
                    label={formLabels.name}
                    labelPlacement="outside"
                    {...register("name", { required: true })}
                    value={name}
                    
                    radius="sm"
                    type="text"
                    variant="bordered"
                    onChange={handleProviderInputChange}
                    onFocus={() => setShowProviderDropdown(true)}
                  />
                  {showProviderDropdown && filteredProviders.length > 0 && (
                    <div className={styles.dropdownContainer}>
                      {filteredProviders.map((provider, index) => (
                        <div 
                          key={index} 
                          className={styles.dropdownItem}
                          onClick={() => {
                            setValue("name", provider)
                            setName(provider)
                            setShowProviderDropdown(false)
                          }}
                        >
                          {provider}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <CurrencyFormat
                  customInput={Input}
                  label={formLabels.amount}
                  isInvalid={!!errors.amount}
                  labelPlacement="outside"
                  value={amount}
                  onValueChange={(values) => {
                    const { floatValue } = values;
                    setValue("amount", floatValue || "");
                    setAmount(floatValue || "");
                  }}
                  {...register("amount", {
                    required: "Please provide the bill amount",
                  })}
                  radius="sm"
                  type="text"
                  variant="bordered"
                  errorMessage={
                    !!errors.amount && "Please provide the bill amount"
                  }
                  className={styles.formInput}
                  prefix="$"
                  thousandSeparator={true}
                />
              </div>
              <div className={styles.formElementsWrapper}>
                <Input
                  className={styles.formInput}
                  errorMessage={
                    !!errors.accountNumber &&
                    "Please provide the account number"
                  }
                  isInvalid={!!errors.accountNumber}
                  label={formLabels.accountNumber}
                  labelPlacement="outside"
                  value={accountNumber}
                  onChange={(e) => {
                    setValue("accountNumber", e.target.value);
                    setAccountNumber(e.target.value);
                  }}
                  {...register("accountNumber", { required: true })}
                  radius="sm"
                  type="text"
                  variant="bordered"
                />
                <Input
                  className={styles.formInput}
                  errorMessage={
                    !!errors.dueDate && "Please provide the due date"
                  }
                  isInvalid={!!errors.dueDate}
                  label={formLabels.dueDate}
                  labelPlacement="outside"
                  value={dueDate}
                  onChange={(e) => {
                    setValue("dueDate", e.target.value);
                    setDueDate(e.target.value);
                  }}
                  {...register("dueDate", { required: true })}
                  radius="sm"
                  type="date"
                  variant="bordered"
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter className={styles.footer}>
            <Button
              className={styles.footerButton}
              radius="sm"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: "#10a37f", color: "#fff" }}
              className={styles.footerButton}
              isDisabled={!!state?.success}
              isLoading={isSubmitting}
              radius="sm"
              type="submit"
            >
              {isUploadMode ? "Upload" : "Create"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

const formatDateForInput = (dateString) => {
  const date = new Date(dateString); // Parse the string into a Date object
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
 
  return `${year}-${month}-${day}`; // Format as YYYY-MM-DD
};

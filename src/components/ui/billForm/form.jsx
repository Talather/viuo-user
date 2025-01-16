import CurrencyFormat from "react-currency-format";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.css";
import { useAuth } from "../../../hooks/useAuth";
import StatusAutocompleteComponent from "@/components/autoComplete/status";
import { createBill } from "@/lib/clientControllers/bills";
import { useToast } from "@/hooks/use-toast";
import pdfToText from "react-pdftotext";
import { useParams } from "react-router-dom";
import { db, storage } from "@/lib/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

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
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { upload } = useParams();

  const isUploadMode = upload === "true";

  const extractText = async (event) => {
    const file = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const storageRef = ref(storage, `documents/${user?.id}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(snapshot.ref);
      // Add document link to Firestore
      const documentsCollection = collection(db, "documents");
      await addDoc(documentsCollection, {
        userId: user.id,
        documentUrl: fileUrl,
        documentName: file.name,
        documentType: file.type,
        uploadedAt: new Date(),
        purpose: "Bill",
      });
      const userDoc = doc(db, "users", user.id);
      // await updateDoc(userDoc, { totalDocuments: totalDocuments + 1 })
      // setTotalDocuments(totalDocuments + 1)
      console.log("bawaji");
      toast({
        title: "Success",
        description: "Document Updated",
      });
    }

    try {
      const cleanValues = (values) => {
        return Object.fromEntries(
          Object.entries(values).filter(
            ([key, value]) => value !== "" && value != null
          )
        );
      };

      const text = await pdfToText(file);

      // Clean and normalize the text (e.g., remove extra spaces, handle punctuation)
      const cleanedText = text.replace(/\s+/g, " ").toLowerCase(); // Replace multiple spaces with a single space

      const values = {
        name:
          cleanedText.match(
            /name\s*[:=]\s*["'“”]?\s*([^"'”]+)\s*["'”]?/
          )?.[1] || "N/A",
        amount:
          cleanedText
            .match(/amount\s*[:=]\s*(\d[\d,.]*)/)?.[1]
            .replace(/[^0-9.-]+/g, "") || "0",
        accountNumber:
          cleanedText.match(
            /accountnumber\s*[:=]\s*["'“”]?\s*([^"'”]+)\s*["'”]?/
          )?.[1] || "N/A",

        // Handle multiple date formats with fallback
        dueDate:
          cleanedText.match(
            /due\s*date\s*[:=]\s*["'“”]?\s*(\d{1,2}[\/-]?\d{1,2}[\/-]?\d{2,4}|[a-z]+ \d{1,2}, \d{4})\s*["'”]?/
          )?.[1] || "",

        remainingBalance:
          cleanedText
            .match(/remainingbalance\s*[:=]\s*(\d[\d,.]*)/)?.[1]
            .replace(/[^0-9.-]+/g, "") || "0",
        pastDue:
          cleanedText
            .match(/pastdue\s*[:=]\s*(\d[\d,.]*)/)?.[1]
            .replace(/[^0-9.-]+/g, "") || "0",
      };

      const cleanedValues = cleanValues(values);

      setExtractedText(cleanedValues);

      console.log("values", cleanedValues);
      // Set form values automatically
      for (const [key, value] of Object.entries(cleanedValues)) {
        // if (value) {
        setValue(key, value);
        // }
      }
    } catch (error) {
      console.error("Failed to extract text from PDF", error);
    }
  };

  const onSubmit = async (formData) => {
    try {
      setState({});
      const action = createBill;
      formData.user_id = user?.id;
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

  console.log(watch("amount"));
  let formLabels = extractedText
    ? {
        name: "",
        amount: "",
        dueDate: "",
        accountNumber: "",
      }
    : {
        name: "Bill Name",
        amount: "Bill Amount",
        dueDate: "Bill Due Date",
        accountNumber: "Bill Account Number",
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

          {!extractedText && (
            <ModalBody>
              {state?.error && <div className="error">{state.error}</div>}
              <div className={styles.formWrapper}>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    errorMessage={
                      !!errors.name && "Please provide the bill name"
                    }
                    isInvalid={!!errors.name}
                    label={formLabels.name}
                    labelPlacement="outside"
                    {...register("name", { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                  <CurrencyFormat
                    customInput={Input}
                    label={formLabels.amount}
                    isInvalid={!!errors.amount}
                    labelPlacement="outside"
                    onValueChange={(values) => {
                      const { floatValue } = values;
                      setValue("amount", floatValue || ""); // Set the float value or an empty string if undefined
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
                    {...register("accountNumber", { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText?.dueDate || ''}
                    // value={extractedText?.dueDate || ''}
                    errorMessage={
                      !!errors.dueDate && "Please provide the due date"
                    }
                    isInvalid={!!errors.dueDate}
                    label={formLabels.dueDate}
                    labelPlacement="outside"
                    {...register("dueDate", { required: true })}
                    radius="sm"
                    type="date"
                    variant="bordered"
                  />
                </div>

                <div className={styles.formElementsWrapper}>
                  <Input
                    type="file"
                    label="Upload Bill"
                    onChange={extractText}
                    accept=".pdf,.jpg,.png"
                    radius="sm"
                    variant="bordered"
                  />
                </div>
              </div>
            </ModalBody>
          )}

          {extractedText && (
            <ModalBody>
              {state?.error && <div className="error">{state.error}</div>}
              <div className={styles.formWrapper}>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    defaultValue={extractedText?.name || ""}
                    // value={extractedText?.name || ''}
                    // onChange={(e) =>{setValue("name",'')}}
                    errorMessage={
                      !!errors.name && "Please provide the bill name"
                    }
                    isInvalid={!!errors.name}
                    label={formLabels.name}
                    labelPlacement="outside"
                    {...register("name", { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    className={styles.formInput}
                    defaultValue={extractedText?.amount}
                    errorMessage={
                      !!errors.amount && "Please provide the bill amount"
                    }
                    // value={extractedText?.amount || ''}
                    isInvalid={!!errors.amount}
                    label={formLabels.amount}
                    labelPlacement="outside"
                    {...register("amount", { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                </div>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    defaultValue={extractedText?.accountNumber || ""}
                    // value={extractedText?.accountNumber || ''}
                    errorMessage={
                      !!errors.accountNumber &&
                      "Please provide the account number"
                    }
                    isInvalid={!!errors.accountNumber}
                    label={formLabels.accountNumber}
                    labelPlacement="outside"
                    {...register("accountNumber", { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    className={styles.formInput}
                    defaultValue={extractedText?.dueDate || ""}
                    // value={extractedText?.dueDate || ''}
                    errorMessage={
                      !!errors.dueDate && "Please provide the due date"
                    }
                    isInvalid={!!errors.dueDate}
                    label={formLabels.dueDate}
                    labelPlacement="outside"
                    {...register("dueDate", { required: true })}
                    radius="sm"
                    type="date"
                    variant="bordered"
                  />
                </div>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    defaultValue={extractedText?.remainingBalance || ""}
                    // value={extractedText?.remainingBalance || ''}
                    errorMessage={
                      !!errors.remainingBalance &&
                      "Please provide the remaining balance"
                    }
                    isInvalid={!!errors.remainingBalance}
                    label={formLabels.remainingBalance}
                    labelPlacement="outside"
                    {...register("remainingBalance", { required: true })}
                    radius="sm"
                    type="number"
                    variant="bordered"
                  />
                  <Input
                    className={styles.formInput}
                    defaultValue={extractedText?.pastDue || ""}
                    errorMessage={
                      !!errors.pastDue && "Please provide the past due balance"
                    }
                    // value={extractedText?.pastDue || ''}
                    isInvalid={!!errors.pastDue}
                    label={formLabels.pastDue}
                    labelPlacement="inside"
                    {...register("pastDue", { required: true })}
                    radius="sm"
                    type="number"
                    variant="bordered"
                  />
                </div>

                <div className={styles.formElementsWrapper}>
                  <Input
                    type="file"
                    label="Upload Bill"
                    onChange={extractText}
                    accept=".pdf,.jpg,.png"
                    radius="sm"
                    variant="bordered"
                  />
                </div>
              </div>
            </ModalBody>
          )}
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

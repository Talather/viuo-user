// import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
// import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
// import { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import styles from './form.module.css';
// import { useAuth } from '../../../hooks/useAuth'
// import StatusAutocompleteComponent from '@/components/autoComplete/status';
// import { createBill } from '@/lib/clientControllers/bills';
// import { useToast } from '@/hooks/use-toast';
// export default function BillFormComponent({ bill = {}, update = false }) {
//   const { control, formState: { errors, isSubmitting }, handleSubmit, register } = useForm();
//   const [state, setState] = useState({});
//   const navigate = useNavigate(); // Use navigate from react-router-dom
//   const { user } = useAuth()
//   const { toast } = useToast();

//   const onSubmit = async (formData) => {
//     console.log("onsubmithit",user.id)
//     setState({});
//     const action = createBill;
//     formData.user_id = user?.id
    
//     // Replace with your action (e.g., createBill or updateBill)

//     const response = await action(formData);

//     setState({ success: true });
//        toast({
//         title: "Bill Created Succcessfully",
//         description: "Bill with the provided information Created Succcessfully",
//       });
    
//   };

//   useEffect(() => {
//     if (state?.success) {
//       console.log("Success handling")
//       navigate('/bills'); // You can navigate to another page on success
//     }
//   }, [state]);

//   return (
//     <Modal backdrop="blur" isOpen={true} size="3xl" onClose={() => navigate(-1)}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <ModalContent>
//           <ModalHeader>{update ? 'Update ' : 'Create '}Bill</ModalHeader>
//           <ModalBody>
//             {state?.error && <div className="error">{state.error}</div>}
//             <div className={styles.formWrapper}>
//               <div className={styles.formElementsWrapper}>
//                 <Input
//                   className={styles.formInput}
//                   defaultValue={bill.name}
//                   errorMessage={!!errors.name && 'Please provide the bill first name'}
//                   isInvalid={!!errors.name}
//                   label="Bill Name"
//                   labelPlacement="outside"
//                   {...register('name', { required: true })}
//                   radius="sm"
//                   type="text"
//                   variant="bordered"
//                 />
//                 <Input
//                   className={styles.formInput}
//                   defaultValue={bill.amount}
//                   errorMessage={!!errors.amount && 'Please provide the bill Amount'}
//                   isInvalid={!!errors.amount}
//                   label="Bill Amount"
//                   labelPlacement="outside"
//                   {...register('amount', { required: true })}
//                   radius="sm"
//                   type="text"
//                   variant="bordered"
//                 />
//               </div>
//               <div className={styles.formElementsWrapper}>
//                 <Input
//                   className={styles.formInput}
//                   defaultValue={bill.paymentCurrency}
//                   errorMessage={!!errors.paymentCurrency && ''}
//                   isInvalid={!!errors.paymentCurrency}
//                   label="Currency"
//                   labelPlacement="outside"
//                   {...register('paymentCurrency', { required: true })}
//                   radius="sm"
//                   type="text"
//                   variant="bordered"
//                 />
//               {/* </div>
//               <div className={styles.formElementsWrapper}> */}
//                 <Input
//                   className={styles.formInput}
//                   defaultValue={bill.dueDate}
//                   errorMessage={!!errors.dueDate && 'Please provide the dueDate'}
//                   isInvalid={!!errors.dueDate}
//                   label="Due Date"
//                   labelPlacement="outside"
//                   {...register('due_date', { required: true })}
//                   radius="sm"
//                   type="date"
//                   variant="bordered"
//                 />
//                 {/* <Input
//                   className={styles.formInput}
//                   defaultValue={bill.subsidiary}
//                   errorMessage={!!errors.subsidiary && 'Please provide the name of subsidiary'}
//                   isInvalid={!!errors.subsidiary}
//                   label="Subsidiary"
//                   labelPlacement="outside"
//                   {...register('subsidiary', { required: true })}
//                   radius="sm"
//                   type="text"
//                   variant="bordered"
//                 /> */}
//               </div>
//               <div className={styles.formElementsWrapper}>
//                 {/* <Input
//                   className={styles.formInput}
//                   defaultValue={bill.segment}
//                   errorMessage={!!errors.segment && 'Please provide the segment'}
//                   isInvalid={!!errors.segment}
//                   label="Segment"
//                   labelPlacement="outside"
//                   {...register('segment', { required: true })}
//                   radius="sm"
//                   type="text"
//                   variant="bordered"
//                 />
//                  */}
//                 <StatusAutocompleteComponent
//                   control={control}
//                   errors={errors}
//                   register={register}
//                   status={{ id:"",name:""} || ''}
//                   name='status'
//                 />
//               </div>
//             </div>
//           </ModalBody>
//           <ModalFooter className={styles.footer}>
//             <Button className={styles.footerButton} radius="sm" onClick={() => navigate(-1)}>
//               Cancel
//             </Button>
//             <Button
//               style={{ backgroundColor: '#10a37f', color: '#fff' }}
//               className={styles.footerButton}
//               // color="success"
//               isDisabled={!!state?.success}
//               isLoading={isSubmitting}
//               radius="sm"
//               type="submit"
//             >
//               {update ? 'Update' : 'Create'}
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </form>
//     </Modal>
//   );
// }















































import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form.module.css';
import { useAuth } from '../../../hooks/useAuth';
import StatusAutocompleteComponent from '@/components/autoComplete/status';
import { createBill } from '@/lib/clientControllers/bills';
import { useToast } from '@/hooks/use-toast';
import Tesseract from 'tesseract.js'; // If using Tesseract for OCR
import { useParams } from 'react-router-dom';


export default function BillFormComponent({ bill = {}, update = false }) {
  const { control, formState: { errors, isSubmitting }, handleSubmit, register, setValue } = useForm();
  const [state, setState] = useState({});
  const [file, setFile] = useState(null);
  const [ocrResult, setOcrResult] = useState(null); // For holding OCR results
  const navigate = useNavigate(); // Use navigate from react-router-dom
  const { user } = useAuth();
  const { toast } = useToast();

  let { upload } = useParams();
  upload = upload === "true" ? true : false
  console.log("nalakik", upload)
  


  // Handle OCR scanning
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      await scanBill(selectedFile); // Start scanning the bill
    }
  };

  const scanBill = (file) => {
    // Use Tesseract to scan the bill (or another OCR tool)
    Tesseract.recognize(
      file,
      'eng',
      {
        logger: (m) => console.log(m),
      }
    ).then(({ data: { text } }) => {
      console.log("OCR Result:", text);
      setOcrResult(text); // Set OCR result

      // Optionally, you can extract specific fields like amount, due date, etc., from the OCR text
      const amountMatch = text.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)/);
      const dateMatch = text.match(/(\d{1,2}[-/]\d{1,2}[-/]\d{4}|\d{4}[-/]\d{2}[-/]\d{2})/);

      // If found, set form values
      if (amountMatch) setValue('amount', amountMatch[0]);
      if (dateMatch) setValue('due_date', dateMatch[0]);
    });
  };

  const onSubmit = async (formData) => {
    console.log("onsubmithit", user.id);
    setState({});
    const action = createBill;
    formData.user_id = user?.id;

    // Replace with your action (e.g., createBill or updateBill)
    const response = await action(formData);

    setState({ success: true });
    toast({
      title: "Bill Created Successfully",
      description: "Bill with the provided information Created Successfully",
    });
  };

  useEffect(() => {
    if (state?.success) {
      console.log("Success handling");
      navigate('/bills'); // You can navigate to another page on success
    }
  }, [state]);

  return (
    <Modal backdrop="blur" isOpen={true} size="3xl" onClose={() => navigate(-1)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>{upload ? 'Upload ' : 'Create '}Bill</ModalHeader>
          <ModalBody>
            {state?.error && <div className="error">{state.error}</div>}
            <div className={styles.formWrapper}>
              {/* Conditional rendering based on upload */}
              {!upload && (
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    defaultValue={bill.name}
                    errorMessage={!!errors.name && 'Please provide the bill name'}
                    isInvalid={!!errors.name}
                    label="Bill Name"
                    labelPlacement="outside"
                    {...register('name', { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    className={styles.formInput}
                    defaultValue={bill.amount}
                    errorMessage={!!errors.amount && 'Please provide the bill Amount'}
                    isInvalid={!!errors.amount}
                    label="Bill Amount"
                    labelPlacement="outside"
                    {...register('amount', { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                </div>
              )}
              {!upload && (
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    defaultValue={bill.paymentCurrency}
                    errorMessage={!!errors.paymentCurrency && 'Please provide the currency'}
                    isInvalid={!!errors.paymentCurrency}
                    label="Currency"
                    labelPlacement="outside"
                    {...register('paymentCurrency', { required: true })}
                    radius="sm"
                    type="text"
                    variant="bordered"
                  />
                  <Input
                    className={styles.formInput}
                    defaultValue={bill.dueDate}
                    errorMessage={!!errors.dueDate && 'Please provide the due date'}
                    isInvalid={!!errors.dueDate}
                    label="Due Date"
                    labelPlacement="outside"
                    {...register('due_date', { required: true })}
                    radius="sm"
                    type="date"
                    variant="bordered"
                  />
                </div>
              )}
              {!upload && (
                <div className={styles.formElementsWrapper}>
                  <StatusAutocompleteComponent
                    control={control}
                    errors={errors}
                    register={register}
                    status={{ id: '', name: '' } || ''}
                    name="status"
                  />
                </div>
              )}

              {/* Upload section */}
              {upload && (
                <div className={styles.formElementsWrapper}>
                  <Input
                    type="file"
                    label="Upload Bill"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    radius="sm"
                    variant="bordered"
                  />
                  {ocrResult && <div className={styles.ocrResult}>OCR Result: {ocrResult}</div>}
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter className={styles.footer}>
            <Button className={styles.footerButton} radius="sm" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: '#10a37f', color: '#fff' }}
              className={styles.footerButton}
              isDisabled={!!state?.success}
              isLoading={isSubmitting}
              radius="sm"
              type="submit"
            >
              {upload ? 'Upload' : 'Create'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

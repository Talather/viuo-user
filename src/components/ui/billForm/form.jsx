// // import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
// // import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
// // import { useContext, useEffect, useState } from 'react';
// // import { useForm } from 'react-hook-form';
// // import styles from './form.module.css';
// // import { useAuth } from '../../../hooks/useAuth'
// // import StatusAutocompleteComponent from '@/components/autoComplete/status';
// // import { createBill } from '@/lib/clientControllers/bills';
// // import { useToast } from '@/hooks/use-toast';
// // export default function BillFormComponent({ bill = {}, update = false }) {
// //   const { control, formState: { errors, isSubmitting }, handleSubmit, register } = useForm();
// //   const [state, setState] = useState({});
// //   const navigate = useNavigate(); // Use navigate from react-router-dom
// //   const { user } = useAuth()
// //   const { toast } = useToast();

// //   const onSubmit = async (formData) => {
// //     console.log("onsubmithit",user.id)
// //     setState({});
// //     const action = createBill;
// //     formData.user_id = user?.id
    
// //     // Replace with your action (e.g., createBill or updateBill)

// //     const response = await action(formData);

// //     setState({ success: true });
// //        toast({
// //         title: "Bill Created Succcessfully",
// //         description: "Bill with the provided information Created Succcessfully",
// //       });
    
// //   };

// //   useEffect(() => {
// //     if (state?.success) {
// //       console.log("Success handling")
// //       navigate('/bills'); // You can navigate to another page on success
// //     }
// //   }, [state]);

// //   return (
// //     <Modal backdrop="blur" isOpen={true} size="3xl" onClose={() => navigate(-1)}>
// //       <form onSubmit={handleSubmit(onSubmit)}>
// //         <ModalContent>
// //           <ModalHeader>{update ? 'Update ' : 'Create '}Bill</ModalHeader>
// //           <ModalBody>
// //             {state?.error && <div className="error">{state.error}</div>}
// //             <div className={styles.formWrapper}>
// //               <div className={styles.formElementsWrapper}>
// //                 <Input
// //                   className={styles.formInput}
// //                   defaultValue={bill.name}
// //                   errorMessage={!!errors.name && 'Please provide the bill first name'}
// //                   isInvalid={!!errors.name}
// //                   label="Bill Name"
// //                   labelPlacement="outside"
// //                   {...register('name', { required: true })}
// //                   radius="sm"
// //                   type="text"
// //                   variant="bordered"
// //                 />
// //                 <Input
// //                   className={styles.formInput}
// //                   defaultValue={bill.amount}
// //                   errorMessage={!!errors.amount && 'Please provide the bill Amount'}
// //                   isInvalid={!!errors.amount}
// //                   label="Bill Amount"
// //                   labelPlacement="outside"
// //                   {...register('amount', { required: true })}
// //                   radius="sm"
// //                   type="text"
// //                   variant="bordered"
// //                 />
// //               </div>
// //               <div className={styles.formElementsWrapper}>
// //                 <Input
// //                   className={styles.formInput}
// //                   defaultValue={bill.paymentCurrency}
// //                   errorMessage={!!errors.paymentCurrency && ''}
// //                   isInvalid={!!errors.paymentCurrency}
// //                   label="Currency"
// //                   labelPlacement="outside"
// //                   {...register('paymentCurrency', { required: true })}
// //                   radius="sm"
// //                   type="text"
// //                   variant="bordered"
// //                 />
// //               {/* </div>
// //               <div className={styles.formElementsWrapper}> */}
// //                 <Input
// //                   className={styles.formInput}
// //                   defaultValue={bill.dueDate}
// //                   errorMessage={!!errors.dueDate && 'Please provide the dueDate'}
// //                   isInvalid={!!errors.dueDate}
// //                   label="Due Date"
// //                   labelPlacement="outside"
// //                   {...register('due_date', { required: true })}
// //                   radius="sm"
// //                   type="date"
// //                   variant="bordered"
// //                 />
// //                 {/* <Input
// //                   className={styles.formInput}
// //                   defaultValue={bill.subsidiary}
// //                   errorMessage={!!errors.subsidiary && 'Please provide the name of subsidiary'}
// //                   isInvalid={!!errors.subsidiary}
// //                   label="Subsidiary"
// //                   labelPlacement="outside"
// //                   {...register('subsidiary', { required: true })}
// //                   radius="sm"
// //                   type="text"
// //                   variant="bordered"
// //                 /> */}
// //               </div>
// //               <div className={styles.formElementsWrapper}>
// //                 {/* <Input
// //                   className={styles.formInput}
// //                   defaultValue={bill.segment}
// //                   errorMessage={!!errors.segment && 'Please provide the segment'}
// //                   isInvalid={!!errors.segment}
// //                   label="Segment"
// //                   labelPlacement="outside"
// //                   {...register('segment', { required: true })}
// //                   radius="sm"
// //                   type="text"
// //                   variant="bordered"
// //                 />
// //                  */}
// //                 <StatusAutocompleteComponent
// //                   control={control}
// //                   errors={errors}
// //                   register={register}
// //                   status={{ id:"",name:""} || ''}
// //                   name='status'
// //                 />
// //               </div>
// //             </div>
// //           </ModalBody>
// //           <ModalFooter className={styles.footer}>
// //             <Button className={styles.footerButton} radius="sm" onClick={() => navigate(-1)}>
// //               Cancel
// //             </Button>
// //             <Button
// //               style={{ backgroundColor: '#10a37f', color: '#fff' }}
// //               className={styles.footerButton}
// //               // color="success"
// //               isDisabled={!!state?.success}
// //               isLoading={isSubmitting}
// //               radius="sm"
// //               type="submit"
// //             >
// //               {update ? 'Update' : 'Create'}
// //             </Button>
// //           </ModalFooter>
// //         </ModalContent>
// //       </form>
// //     </Modal>
// //   );
// // }















































// import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
// import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
// import { useContext, useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import styles from './form.module.css';
// import { useAuth } from '../../../hooks/useAuth';
// import StatusAutocompleteComponent from '@/components/autoComplete/status';
// import { createBill } from '@/lib/clientControllers/bills';
// import { useToast } from '@/hooks/use-toast';
// // import Tesseract from 'tesseract.js'; // If using Tesseract for OCR
// import { useParams } from 'react-router-dom';

//  import { getDocument } from 'pdfjs-dist';
// import Tesseract from 'tesseract.js';
// import pdfToText from 'react-pdftotext'

// export default function BillFormComponent({ bill = {}, update = false }) {
//   const { control, formState: { errors, isSubmitting }, handleSubmit, register, setValue } = useForm();
//   const [state, setState] = useState({});
//   const [file, setFile] = useState(null);
  
//     const [extractedText, setExtractedText] = useState(null);
//   const navigate = useNavigate(); // Use navigate from react-router-dom
//   const { user } = useAuth();
//   const { toast } = useToast();

//   let { upload } = useParams();
//   upload = upload === "true" ? true : false
//   console.log("nalakik", upload)
  



//    function extractText(event) {
//         const file = event.target.files[0]
//         pdfToText(file)
//           .then(text => {
//             console.log("shaka", text)



//              const cleanedText = text.replace(/\s+/g, '').toLowerCase();

//   // Extract fields using regex
//    const values={
//     name: cleanedText.match(/name:”([^”]+)”/)?.[1] || null,
//     amount: Number(cleanedText.match(/amount:(\d+)/)?.[1]) || null,
//     accountNumber: cleanedText.match(/accountnumber:”([^”]+)”/)?.[1] || null,
//     dueDate: cleanedText.match(/due_date:”([\d/]+)”/)?.[1] || null,
//     remainingBalance: Number(cleanedText.match(/remainingbalance:”(\d+)”/)?.[1]) || null,
//     pastDue: Number(cleanedText.match(/pastdue:(\d+)/)?.[1]) || null,
//   };
//     //         const values={
//     // name: text.match(/Name:\s*["']?([\w\s]+)["']?/i)?.[1] || null,
//     // amount: Number(text.match(/Amount:\s*(\d+)/i)?.[1]) || null,
//     // accountNumber: text.match(/accountNumber:\s*["']?(\d+)["']?/i)?.[1] || null,
//     // dueDate: text.match(/due_date:\s*["']?([\d/]+)["']?/i)?.[1] || null,
//     // remainingBalance: Number(text.match(/remainingBalance:\s*(\d+)/i)?.[1]) || null,
//     // pastDue: Number(text.match(/pastDue:\s*(\d+)/i)?.[1]) || null,
//     //         };

//             console.log("bahubali",values)
//             setExtractedText(values)



//            })
//             .catch(error => console.error("Failed to extract text from pdf"))
//     }

  

  
//   useEffect(() => {
//     console.log("hijra",extractedText)
//   },[extractText])
//   // Handle OCR scanning
  




















 


//   const onSubmit = async (formData) => {
//     console.log("onsubmithit", user.id);
//     setState({});
//     const action = createBill;
//     formData.user_id = user?.id;

//     // Replace with your action (e.g., createBill or updateBill)
//     const response = await action(formData);

//     setState({ success: true });
//     toast({
//       title: "Bill Created Successfully",
//       description: "Bill with the provided information Created Successfully",
//     });
//   };

//   useEffect(() => {
//     if (state?.success) {
//       console.log("Success handling");
//       navigate('/bills'); // You can navigate to another page on success
//     }
//   }, [state]);

//   return (
//     <Modal backdrop="blur" isOpen={true} size="3xl" onClose={() => navigate(-1)}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <ModalContent>
//           <ModalHeader>{upload ? 'Upload ' : 'Create '}Bill</ModalHeader>
//           <ModalBody>
//             {state?.error && <div className="error">{state.error}</div>}
//             <div className={styles.formWrapper}>
//               {/* Conditional rendering based on upload */}
              
//                 <div className={styles.formElementsWrapper}>
//                   <Input
//                     className={styles.formInput}
//                     defaultValue={extractedText?.name}
//                     errorMessage={!!errors.name && 'Please provide the bill name'}
//                     isInvalid={!!errors.name}
//                     label="Bill Name"
//                     labelPlacement="outside"
//                     {...register('name', { required: true })}
//                     radius="sm"
//                     type="text"
//                     variant="bordered"
//                   />
//                   <Input
//                     className={styles.formInput}
//                     defaultValue={ extractedText?.amount}
//                     errorMessage={!!errors.amount && 'Please provide the bill Amount'}
//                     isInvalid={!!errors.amount}
//                     label="Bill Amount"
//                     labelPlacement="outside"
//                     {...register('amount', { required: true })}
//                     radius="sm"
//                     type="text"
//                     variant="bordered"
//                   />
//                 </div>
              
             
//                 <div className={styles.formElementsWrapper}>
//                   <Input
//                     className={styles.formInput}
//                     defaultValue={extractedText?.accountNumber}
//                     errorMessage={!!errors.accountNumber && 'Please provide the account number'}
//                     isInvalid={!!errors.accountNumber}
//                     label="Account Number"
//                     labelPlacement="outside"
//                     {...register('accountNumber', { required: true })}
//                     radius="sm"
//                     type="text"
//                     variant="bordered"
//                   />
//                   <Input
//                     className={styles.formInput}
//                     defaultValue={ extractedText?.dueDate}
//                     errorMessage={!!errors.dueDate && 'Please provide the due date'}
//                     isInvalid={!!errors.dueDate}
//                     label="Due Date"
//                     labelPlacement="outside"
//                     {...register('due_date', { required: true })}
//                     radius="sm"
//                     type="date"
//                     variant="bordered"
//                   />
                  
//                 </div>
             
              
//                 <div className={styles.formElementsWrapper}>
//                  <Input
//                     className={styles.formInput}
//                     defaultValue={extractedText?.remainingBalance}
//                     errorMessage={!!errors.remainingBalance && 'Please provide the Remaining Balance'}
//                     isInvalid={!!errors.remainingBalance}
//                     label="Remaining Balance"
//                     labelPlacement="outside"
//                     {...register('remainingBalance', { required: true })}
//                     radius="sm"
//                     type="number"
//                     variant="bordered"
//                 />
//                 <Input
//                     className={styles.formInput}
//                     defaultValue={extractedText?.pastDue || ''}
//                     errorMessage={!!errors.pastDue && 'Please provide the Past Due Balance' }
//                     isInvalid={!!errors.pastDue}
//                     label="Past Due Balance"
//                     labelPlacement="outside"
//                     {...register('pastDue', { required: true })}
//                     radius="sm"
//                     type="number"
//                     variant="bordered"
//                   />
//                 </div>
              

//               {/* Upload section */}
              
//                 <div className={styles.formElementsWrapper}>
//                   <Input
//                     type="file"
//                     label="Upload Bill"
//                     onChange={extractText}
//                     accept=".pdf,.jpg,.png"
//                     radius="sm"
//                     variant="bordered"
//                   />
//                  </div>
              
//             </div>
//           </ModalBody>
//           <ModalFooter className={styles.footer}>
//             <Button className={styles.footerButton} radius="sm" onClick={() => navigate(-1)}>
//               Cancel
//             </Button>
//             <Button
//               style={{ backgroundColor: '#10a37f', color: '#fff' }}
//               className={styles.footerButton}
//               isDisabled={!!state?.success}
//               isLoading={isSubmitting}
//               radius="sm"
//               type="submit"
//             >
//               {upload ? 'Upload' : 'Create'}
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </form>
//     </Modal>
//   )
// }












import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './form.module.css'
import { useAuth } from '../../../hooks/useAuth'
import StatusAutocompleteComponent from '@/components/autoComplete/status'
import { createBill } from '@/lib/clientControllers/bills'
import { useToast } from '@/hooks/use-toast'
import pdfToText from 'react-pdftotext'
import { useParams } from 'react-router-dom'

export default function BillFormComponent ({ bill = {}, update = false }) {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    setValue
  } = useForm()
  const [state, setState] = useState({})
  const [extractedText, setExtractedText] = useState(null)
  const navigate = useNavigate()
  const { user } = useAuth()
  const { toast } = useToast()
  const { upload } = useParams()


//   useEffect(() => {
//   if (extractedText) {
//     for (const [key, value] of Object.entries(extractedText)) {
//       if (value) {
//         setValue(key, value)
//       }
//     }
//   }
// }, [extractedText])


  const isUploadMode = upload === 'true'

  const extractText = async event => {
  const file = event.target.files[0]
    try {
    
      const cleanValues = values => {
  return Object.fromEntries(
    Object.entries(values).filter(
      ([key, value]) => value !== '' && value != null
    )
  )
}

    const text = await pdfToText(file)

    // Clean and normalize the text (e.g., remove extra spaces, handle punctuation)
    const cleanedText = text.replace(/\s+/g, ' ').toLowerCase() // Replace multiple spaces with a single space

    // Regular expressions for flexible matching
    // const values = {
    //   name:
    //     cleanedText.match(/name\s*[:=]\s*["'“”]?\s*([^"'”]+)\s*["'”]?/)?.[1] ||
    //     '',
    //   amount: Number(
    //     cleanedText
    //       .match(/amount\s*[:=]\s*(\d[\d,.]*)/)?.[1]
    //       .replace(/[^0-9.-]+/g, '') || ''
    //   ), // Handle comma-separated amounts
    //   accountNumber:
    //     cleanedText.match(
    //       /accountnumber\s*[:=]\s*["'“”]?\s*([^"'”]+)\s*["'”]?/
    //     )?.[1] || '',
    //   // dueDate:
    //   //   cleanedText.match(
    //   //     /due\s*date\s*[:=]\s*(\d{1,2}\/\d{1,2}\/\d{4})/
    //   //   )?.[1] || '',



    //   //  best // dueDate: cleanedText.match(/due\s*date\s*[:=]\s*(\d{1,2}[-\/]?\d{1,2}[-\/]?\d{2,4})/)?.[1] || '',

    //   dueDate: cleanedText.match(/due\s*date\s*[:=]\s*["'“”]?\s*(\d{1,2}[\/-]?\d{1,2}[\/-]?\d{2,4})\s*["'”]?/)?.[1] || '',

    //   remainingBalance: Number(
    //     cleanedText
    //       .match(/remainingbalance\s*[:=]\s*(\d[\d,.]*)/)?.[1]
    //       .replace(/[^0-9.-]+/g, '') || ''
    //   ),
    //   pastDue: Number(
    //     cleanedText
    //       .match(/pastdue\s*[:=]\s*(\d[\d,.]*)/)?.[1]
    //       .replace(/[^0-9.-]+/g, '') || ''
    //   )
    // }




    const values = {
  name:
    cleanedText.match(/name\s*[:=]\s*["'“”]?\s*([^"'”]+)\s*["'”]?/)?.[1] ||
    'N/A',
  amount:
    cleanedText
      .match(/amount\s*[:=]\s*(\d[\d,.]*)/)?.[1]
      .replace(/[^0-9.-]+/g, '') || '0',
  accountNumber:
    cleanedText.match(
      /accountnumber\s*[:=]\s*["'“”]?\s*([^"'”]+)\s*["'”]?/
    )?.[1] || 'N/A',

  // Handle multiple date formats with fallback
  dueDate:
    cleanedText.match(
      /due\s*date\s*[:=]\s*["'“”]?\s*(\d{1,2}[\/-]?\d{1,2}[\/-]?\d{2,4}|[a-z]+ \d{1,2}, \d{4})\s*["'”]?/
    )?.[1] || '',

  remainingBalance:
    cleanedText
      .match(/remainingbalance\s*[:=]\s*(\d[\d,.]*)/)?.[1]
      .replace(/[^0-9.-]+/g, '') || '0',
  pastDue:
    cleanedText
      .match(/pastdue\s*[:=]\s*(\d[\d,.]*)/)?.[1]
      .replace(/[^0-9.-]+/g, '') || '0'
}
   
      const cleanedValues = cleanValues(values)

    
    setExtractedText(cleanedValues)

    console.log("values",cleanedValues
)
    // Set form values automatically
    for (const [key, value] of Object.entries(cleanedValues)) {
      // if (value) {
        setValue(key, value)
      // }
    }
  } catch (error) {
    console.error('Failed to extract text from PDF', error)
  }
}


  const onSubmit = async formData => {
    try {
      setState({})
      const action = createBill
      formData.user_id = user?.id
      await action(formData)
      setState({ success: true })
      toast({
        title: 'Bill Created Successfully',
        description:
          'Bill with the provided information has been created successfully.'
      })
    } catch (error) {
      console.error('Error creating bill:', error)
    }
  }

  useEffect(() => {
    if (state?.success) {
      navigate('/bills')
    }
  }, [state, navigate])


  let formLabels = extractedText ? {
    name: "",
    amount: "",
    dueDate: "",
    remainingBalance: "",
    pastDue: "",
    accountNumber:""
  } : {
    name: "Bill Name",
    amount: "Bill Amount",
    dueDate: "Bill Due Date",
    remainingBalance: "Remaining Balance",
    pastDue: "Bill Past Due",
    accountNumber:"Bill Account Number"
  }

  return (
    <Modal
      backdrop='blur'
      isOpen={true}
      size='3xl'
      onClose={() => navigate(-1)}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>{isUploadMode ? 'Upload ' : 'Create '}Bill</ModalHeader>
















          {!extractedText && (
            <ModalBody>
              {state?.error && <div className='error'>{state.error}</div>}
              <div className={styles.formWrapper}>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText
                    //   ?.name || ''}
                    // value={extractedText?.name || ''}
                    // onChange={(e) =>{setValue("name",'')}}
                    errorMessage={!!errors.name && 'Please provide the bill name'}
                    isInvalid={!!errors.name}
                    label={formLabels.name}
                    labelPlacement='outside'
                    {...register('name', { required: true })}
                    radius='sm'
                    type='text'
                    variant='bordered'
                  />
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText
                    //   ?.amount}
                    errorMessage={
                      !!errors.amount && 'Please provide the bill amount'
                    }
                    // value={extractedText?.amount || ''}
                    isInvalid={!!errors.amount}
                    label={formLabels.amount}
                    labelPlacement='outside'
                    {...register('amount', { required: true })}
                    radius='sm'
                    type='text'
                    variant='bordered'
                  />
                </div>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText
                    //   ?.accountNumber || ''}
                    // value={extractedText?.accountNumber || ''}
                    errorMessage={
                      !!errors.accountNumber &&
                      'Please provide the account number'
                    }
                    isInvalid={!!errors.accountNumber}
                    label={formLabels.accountNumber}
                    labelPlacement='outside'
                    {...register('accountNumber', { required: true })}
                    radius='sm'
                    type='text'
                    variant='bordered'
                  />
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText?.dueDate || ''}
                    // value={extractedText?.dueDate || ''}
                    errorMessage={
                      !!errors.dueDate && 'Please provide the due date'
                    }
                    isInvalid={!!errors.dueDate}
                    label={formLabels.dueDate}
                    labelPlacement='outside'
                    {...register('dueDate', { required: true })}
                    radius='sm'
                    type='date'
                    variant='bordered'
                  />
                </div>
                <div className={styles.formElementsWrapper}>
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText
                    //   ?.remainingBalance || ''}
                    // value={extractedText?.remainingBalance || ''}
                    errorMessage={
                      !!errors.remainingBalance &&
                      'Please provide the remaining balance'
                    }
                    isInvalid={!!errors.remainingBalance}
                    label={formLabels.remainingBalance}
                    labelPlacement='outside'
                    {...register('remainingBalance', { required: true })}
                    radius='sm'
                    type='number'
                    variant='bordered'
                  />
                  <Input
                    className={styles.formInput}
                    // defaultValue={extractedText
                    //   ?.pastDue || ''}
                    errorMessage={
                      !!errors.pastDue && 'Please provide the past due balance'
                    }
                    // value={extractedText?.pastDue || ''}
                    isInvalid={!!errors.pastDue}
                    label={formLabels.pastDue}
                    labelPlacement='outside'
                    {...register('pastDue', { required: true })}
                    radius='sm'
                    type='number'
                    variant='bordered'
                  />
                </div>
              
                <div className={styles.formElementsWrapper}>
                  <Input
                    type='file'
                    label='Upload Bill'
                    onChange={extractText}
                    accept='.pdf,.jpg,.png'
                    radius='sm'
                    variant='bordered'
                  />
                </div>
              
              </div>
            </ModalBody>)}
          


          {extractedText && (<ModalBody>
  {state?.error && <div className='error'>{state.error}</div>}
  <div className={styles.formWrapper}>
    <div className={styles.formElementsWrapper}>
      <Input
        className={styles.formInput}
        defaultValue={extractedText?.name || ''}
        // value={extractedText?.name || ''}
        // onChange={(e) =>{setValue("name",'')}}
        errorMessage={!!errors.name && 'Please provide the bill name'}
        isInvalid={!!errors.name}
        label={formLabels.name}
        labelPlacement='outside'
        {...register('name', { required: true })}
        radius='sm'
        type='text'
        variant='bordered'
      />
      <Input
        className={styles.formInput}
        defaultValue={extractedText?.amount}
        errorMessage={!!errors.amount && 'Please provide the bill amount'}
        // value={extractedText?.amount || ''}
        isInvalid={!!errors.amount}
        label={formLabels.amount}
        labelPlacement='outside'
        {...register('amount', { required: true })}
        radius='sm'
        type='text'
        variant='bordered'
      />
    </div>
    <div className={styles.formElementsWrapper}>
      <Input
        className={styles.formInput}
        defaultValue={extractedText?.accountNumber || ''}
        // value={extractedText?.accountNumber || ''}
        errorMessage={
          !!errors.accountNumber && 'Please provide the account number'
        }
        isInvalid={!!errors.accountNumber}
        label={formLabels.accountNumber}
        labelPlacement='outside'
        {...register('accountNumber', { required: true })}
        radius='sm'
        type='text'
        variant='bordered'
      />
      <Input
        className={styles.formInput}
        defaultValue={extractedText?.dueDate || ''}
        // value={extractedText?.dueDate || ''}
        errorMessage={!!errors.dueDate && 'Please provide the due date'}
        isInvalid={!!errors.dueDate}
        label={formLabels.dueDate}
        labelPlacement='outside'
        {...register('dueDate', { required: true })}
        radius='sm'
        type='date'
        variant='bordered'
      />
    </div>
    <div className={styles.formElementsWrapper}>
      <Input
        className={styles.formInput}
        defaultValue={extractedText?.remainingBalance || ''}
        // value={extractedText?.remainingBalance || ''}
        errorMessage={
          !!errors.remainingBalance && 'Please provide the remaining balance'
        }
        isInvalid={!!errors.remainingBalance}
        label={formLabels.remainingBalance}
        labelPlacement='outside'
        {...register('remainingBalance', { required: true })}
        radius='sm'
        type='number'
        variant='bordered'
      />
      <Input
        className={styles.formInput}
        defaultValue={extractedText?.pastDue || ''}
        errorMessage={!!errors.pastDue && 'Please provide the past due balance'}
        // value={extractedText?.pastDue || ''}
        isInvalid={!!errors.pastDue}
        label={formLabels.pastDue}
        labelPlacement='inside'
        {...register('pastDue', { required: true })}
        radius='sm'
        type='number'
        variant='bordered'
      />
    </div>

    <div className={styles.formElementsWrapper}>
      <Input
        type='file'
        label='Upload Bill'
        onChange={extractText}
        accept='.pdf,.jpg,.png'
        radius='sm'
        variant='bordered'
      />
    </div>
  </div>
</ModalBody>
)}
          <ModalFooter className={styles.footer}>
            <Button
              className={styles.footerButton}
              radius='sm'
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: '#10a37f', color: '#fff' }}
              className={styles.footerButton}
              isDisabled={!!state?.success}
              isLoading={isSubmitting}
              radius='sm'
              type='submit'
            >
              {isUploadMode ? 'Upload' : 'Create'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

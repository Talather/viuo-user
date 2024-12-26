import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom'; // Use React Router for navigation
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './form.module.css';

export default function BillFormComponent({ bill = {}, update = false }) {
  const { control, formState: { errors, isSubmitting }, handleSubmit, register } = useForm();
  const [state, setState] = useState({});
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const onSubmit = async (formData) => {
    setState({});
    const action = null; // Replace with your action (e.g., createBill or updateBill)

    const response = await action({ id: bill._id }, formData);
    setState(response);
  };

  useEffect(() => {
    if (state?.success) {
      // Success handling
      // navigate('/somewhere'); // You can navigate to another page on success
    }
  }, [state]);

  return (
    <Modal backdrop="blur" isOpen={true} size="3xl" onClose={() => navigate(-1)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <ModalHeader>{update ? 'Update ' : 'Create '}Bill</ModalHeader>
          <ModalBody>
            {state?.error && <div className="error">{state.error}</div>}
            <div className={styles.formWrapper}>
              <div className={styles.formElementsWrapper}>
                <Input
                  className={styles.formInput}
                  defaultValue={bill.name}
                  errorMessage={!!errors.name && 'Please provide the bill first name'}
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
              <div className={styles.formElementsWrapper}>
                <Input
                  className={styles.formInput}
                  defaultValue={bill.paymentCurrency}
                  errorMessage={!!errors.paymentCurrency && ''}
                  isInvalid={!!errors.paymentCurrency}
                  label="Currency"
                  labelPlacement="outside"
                  {...register('paymentCurrency', { required: true })}
                  radius="sm"
                  type="text"
                  variant="bordered"
                />
              {/* </div>
              <div className={styles.formElementsWrapper}> */}
                <Input
                  className={styles.formInput}
                  defaultValue={bill.dueDate}
                  errorMessage={!!errors.dueDate && 'Please provide the dueDate'}
                  isInvalid={!!errors.dueDate}
                  label="Due Date"
                  labelPlacement="outside"
                  {...register('dueDate', { required: true })}
                  radius="sm"
                  type="date"
                  variant="bordered"
                />
                {/* <Input
                  className={styles.formInput}
                  defaultValue={bill.subsidiary}
                  errorMessage={!!errors.subsidiary && 'Please provide the name of subsidiary'}
                  isInvalid={!!errors.subsidiary}
                  label="Subsidiary"
                  labelPlacement="outside"
                  {...register('subsidiary', { required: true })}
                  radius="sm"
                  type="text"
                  variant="bordered"
                /> */}
              </div>
              {/* <div className={styles.formElementsWrapper}> */}
                {/* <Input
                  className={styles.formInput}
                  defaultValue={bill.segment}
                  errorMessage={!!errors.segment && 'Please provide the segment'}
                  isInvalid={!!errors.segment}
                  label="Segment"
                  labelPlacement="outside"
                  {...register('segment', { required: true })}
                  radius="sm"
                  type="text"
                  variant="bordered"
                />
                <Input
                  className={styles.formInput}
                  defaultValue={bill.email}
                  errorMessage={!!errors.email && 'Please provide the bill email address'}
                  isInvalid={!!errors.email}
                  label="Email"
                  labelPlacement="outside"
                  {...register('email', { required: true })}
                  radius="sm"
                  type="text"
                  variant="bordered"
                />
              </div> */}
            </div>
          </ModalBody>
          <ModalFooter className={styles.footer}>
            <Button className={styles.footerButton} radius="sm" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button
              style={{ backgroundColor: '#10a37f', color: '#fff' }}
              className={styles.footerButton}
              // color="success"
              isDisabled={!!state?.success}
              isLoading={isSubmitting}
              radius="sm"
              type="submit"
            >
              {update ? 'Update' : 'Create'}
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

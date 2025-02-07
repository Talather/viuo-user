'use client'
import { Autocomplete, AutocompleteItem } from '@nextui-org/react'
import { Controller } from 'react-hook-form'
import { useState, useEffect } from 'react'
import styles from './autocomplete.module.css'

// Define type for BillStatus
type BillStatus = 'paid' | 'unpaid' | 'pending'

// Interface for component props
interface StatusAutocompleteProps {
  control: any
  errors?: Record<string, any>
  label?: string
  name: string
  register: any
  status?: { id: BillStatus; name: string }
  variant?: 'default' | 'primary'
}

const StatusAutocompleteComponent: React.FC<StatusAutocompleteProps> = ({
  control,
  errors = {},
  label = 'Status',
  name,
  register,
  status = { id: 'pending', name: 'Pending' },
  variant = 'default'
}: StatusAutocompleteProps) => {
  const classNames = {
    base: styles.base,
    clearButton: styles.clearButton,
    endContentWrapper: styles.endContentWrapper,
    listbox: styles.listbox,
    listboxWrapper: styles.listboxWrapper,
    popoverContent: styles.popoverContent,
    selectorButton: styles.selectorButton
  }

  const [statuses, setStatuses] = useState<{ id: BillStatus; name: string }[]>(
    []
  )

  const getStatuses = async () => {
    const statusList: any = [
      { id: 'paid', name: 'Paid' },
      { id: 'unpaid', name: 'Unpaid' },
      { id: 'pending', name: 'Pending' }
    ]
    setStatuses(statusList)
  }

  useEffect(() => {
    getStatuses()
  }, [])

  const handleOpenChange = async (isOpen: boolean) => {
    if (isOpen && statuses.length === 0) await getStatuses()
  }

//   const handleSelectionChange = (status: BillStatus) => {
//     // Handle any additional logic when a status is selected
//   }

  return (
    <Controller
      control={control}
      defaultValue={status.id}
      name={name}
      render={({ field: { onBlur, onChange, value } }) => (
        <Autocomplete
          allowsCustomValue={true}
          aria-label='Status'
          className={styles.formInput}
          classNames={variant === 'primary' ? classNames : {}}
          defaultItems={statuses}
          defaultSelectedKey={status.id}
          errorMessage={!!errors[name] && 'Please select a status'}
          isInvalid={!!errors[name]}
          label={label}
          labelPlacement='outside'
          placeholder={variant === 'primary' ? 'Status' : ''}
          radius='sm'
          {...register(name, { required: true })}
          selectedKey={value}
          variant='bordered'
          onBlur={onBlur}
          onOpenChange={handleOpenChange}
          onSelectionChange={value => {
            onChange({ target: { value } })
            // handleSelectionChange(value)
          }}
        >
          {(status:any) => (
            <AutocompleteItem key={status.id} value={status.id}>
              {status.name}
            </AutocompleteItem>
          )}
        </Autocomplete>
      )}
    />
  )
}

export default StatusAutocompleteComponent

import React, { useState } from 'react'

interface User {
  name: string
  email: string
  role: string
  joinedDate: string
  lastLogin: string
  profilePicture?: string
  address?: string
  dob?: string
}

const ProfilePage: React.FC = () => {
  const [user] = useState<User>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    joinedDate: '2023-01-15',
    lastLogin: '2024-12-20',
    profilePicture: '',
    address: '1234 Elm Street, Springfield, USA',
    dob: '1990-05-15'
  })

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      console.log('Uploaded file:', file)
      // You can handle file upload logic here
    }
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-white'>
      <div className='w-3/4 p-8 text-white rounded-lg shadow-lg md:w-2/3 lg:w-1/2 bg-gradient-to-br from-button-gpt to-black'>
        <h2 className='mb-6 text-4xl font-bold text-center'>User Profile</h2>

        {/* Profile Picture */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Profile Picture:</label>
          <label
            className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400'
            htmlFor='profilePicture'
          >
            Upload Profile Picture
          </label>
          <input
            type='file'
            id='profilePicture'
            accept='image/*'
            className='hidden'
            onChange={handleFileUpload}
          />
          {user.profilePicture && (
            <img
              src={user.profilePicture}
              alt='Profile'
              className='w-32 h-32 mx-auto mt-4 rounded-full'
            />
          )}
        </div>

        {/* Document Upload */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>
            Document Upload / Archive:
          </label>
          <label
            className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400'
            htmlFor='documentUpload'
          >
            Upload Document
          </label>
          <input
            type='file'
            id='documentUpload'
            className='hidden'
            onChange={handleFileUpload}
          />
        </div>

        {/* Address */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Address:</label>
          <input
            type='text'
            value={user.address}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50'
            // readOnly
          />
        </div>

        {/* Date of Birth */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Date of Birth:</label>
          <input
            type='text'
            value={user.dob}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50'
            // readOnly
          />
        </div>

        {/* Profile Link */}
        <div className='mb-6'>
          <label className='block mb-2 text-white '>Profile Link:</label>
          <input
            type='text'
            value={`https://example.com/user/${user.name
              .toLowerCase()
              .replace(/ /g, '-')}`}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
            // readOnly
          />
        </div>

        {/* Other Info */}
        <div className='mb-4'>
          <label className='block mb-2 text-white'>Name:</label>
          <input
            type='text'
            value={user.name}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
            // readOnly
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-white'>Email:</label>
          <input
            type='email'
            value={user.email}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
            // readOnly
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-white'>Role:</label>
          <input
            type='text'
            value={user.role}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
            // readOnly
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-white'>Joined Date:</label>
          <input
            type='text'
            value={user.joinedDate}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
            // readOnly
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2 text-white'>Last Login:</label>
          <input
            type='text'
            value={user.lastLogin}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
            // readOnly
          />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

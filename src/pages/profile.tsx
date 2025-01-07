import React, { useState, useEffect } from 'react'
// import Button from "@/components/button";
import { useAuth } from '../hooks/useAuth'
import { storage, db } from '../lib/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { doc, updateDoc } from 'firebase/firestore'
import { Button } from '@nextui-org/button'
import { useToast } from '../hooks/use-toast'

const ProfilePage: React.FC = () => {
  const { user } = useAuth()
  const { toast } = useToast()
  const [profilePicture, setProfilePicture] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [dob, setDob] = useState<string>('')
  const [profileLink, setProfileLink] = useState<string>('')
  // const [_, setTotalDocuments] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (user) {
      setProfileLink(
        `https://vuior.com/user/${user.name?.toLowerCase().replace(/ /g, '-')}`
      )
    }
  }, [user])
  useEffect(() => {
    if (user) {
      setProfilePicture(user.avatar || '')
      setAddress(user.address || '1234 Elm Street, Springfield, USA')
      setDob(user.dob || '1995-05-15')
      // setTotalDocuments(user.totalDocuments || 0);
    }
  }, [user])

  console.log(address)
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!user || !user.id) {
      console.log('User is not authenticated or user ID is missing.')
      return
    }
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const storageRef = ref(storage, `avatars/${user?.id}/${file.name}`)
      const snapshot = await uploadBytes(storageRef, file)
      const fileUrl = await getDownloadURL(snapshot.ref)

      // Update Firebase user profile data
      const userDoc = doc(db, 'users', user.id)
      await updateDoc(userDoc, { avatar: fileUrl })

      // Update state
      setProfilePicture(fileUrl)
      toast({
        title: 'Success',
        description: 'Profile Picture Updated'
      })
    }
  }

  // const handleDocumentUpload = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   if (!user || !user.id) {
  //     console.log("User is not authenticated or user ID is missing.");
  //     return;
  //   }
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     const storageRef = ref(storage, `documents/${user?.id}/${file.name}`);
  //     const snapshot = await uploadBytes(storageRef, file);
  //     const fileUrl = await getDownloadURL(snapshot.ref);
  //     // Add document link to Firestore
  //     const documentsCollection = collection(db, "documents");
  //     await addDoc(documentsCollection, {
  //       userId: user.id,
  //       documentUrl: fileUrl,
  //       documentName: file.name,
  //       documentType: file.type,
  //       uploadedAt: new Date(),
  //     });
  //     const userDoc = doc(db, "users", user.id);
  //     await updateDoc(userDoc, { totalDocuments: totalDocuments + 1 });
  //     setTotalDocuments(totalDocuments + 1);
  //     toast({
  //       title: "Success",
  //       description: "Document Updated",
  //     });
  //   }
  // };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value)
    }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      if (!user || !user.id) {
        console.log('User is not authenticated or user ID is missing.')
        return
      }
      const userDocRef = doc(db, 'users', user.id)
      await updateDoc(userDocRef, {
        address: address,
        dob: dob
      })
      toast({
        title: 'Success',
        description: 'User Information Updated'
      })
      setIsLoading(false)
    } catch (error) {
      console.error('Error updating profile:', error)
      // alert("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white'>
      <div className='w-3/4 p-8 text-white rounded-lg shadow-lg md:w-2/3 lg:w-1/2 bg-gradient-to-br from-button-gpt to-black'>
        <h2 className='mb-6 text-4xl font-bold text-center'>User Profile</h2>
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Profile Picture:</label>
          <label
            className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
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
          {profilePicture && (
            <img
              src={profilePicture}
              alt='Profile'
              className='w-32 h-32 mx-auto mt-4 rounded-full'
            />
          )}
        </div>

        {/* Document Upload */}
        {/* <div className="mb-6">
          <label className="block mb-2 text-white">
            Document Upload / Archive ({totalDocuments}):
          </label>
          <label
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            htmlFor="documentUpload"
          >
            Upload Document
          </label>
          <input
            type="file"
            id="documentUpload"
            className="hidden"
            onChange={handleDocumentUpload}
          />
        </div> */}
        {/* <div className="mb-6">
          <label className="block mb-2 text-white">Name:</label>
          <input
            type="text"
            value={address}
            onChange={handleInputChange(setAddress)}
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div> */}

        {/* Address */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Address:</label>
          <input
            type='text'
            value={address}
            onChange={handleInputChange(setAddress)}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
          />
        </div>

        {/* Date of Birth */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Date of Birth:</label>
          <input
            type='date'
            value={dob}
            onChange={handleInputChange(setDob)}
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
          />
        </div>

        {/* Profile Link */}
        <div className='mb-6'>
          <label className='block mb-2 text-white'>Profile Link:</label>
          <input
            type='text'
            value={profileLink}
            readOnly
            className='w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 '
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Button
            children={isLoading ? 'Saving...' : 'Save Changes'}
            className='justify-center font-bold text-white hover:bg-button-gpt-hover bg-button-gpt'
            isLoading={isLoading}
            variant='faded'
            type='submit'
            onPress={handleSubmit}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className='flex flex-row justify-center w-full mt-12 '>
        <div className='w-1/2 px-10 py-3 text-center shadow-lg bg-gradient-to-br from-button-gpt to-black rounded-xl'>
          <h2 className='mb-4 text-3xl font-semibold text-white'>
            Redeem Code
          </h2>
          <div className='px-6 py-2 font-mono text-lg font-bold tracking-wide text-gray-800 bg-gray-100 rounded-lg shadow-md'>
            <input
              type='text'
              placeholder='Enter Code here'
              className='w-full px-8 py-2 text-gray-800 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-button-gpt focus:border-transparent'
            />
          </div>

          <button
            className='px-6 py-2 mt-6 font-medium text-white transition duration-200 rounded-lg shadow-md bg-button-gpt hover:bg-button-gpt'
            // onClick={() => navigator.clipboard.writeText(referralCode)}
          >
            Redeem Code
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage

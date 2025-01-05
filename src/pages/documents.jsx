import React, { useState, useEffect } from 'react'
import DocumentCard from '@/components/documentCard'
import { db } from '@/lib/firebaseConfig'
import { getFirestore, collection, getDocs, orderBy, query
} from 'firebase/firestore'
import { useUserAssets } from '@/context/userSpecificAssetsContext'

const DocumentPage = () => {

  const { userDocuments } = useUserAssets()
  console.log("shaaafij",userDocuments)
//   const [docs, setDocs] = useState([])

//   useEffect(() => {
//     const fetchDocuments = async () => {
//   try {
//     // Get a reference to the documents collection
//     const documentsCollectionRef = collection(db, 'documents')

//     // Create a query to order by 'uploadedAt' field in ascending order (you can change to 'desc' for descending)
//     const documentsQuery = query(
//       documentsCollectionRef,
//       orderBy('uploadedAt', 'asc')
//     )

//     const querySnapshot = await getDocs(documentsQuery)

//     // Map the documents into an array with the necessary structure
//     const documents = querySnapshot.docs.map(doc => ({
//       ...doc.data(),
//       id: doc.id // Optional: if you want to include the document ID
//     }))

//     // Update the state with the fetched documents
//     setDocs(documents)
//   } catch (error) {
//     console.error('Error fetching documents:', error)
//   }
// }


//     fetchDocuments() // Call the async function to fetch documents
//   }, []) // Empty dependency array means this effect runs only once when the component mounts

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {userDocuments.length && userDocuments.map((doc, index) => (
        <DocumentCard key={index} document={doc} />
      ))}
    </div>
  )
}

export default DocumentPage

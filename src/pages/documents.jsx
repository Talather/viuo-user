import React, { useState, useEffect } from 'react'
import DocumentCard from '@/components/documentCard'
import { db } from '@/lib/firebaseConfig'
import { getFirestore, collection, getDocs, orderBy, query
} from 'firebase/firestore'
import { useUserAssets, useUserAssetsDispatch } from '@/context/userSpecificAssetsContext'
import { onSnapshot } from 'firebase/firestore'
// import { db } from '@/lib/firebaseConfig' // Your Firebase setup file

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

  
  

  
  
  

  
  









  
  



  












  
  

  
  const dispatch=useUserAssetsDispatch()
  useEffect(() => {
  // if (user) {
    const docsCollectionRef = collection(db, 'documents') // Replace with your collection name
    const unsubscribe = onSnapshot(
      docsCollectionRef,
      snapshot => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        dispatch({ type: 'SET_ALL_DOCUMENTS', payload: docs })
        // Update the context with the latest data
      },
      error => {
        console.error('Error listening to bills updates:', error)
      }
    )

    return () => unsubscribe() // Cleanup listener on unmount
  // }
}, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {userDocuments.length && userDocuments.map((doc, index) => (
        <DocumentCard key={index} document={doc} />
      ))}
    </div>
  )
}

export default DocumentPage

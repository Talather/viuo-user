import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { FirebaseApp, initializeApp } from 'firebase/app'

// Initialize Firebase app
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
}

const app: FirebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Universal function to populate reference field
export async function populateReference (
  referenceField: any, // Reference field in the main object
  tableName: string, // The collection name of the referenced document
  mainObject: any // The main object where the referenced data will be populated
): Promise<any> {
  try {
    // Get reference field from main object (assume it's a reference)
    const reference = mainObject[referenceField]
    if (!reference) {
      console.log(`No reference found in the field: ${referenceField}`)
      return mainObject // Return the main object without modification
    }

    // Get the referenced document ID from the reference field
    const docRef = doc(db, tableName, reference.id) // Assuming the reference contains an `id` field
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const referencedData = docSnap.data() // Get the referenced data
      const populatedObject = {
        ...mainObject,
        [referenceField]: referencedData // Attach the referenced data to the main object
      }
      return populatedObject
    } else {
      console.log(`No document found for reference: ${reference.id}`)
      return mainObject // Return the main object without modification
    }
  } catch (error) {
    console.error('Error populating reference:', error)
    return mainObject // Return the main object in case of error
  }
}

// Example usage
// interface User {
//   name: string
//   email: string
//   profileRef: { id: string } // Reference to profile document
// }

// async function exampleUsage () {
//   const user: User = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     profileRef: { id: 'profile123' }
//   }

//   // Populate the reference in the user object with data from the "profiles" collection
//   const populatedUser = await populateReference('profileRef', 'profiles', user)
//   console.log('Populated User:', populatedUser)
// }

// exampleUsage()

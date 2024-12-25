// import { createContext, useState, ReactNode } from "react";
// import { AuthState, User } from "../types";

// interface AuthContextType extends AuthState {
//   login: (user: User) => void;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | undefined>(
//   undefined
// );

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [authState, setAuthState] = useState<AuthState>({
//     user: null,
//     isAuthenticated: false,
//   });

//   const login = (user: User) => {
//     setAuthState({ user, isAuthenticated: true });
//   };

//   const logout = () => {
//     setAuthState({ user: null, isAuthenticated: false });
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         ...authState,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };




















// import  {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   ReactNode,
// } from "react"
// import {  onAuthStateChanged, signOut } from "firebase/auth"
// import { auth } from "@/lib/firebaseConfig"
//  import { User } from "../types"

// // Define types for the user and context
// interface AuthContextType {
//   user: User | null
//   logout: () => Promise<void>
// }

// interface AuthProviderProps {
//   children: ReactNode
// }

// // Create a context with a default value of `undefined`
// export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// // AuthProvider component that provides the authentication state and actions to the context
// export const AuthProvider = ({ children }: AuthProviderProps) => {
//   const [user, setUser] = useState<User | null>(null)
//   const [loading, setLoading] = useState<boolean>(true)

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (firebaseUser: User | null) => {
//         setUser(firebaseUser)
//         setLoading(false)
//       }
//     )

//     // Clean up the subscription on unmount
//     return () => unsubscribe()
//   }, [])

//   const logout = async (): Promise<void> => {
//     await signOut(auth)
//     setUser(null)
//   }

//   if (loading) {
//     // Return a loading state or a placeholder if needed
//     return <div>Loading...</div>
//   }

//   return (
//     <AuthContext.Provider value={{ user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// // Custom hook to use authentication context
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }



















import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react"
import { ClipLoader } from 'react-spinners' // Import ClipLoader

import {
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from "firebase/auth"
import { auth } from "@/lib/firebaseConfig"
import { User } from "../types" // Your custom user type

// Define types for the user and context
interface AuthContextType {
  user: User | null
  logout: () => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

// Create a context with a default value of `undefined`
export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// AuthProvider component that provides the authentication state and actions to the context
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: FirebaseUser | null) => {
        if (firebaseUser) {
          // Map Firebase User to your custom User type
          const customUser: User = {
            id: firebaseUser.uid,
            name:(firebaseUser?.email?.split("@")[0] ?? "Unknown"),
            // name: firebaseUser.displayName || "Unknown",
            email: firebaseUser.email || "",
            role: "user", // Set the role if applicable
            avatar:
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }
          setUser(customUser)
        } else {
          setUser(null)
        }
        setLoading(false)
      }
    )

    // Clean up the subscription on unmount
    return () => unsubscribe()
  }, [])

  const logout = async (): Promise<void> => {
    await signOut(auth)
    setUser(null)
  }

  if (loading) {
    // Return a loading state or a placeholder if needed
    return <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}
>
  <ClipLoader  size={150} color='#39b996'/>
</div>

    // <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use authentication context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { ClipLoader } from "react-spinners"; // Import ClipLoader

import {
  onAuthStateChanged,
  signOut,
  // User as FirebaseUser,
} from "firebase/auth";
import { auth, db } from "@/lib/firebaseConfig";
import { User } from "../types"; // Your custom user type
import { doc, getDoc } from "firebase/firestore";

// Define types for the user and context
interface AuthContextType {
  user: User | null;
  logout: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

// Create a context with a default value of `undefined`
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// AuthProvider component that provides the authentication state and actions to the context
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Fetch user data from Firestore
        try {
          const userDocRef = doc(db, "users", firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();

            // Map Firestore data to your User type
            const customUser: User = {
              id: firebaseUser.uid,
              name:
                userData.name || firebaseUser.email?.split("@")[0] || "Unknown",
              email: userData.email || firebaseUser.email || "",
              role: userData.role || "user",
              avatar: userData.avatar || "",
              dob: userData.dob || "",
              address: userData.address || "",
              totalDocuments: userData.totalDocuments || 0,
            };

            setUser(customUser);
          } else {
            console.warn("No user document found for the authenticated user.");
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data from Firestore:", error);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  const logout = async (): Promise<void> => {
    await signOut(auth);
    setUser(null);
  };

  if (loading) {
    // Return a loading state or a placeholder if needed
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ClipLoader size={150} color="#39b996" />
      </div>
    );

    // <div>Loading...</div>
  }

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

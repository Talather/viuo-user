export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user";
  dob: string;
  address: string;
  totalDocuments: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

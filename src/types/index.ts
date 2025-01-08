export interface User {
  phoneNo: string;
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "user";
  dob: string;
  address: string;
  totalDocuments: number;
  availableCredits: number;
  profileLink: number;
  referralCode: number;
  redeemedReferralCode: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

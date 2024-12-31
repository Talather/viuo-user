import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { AuthProvider } from "./context/AuthContext";
import { BillPaymentProvider
 } from './context/paymentBillsContext'

import { Toaster } from "./components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BillPaymentProvider>
    <AuthProvider>
      <App />
      <Toaster />
      </AuthProvider>
      </BillPaymentProvider>
  </StrictMode>
);

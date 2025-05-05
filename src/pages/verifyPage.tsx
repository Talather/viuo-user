import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyEmailToken } from "../lib/firebaseClientUniversalFunctions"; // Adjust the import path as needed
import { useToast } from "../hooks/use-toast";
import { useNavigate } from "react-router-dom";

const VerifyPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        return;
      }

      try {
        // Use the verifyEmailToken method directly
        const result = await verifyEmailToken(token);
        if (result.success) {
          setStatus("success");
          toast({
            title: "Account Created Successfully.",
            description: "Use your email and password to login again anytime.",
          });
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 2000); // Redirect after 2 seconds
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setStatus("error");
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {status === "loading" && <p>Verifying your email...</p>}
      {status === "success" && (
        <div>
          <h1>Email Verified Successfully!</h1>
          <p>You can now log in to your account.</p>
          <a href="/login" style={{ color: "#10a37f", textDecoration: "none" }}>
            Go to Login
          </a>
        </div>
      )}
      {status === "error" && (
        <div>
          <h1>Verification Failed</h1>
          <p>The verification link is invalid or has expired.</p>
          <a
            href="/create-account"
            style={{ color: "#10a37f", textDecoration: "none" }}
          >
            Register Again
          </a>
        </div>
      )}
    </div>
  );
};

export default VerifyPage;

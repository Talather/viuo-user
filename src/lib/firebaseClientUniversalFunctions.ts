/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getFirestore,
  addDoc,
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { FirebaseApp, initializeApp } from "firebase/app";
// import { getAuth, } from "firebase/auth";
import axios from "axios";
// Initialize Firebase app using environment variables.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app);
// console.log(auth);

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
async function storeOTP(email: string, otp: string) {
  // Set expiry 10 minutes in the future
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + 5);

  const documentsCollection = collection(db, "otpVerifications");
  await addDoc(documentsCollection, {
    otp: otp,
    email: email,
    expiry: expiry,
  });
}

async function checkIfEmailExists(email: string) {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking email:", error);
    return false; // Handle errors (e.g., invalid email format)
  }
}

export async function sendEmailVerificationOTP(
  email: string,
  firstName: string,
  reset: boolean = false
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if the email exists in Firebase Authentication
    if (!reset) {
      const emailExists = await checkIfEmailExists(email);
      if (emailExists) {
        return {
          success: false,
          error: "This Email is already registered in Vuior.",
        };
      }
    } else if (reset) {
      const emailExists = await checkIfEmailExists(email);
      if (!emailExists) {
        return {
          success: false,
          error: "This Email is not registered in Vuior.",
        };
      }
    }

    const otp = generateOTP();
    await storeOTP(email, otp);

    const formData = {
      subject: `OTP Verification for VUIOR`,
      description: `Hello ${firstName},

      Thank you for registering with VUIOR. Please use the following OTP to verify your account:

      OTP: ${otp}

      This OTP is valid for 5 minutes. If you did not request this, please ignore this email.

      Best Regards,
      The VUIOR Team`,
      name: firstName,
      email: email,
      otp: otp,
    };

    const accessKey = "C63SwSugFYkrclqIedXCPkaGoyEh8MIEkNRO";
    const channelId = "367dbe7b-7e2b-5be1-a4c7-6327128b7b6b";
    const workspaceId = "f8f5bb9b-7243-48d8-9bcc-29b3792a27aa";
    const url = `https://api.bird.com/workspaces/${workspaceId}/channels/${channelId}/messages`;

    const data = {
      receiver: {
        contacts: [{ identifierValue: email }],
      },
      body: {
        type: "html",
        html: {
          metadata: {
            subject: formData.subject,
          },
          html: `
          <p>${formData.subject}</p>
          <ul>
            <li><strong>Name:</strong> ${formData.name}</li>
            <li><strong>Email:</strong> ${formData.email}</li>
            <li><strong>Message:</strong> ${formData.description}</li>
            <li><strong>OTP:</strong> ${formData.otp}</li>
          </ul>
          <div style="width:500px; background-color:#10a37f; text-align:center; justify-content:center; color:white; border-radius:05px;">
          </div>
          `,
          text: `
            Subject: ${formData.subject}
            Name: ${formData.name}
            Email: ${formData.email}
            Message: ${formData.description}
            OTP: ${formData.otp}
          `,
        },
      },
    };

    const headers = {
      Authorization: `AccessKey ${accessKey}`,
      "Content-Type": "application/json",
    };

    await axios.post(url, data, { headers });

    return { success: true }; // ✅ Return success if everything works
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return { success: false, error: error.message || "Unknown error occurred" }; // ❌ Return error message
  }
}
const ACCESS_KEY = "C63SwSugFYkrclqIedXCPkaGoyEh8MIEkNRO";
const CHANNEL_ID = "367dbe7b-7e2b-5be1-a4c7-6327128b7b6b";
const WORKSPACE_ID = "f8f5bb9b-7243-48d8-9bcc-29b3792a27aa";
const API_URL = `https://api.bird.com/workspaces/${WORKSPACE_ID}/channels/${CHANNEL_ID}/messages`;

async function sendWelcomeEmail(email: string, firstName: string) {
  const headers = {
    Authorization: `AccessKey ${ACCESS_KEY}`,
    "Content-Type": "application/json",
  };
  const data = {
    receiver: { contacts: [{ identifierValue: email }] },
    body: {
      type: "html",
      html: {
        metadata: { subject: "Welcome to VUIOR 🎉" },
        html: `
          <p>Hello ${firstName},</p>
          <p>We are thrilled to welcome you to <strong>VUIOR</strong>! 🚀</p>
          <p>You are now part of a growing community that values excellence and innovation.</p>
          <p>To get started, log in and explore all the amazing features we have prepared for you.</p>
          <p>If you have any questions, feel free to contact our support team.</p>
          <p>Best Regards, <br/>The VUIOR Team</p>
        `,
      },
    },
  };
  await axios.post(API_URL, data, { headers });
}

export async function sendEmailVerificationLink(
  email: string,
  firstName: string,
  reset: boolean = false
): Promise<{ success: boolean; error?: string }> {
  try {
    // Check if the email exists in Firebase Authentication
    if (!reset) {
      const emailExists = await checkIfEmailExists(email);
      if (emailExists) {
        return {
          success: false,
          error: "This Email is already registered in Vuior.",
        };
      }
    } else if (reset) {
      const emailExists = await checkIfEmailExists(email);
      if (!emailExists) {
        return {
          success: false,
          error: "This Email is not registered in Vuior.",
        };
      }
    }

    // Generate a unique verification token (e.g., UUID or custom logic)
    const verificationToken = generateVerificationToken();
    console.log("Generated Verification Token:", verificationToken);

    // Store the token in the database with an expiry time
    await storeVerificationToken(email, verificationToken);

    const params = new URLSearchParams({
      token: verificationToken,
    }).toString();  

    // Construct the verification link
    const verificationLink = `${import.meta.env.VITE_VERIFICATION_PAGE_BASE_URL=https://vuior.com/}verify?${params}`;
    const formData = {
      subject: `Email Verification for VUIOR`,
      description: `Hello ${firstName},

      Thank you for registering with VUIOR. Please click the button below to verify your account:

      <a href="${verificationLink}" style="display: inline-block; padding: 10px 20px; background-color: #10a37f; color: white; text-decoration: none; border-radius: 5px;">Yes, it's me</a>

      This link is valid for 24 hours. If you did not request this, please ignore this email.

      Best Regards,
      The VUIOR Team`,
      name: firstName,
      email: email,
      verificationLink: verificationLink,
    };

    const accessKey = "C63SwSugFYkrclqIedXCPkaGoyEh8MIEkNRO";
    const channelId = "367dbe7b-7e2b-5be1-a4c7-6327128b7b6b";
    const workspaceId = "f8f5bb9b-7243-48d8-9bcc-29b3792a27aa";
    const url = `https://api.bird.com/workspaces/${workspaceId}/channels/${channelId}/messages`;

    const data = {
      receiver: {
        contacts: [{ identifierValue: email }],
      },
      body: {
        type: "html",
        html: {
          metadata: {
            subject: formData.subject,
          },
          html: `
          <p>${formData.subject}</p>
          <p>${formData.description}</p>
          `,
          text: `
            Subject: ${formData.subject}
            Name: ${formData.name}
            Email: ${formData.email}
            Verification Link: ${formData.verificationLink}
          `,
        },
      },
    };

    const headers = {
      Authorization: `AccessKey ${accessKey}`,
      "Content-Type": "application/json",
    };

    await axios.post(url, data, { headers });
    console.log("Verification email sent successfully:", formData.email);

    return { success: true }; // ✅ Return success if everything works
  } catch (error: any) {
    console.error("Error sending verification email:", error);
    return { success: false, error: error.message || "Unknown error occurred" }; // ❌ Return error message
  }
}

function generateVerificationToken(): string {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

// Helper function to store the verification token in the database
async function storeVerificationToken(email: string, token: string) {
  const expiry = new Date();
  expiry.setHours(expiry.getHours() + 24); // Token valid for 24 hours

  const documentsCollection = collection(db, "emailVerifications");
  await addDoc(documentsCollection, {
    email: email,
    token: token,
    expiry: expiry,
  });
}

export async function verifyEmailToken(
  token: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const emailVerificationCollection = collection(db, "emailVerifications");

    // ✅ Query Firestore for the token only
    const q = query(emailVerificationCollection, where("token", "==", token));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, error: "Invalid or expired token." };
    }

    let tokenDocRef = null;
    let expiryTime = new Date();
    let email = "";
    let firstName = "User";

    querySnapshot.forEach((docSnap) => {
      tokenDocRef = docSnap.ref;
      const data = docSnap.data();
      email = data.email;
      expiryTime = data.expiry.toDate();
      firstName = data.firstName || "User";
    });

    if (!tokenDocRef || !email || !expiryTime) {
      return {
        success: false,
        error: "Token verification failed due to missing data.",
      };
    }

    // ✅ Check if token expired
    if (new Date() > expiryTime) {
      return {
        success: false,
        error: "Token has expired. Please request a new one.",
      };
    }

    // ✅ Find user in users collection by email
    const usersCollection = collection(db, "users");
    const userQuery = query(usersCollection, where("email", "==", email));
    const userSnapshot = await getDocs(userQuery);

    if (userSnapshot.empty) {
      return {
        success: false,
        error: "User not found for this email.",
      };
    }

    // ✅ Update user document → emailVerified = true
    const userDocRef = userSnapshot.docs[0].ref;
    await updateDoc(userDocRef, {
      emailVerified: true,
    });

    await sendWelcomeEmail(email, firstName); // Send welcome email
    console.log("Welcome email sent to:", email);

    // ✅ Delete verification token
    await deleteDoc(tokenDocRef);

    // ✅ Send welcome email
    await sendWelcomeEmail(email, firstName);

    return { success: true };
  } catch (error: any) {
    console.error("Error verifying token:", error);
    return {
      success: false,
      error: error.message || "Unknown error occurred during token verification.",
    };
  }
}

export async function verifyOTP(
  email: string,
  enteredOTP: string
): Promise<{ success: boolean; error?: string }> {
  console.log(email, enteredOTP);

  try {
    const otpCollection = collection(db, "otpVerifications");

    // Query Firestore where email and OTP match
    const q = query(
      otpCollection,
      where("email", "==", email),
      where("otp", "==", enteredOTP) // Ensure OTP matches
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, error: "Invalid OTP or email." };
    }

    let otpDocRef = null;
    let expiryTime = new Date();
    let firstName = "User"; // Default name in case first name isn't stored

    querySnapshot.forEach((doc) => {
      otpDocRef = doc.ref;
      expiryTime = doc.data().expiry.toDate(); // Convert Firestore timestamp to Date object
      firstName = doc.data().firstName || "User"; // Retrieve first name if available
    });

    if (!otpDocRef || !expiryTime) {
      return {
        success: false,
        error: "OTP verification failed due to missing data.",
      };
    }

    // Check if OTP has expired
    if (new Date() > expiryTime) {
      return {
        success: false,
        error: "OTP has expired. Please request a new one.",
      };
    }

    // Delete OTP document after successful verification
    await deleteDoc(otpDocRef);

    // Send welcome email after OTP verification
    await sendWelcomeEmail(email, firstName);

    return { success: true };
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    return {
      success: false,
      error: error.message || "Unknown error occurred during OTP verification.",
    };
  }
}

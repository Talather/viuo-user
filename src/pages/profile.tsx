import React, { useState, useEffect } from "react";
// import Button from "@/components/button";
import { useAuth } from "../hooks/useAuth";
import { storage, db } from "../lib/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { Button } from "@nextui-org/button";
import { useToast } from "../hooks/use-toast";
// import { getFunctions, httpsCallable } from "firebase/functions";

const ProfilePage: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  const { toast } = useToast();
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [redeemCode, setRedeemCode] = useState<string>("");

  const [address, setAddress] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [profileLink, setProfileLink] = useState<string>("");
  // const [_, setTotalDocuments] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [redeemIsLoading, setRedeemIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileLink(
        `https://vuior.com/user/${user.name?.toLowerCase().replace(/ /g, "-")}`
      );
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      setProfilePicture(user.avatar || "");
      setAddress(user.address || "1234 Elm Street, Springfield, USA");
      setDob(user.dob || "1995-05-15");
      setFirstName(user.name || "John");
      setLastName(user.name || "doe");
      setPhoneNo(user?.phoneNo || "0317068136");

      // setTotalDocuments(user.totalDocuments || 0);
    }
  }, [user]);

  console.log(address);
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!user || !user.id) {
      console.log("User is not authenticated or user ID is missing.");
      return;
    }
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const storageRef = ref(storage, `avatars/${user?.id}/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(snapshot.ref);

      // Update Firebase user profile data
      const userDoc = doc(db, "users", user.id);
      await updateDoc(userDoc, { avatar: fileUrl });

      // Update state
      setProfilePicture(fileUrl);
      toast({
        title: "Success",
        description: "Profile Picture Updated",
      });
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      if (!user || !user.id) {
        console.log("User is not authenticated or user ID is missing.");
        return;
      }
      const userDocRef = doc(db, "users", user.id);
      await updateDoc(userDocRef, {
        address: address,
        dob: dob,
        name: `${firstName} ${lastName}`,
        phoneNo: phoneNo,
      });
      toast({
        title: "Success",
        description: "User Information Updated",
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      // alert("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // const redeemReferral = async () => {
  //   if (redeemCode.length < 5) {
  //     console.log("REDEEM NOT CORRECT");
  //     setRedeemIsLoading(false);
  //     return;
  //   }
  //   setRedeemIsLoading(true);
  //   redeemReferralCode({ referralCode: redeemCode })
  //     .then((result) => {
  //       console.log(result); // Success message
  //       setRedeemIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error redeeming referral code:", error.message);
  //       setRedeemIsLoading(false);
  //     });
  // };
  async function redeemReferral() {
    setRedeemIsLoading(true);
    if (redeemCode.length < 5) {
      console.log("REDEEM NOT CORRECT");
      setRedeemIsLoading(false);
      return;
    }
    try {
      const response = await fetch(
        "https://redeemreferralcode-5risxnudva-uc.a.run.app/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            referralCode: redeemCode,
            userId: user?.id,
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        console.log(result.message);
      } else {
        console.error(result.message);
      }
      setRedeemIsLoading(false);
    } catch (error) {
      setRedeemIsLoading(false);

      console.error("Error sending referral code:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-3/4 p-8 text-white rounded-lg shadow-lg md:w-2/3 lg:w-1/2 bg-gradient-to-br from-button-gpt to-black">
        <h2 className="mb-6 text-4xl font-bold text-center">User Profile</h2>
        <div className="mb-6">
          <label className="block mb-2 text-white">Profile Picture:</label>
          <label
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 transition duration-300 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            htmlFor="profilePicture"
          >
            Upload Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          {profilePicture && (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-32 h-32 mx-auto mt-4 rounded-full"
            />
          )}
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-white">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={handleInputChange(setAddress)}
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-white">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={handleInputChange(setAddress)}
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-white">Phone Number</label>
          <input
            type="text"
            value={phoneNo}
            onChange={handleInputChange(setAddress)}
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-white">Address:</label>
          <input
            type="text"
            value={address}
            onChange={handleInputChange(setAddress)}
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div>

        {/* Date of Birth */}
        <div className="mb-6">
          <label className="block mb-2 text-white">Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={handleInputChange(setDob)}
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div>

        {/* Profile Link */}
        <div className="mb-6">
          <label className="block mb-2 text-white">Profile Link:</label>
          <input
            type="text"
            value={profileLink}
            readOnly
            className="w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 "
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            children={isLoading ? "Saving..." : "Save Changes"}
            className="justify-center font-bold text-white hover:bg-button-gpt-hover bg-button-gpt"
            isLoading={isLoading}
            variant="faded"
            type="submit"
            onPress={handleSubmit}
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center w-full mt-12 ">
        <div className="w-1/2 px-10 py-3 text-center shadow-lg bg-gradient-to-br from-button-gpt to-black rounded-xl">
          <h2 className="mb-4 text-3xl font-semibold text-white">
            Redeem Code
          </h2>
          <div className="px-6 py-2 font-mono text-lg font-bold tracking-wide text-gray-800 bg-gray-100 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Enter Code here"
              className="w-full px-8 py-2 text-gray-800 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-button-gpt focus:border-transparent"
              onChange={(e) => {
                setRedeemCode(e.target.value);
              }}
            />
          </div>
          <Button
            children={redeemIsLoading ? "Redeeming..." : "Redeem Code"}
            className="justify-center font-bold text-white hover:bg-button-gpt-hover bg-button-gpt"
            isLoading={redeemIsLoading}
            variant="faded"
            type="submit"
            onPress={redeemReferral}
            disabled={redeemIsLoading}
          />
          {/* <button
            className="px-6 py-2 mt-6 font-medium text-white transition duration-200 rounded-lg shadow-md bg-button-gpt hover:bg-button-gpt"
            onClick={() => redeemReferral()}
            
          >
            
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

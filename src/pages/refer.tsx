import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { useUserAssets } from "@/context/userSpecificAssetsContext";
import { useState, useEffect } from "react";

const Refer = () => {
  return (
    <div className="w-full">
      <ReferAFriend />
    </div>
  );
};

export default Refer;

// import React from 'react'

const ReferAFriend = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const { userCredits } = useUserAssets();
  const [totalReferrals, setTotalReferrals] = useState<number>(0);
  const [totalEarned, setTotalEarned] = useState<number>(0);

  // Define credit history type
  interface CreditHistoryItem {
    id: string;
    type: string;
    credits: number;
    date: string;
    // Add other properties as needed
  }

  useEffect(() => {
    if (userCredits && userCredits.length > 0) {
      // Filter referral type credits
      const referralCredits = userCredits.filter((credit: CreditHistoryItem) => credit.type === "referral");
      setTotalReferrals(referralCredits.length);
      
      // Calculate total earnings from referrals
      const totalAmount = referralCredits.reduce((sum: number, credit: CreditHistoryItem) => sum + (credit.credits || 0), 0);
      setTotalEarned(totalAmount);
    }
  }, [userCredits]);

  // Currency formatter helper
  const formatCurrency = (amount: number): string => {
    return amount.toString().includes(".")
      ? amount.toLocaleString(undefined, { maximumFractionDigits: 2 })
      : `${amount}.00`;
  };

  const referralCode: string = user?.referralCode || "";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-gray-100 to-button-gpt">
      {/* Stats Cards */}
      <div className="flex flex-wrap justify-center w-full max-w-4xl gap-8 mb-10">
        {/* Total Referrals Card */}
        <div className="w-full max-w-xs px-6 py-6 text-center bg-white shadow-lg rounded-xl">
          <h2 className="mb-2 text-lg font-semibold text-gray-600">Total Referrals</h2>
          <div className="mb-2 text-4xl font-bold text-button-gpt">{totalReferrals}</div>
          <p className="text-sm text-gray-500">Friends who joined using your code</p>
        </div>

        {/* Total Earnings Card */}
        <div className="w-full max-w-xs px-6 py-6 text-center bg-white shadow-lg rounded-xl">
          <h2 className="mb-2 text-lg font-semibold text-gray-600">Total Earnings</h2>
          <div className="mb-2 text-4xl font-bold text-button-gpt">${formatCurrency(totalEarned)}</div>
          <p className="text-sm text-gray-500">Amount earned from referrals</p>
        </div>
      </div>

      {/* Header */}
      <h1 className="mb-6 text-4xl font-bold text-center text-gray-800">
        Refer a Friend for More Savings!
      </h1>
      <p className="max-w-md mb-10 text-lg text-center text-gray-600">
        Invite your friends to join and enjoy exclusive savings together. Share
        your unique referral code below and get rewarded!
      </p>

      {/* Referral Box */}

      <div>
        <div className="w-full max-w-sm px-20 py-4 text-center bg-white shadow-lg rounded-xl">
          <h2 className="mb-4 text-2xl font-semibold text-button-gpt">
            Your Referral Code
          </h2>
          <div className="px-6 py-4 font-mono text-lg font-bold tracking-wide text-gray-800 bg-gray-100 rounded-lg">
            {referralCode}
          </div>
          <button
            className="px-6 py-2 mt-6 font-medium text-white transition duration-200 rounded-lg shadow-md bg-button-gpt hover:bg-button-gpt"
            onClick={() => {
              navigator.clipboard.writeText(referralCode);
              toast({
                title: "Copied To Clipboard",
                description: "Copied successfully to the ClipBoard",
              });
            }}
          >
            Copy Code
          </button>
        </div>
      </div>

      {/* <div className="mt-5 ">
      <div className='w-full max-w-sm px-20 py-3 text-center bg-white shadow-lg rounded-xl'>
  <h2 className='mb-4 text-2xl font-semibold text-button-gpt'>
    Redeem Code
  </h2>
  <div className='px-6 py-2 font-mono text-lg font-bold tracking-wide text-gray-800 bg-gray-100 rounded-lg shadow-md'>
  <input
    type='text'
    placeholder='Enter Code here'
    className='w-full px-8 py-2 text-gray-800 bg-gray-100 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:to-button-gpt focus:border-transparent'
  />
</div>

  <button
    className='px-6 py-2 mt-6 font-medium text-white transition duration-200 rounded-lg shadow-md bg-button-gpt hover:bg-button-gpt'
    onClick={() => navigator.clipboard.writeText(referralCode)}
  >
     Redeem Code
  </button>
        </div>
        </div> */}

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <p className="text-gray-700 text-md">
          Share the code with your friends and start saving today!
        </p>
      </div>
    </div>
  );
};

// export default ReferAFriend

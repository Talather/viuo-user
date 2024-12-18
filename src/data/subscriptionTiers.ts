// export type TierNames = keyof typeof subscriptionTiers;
// export type PaidTierNames = Exclude<TierNames, "Free">;

// export const subscriptionTiers = {
//   Free: {
//     name: "Free",
//     priceInCents: 0,
//     stripePriceId: null,
//   },
//   Standard: {
//     name: "Standard",
//     priceInCents: 6000,
//     stripPriceId: null,
//   },
// };

// export const subscriptionTiers = {
//   Free: {
//     name: "Free",
//     priceInCents: 0,
//     maxNumberOfProducts: 1,
//     maxNumberOfVisits: 5000,
//     canAccessAnalytics: false,
//     canCustomizeBanner: false,
//     canRemoveBranding: false,
//     stripePriceId: null,
//   },
//   Teams: {
//     name: "Basic",
//     priceInCents: 1900,
//     maxNumberOfProducts: 5,
//     maxNumberOfVisits: 10000,
//     canAccessAnalytics: true,
//     canCustomizeBanner: false,
//     canRemoveBranding: true,
//     stripePriceId: null,
//   },
//   EnterPrise: {
//     name: "Standard",
//     priceInCents: 4900,
//     maxNumberOfProducts: 30,
//     maxNumberOfVisits: 100000,
//     canAccessAnalytics: true,
//     canCustomizeBanner: true,
//     canRemoveBranding: true,
//     stripePriceId: null,
//   },

// } as const;

export type TierNames = "Individuals" | "Teams" | "Enterprise";
export type PaidTierNames = "Teams" | "Enterprise";

const subscriptionTiers = [
  {
    name: "Individuals",
    price: 0,
    description:
      "Good for individuals who are just starting out and simply want the essentials.",
    features: [
      "1 user",
      "Unlimited calendars",
      "Unlimited event types",
      "Workflows",
      "Integrate with your favorite apps",
      "Accept payments via Stripe",
    ],
  },
  {
    name: "Teams",
    price: 1500,
    description:
      "Highly recommended for small teams who seek to upgrade their time and perform better.",
    features: [
      "1 team",
      "Schedule meetings as a team",
      "Round-Robin, Fixed Round-Robin",
      "Collective Events",
      "Advanced Routing Forms",
      "Team Workflows",
      "Remove Branding",
      "Same day email and chat support",
    ],
    trialDays: 30,
  },
  {
    name: "Enterprise",
    price: 4900,
    description:
      "Robust scheduling for larger teams looking to have more control, privacy and security.",
    features: [
      "1 parent team and unlimited sub-teams",
      "Organization workflows",
      "yourcompany.cal.com subdomain",
      "99.99% Uptime SLA",
      "SOC2, HIPAA, ISO 27001 Compliance check",
      "SAML SSO and SCIM",
      "Insights - analyze your booking data",
      "Extensive Whitelabeling",
      "Sync your HRIS tools",
      "Active directory sync",
      "Dedicated onboarding and engineering support",
    ],
  },
];

export const subscriptionTiersInOrder = [...subscriptionTiers];

export function getTierByName(name: TierNames) {
  return subscriptionTiers.find((tier) => tier.name === name);
}

// export const subscriptionTiersInOrder = [
//   subscriptionTiers.Free,
//   subscriptionTiers.Teams,
//   subscriptionTiers.EnterPrise,
// ] as const;

// export function getTierByPriceId(stripePriceId: string) {
//   return Object.values(subscriptionTiers).find(
//     (tier) => tier.stripePriceId === stripePriceId
//   );
// }

export type TireName = keyof typeof subscriptionTiers;

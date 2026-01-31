import { z } from 'zod';

export const page1Schema = z.object({
  firstName: z.string().min(1, 'Please enter your first name'),
  lastName: z.string().min(1, 'Please enter your last name'),
  middleName: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  businessName: z.string().min(2, 'Business name is required'),
  website: z.string().optional(),
  businessAddress: z.string().min(10, 'Please provide a complete address'),
  businessPurpose: z.string().min(20, 'Please provide at least 20 characters'),
  problemSolution: z.string().min(20, 'Please describe the problem and solution'),
  topGoals: z.string().min(30, 'Please list your top 3 goals'),
  keyAchievements: z.string().min(10, 'Please describe your achievements'),
});

export const page2Schema = z.object({
  inspiration: z.string().min(20, 'Please describe what inspired you'),
  longTermVision: z.string().min(30, 'Please describe your long-term vision'),
  legalStructure: z.string().min(2, 'Legal structure is required'),
  ownership: z.string().min(10, 'Please describe ownership structure'),
  locationSetup: z.string().min(10, 'Please describe your location or setup'),
  permitsLicenses: z.string().optional(),
  suppliersPartners: z.string().optional(),
  differentiation: z.string().min(20, 'Please describe what makes you different'),
});

export const page3Schema = z.object({
  serviceArea: z.string().min(3, 'Service area is required'),
  targetMarket: z.string().min(30, 'Please describe your target market in detail'),
  competitors: z.string().min(10, 'Please list your competitors'),
  competitiveComparison: z.string().min(20, 'Please describe how you compare'),
  marketTrends: z.string().min(20, 'Please describe current market trends'),
});

export const page4Schema = z.object({
  teamMembers: z.string().min(10, 'Please describe your team members'),
  hiringPlans: z.string().min(5, 'Please describe your hiring plans'),
  staffPrograms: z.string().optional(),
});

export const page5Schema = z.object({
  averagePrice: z.string().min(1, 'Average price is required'),
  topRevenue: z.string().min(10, 'Please describe your top revenue sources'),
  newProducts: z.string().optional(),
});

export const page6Schema = z.object({
  monthlyMarketingCost: z.string().min(1, 'Marketing cost is required'),
  customerAcquisition: z.string().min(20, 'Please describe how customers find you'),
  loyaltyPrograms: z.string().optional(),
  expansionPlans: z.string().optional(),
});

export const page7Schema = z.object({
  strengths: z.string().min(20, 'Please describe your strengths'),
  weaknesses: z.string().min(10, 'Please describe your challenges'),
  opportunities: z.string().min(10, 'Please describe opportunities'),
  threats: z.string().min(10, 'Please describe threats'),
});

export const page8Schema = z.object({
  monthlyEarnings: z.string().min(1, 'Monthly earnings is required'),
  inventoryCost: z.string().min(1, 'Inventory cost is required'),
  monthlyExpenses: z.string().min(10, 'Please describe your monthly expenses'),
  debtInvestors: z.string().optional(),
  financialGoals: z.string().min(20, 'Please describe your financial goals'),
  growthMilestone: z.string().min(10, 'Please describe your next milestone'),
});

export type Page1Data = z.infer<typeof page1Schema>;
export type Page2Data = z.infer<typeof page2Schema>;
export type Page3Data = z.infer<typeof page3Schema>;
export type Page4Data = z.infer<typeof page4Schema>;
export type Page5Data = z.infer<typeof page5Schema>;
export type Page6Data = z.infer<typeof page6Schema>;
export type Page7Data = z.infer<typeof page7Schema>;
export type Page8Data = z.infer<typeof page8Schema>;

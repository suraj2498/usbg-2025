import { z } from 'zod';

// For API validation - all fields optional at DB level
export const createBusinessPlanSchema = z.object({
  // Page 1: Company Overview & Goals
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
  email: z.string().email(),
  businessName: z.string().optional(),
  website: z.string().optional(),
  businessAddress: z.string().optional(),
  businessPurpose: z.string().optional(),
  problemSolution: z.string().optional(),
  topGoals: z.string().optional(),
  keyAchievements: z.string().optional(),

  // Page 2: Structure & Operations
  inspiration: z.string().optional(),
  longTermVision: z.string().optional(),
  legalStructure: z.string().optional(),
  ownership: z.string().optional(),
  locationSetup: z.string().optional(),
  permitsLicenses: z.string().optional(),
  suppliersPartners: z.string().optional(),
  differentiation: z.string().optional(),

  // Page 3: Market & Competition
  serviceArea: z.string().optional(),
  targetMarket: z.string().optional(),
  competitors: z.string().optional(),
  competitiveComparison: z.string().optional(),
  marketTrends: z.string().optional(),

  // Page 4: Team & Management
  teamMembers: z.string().optional(),
  hiringPlans: z.string().optional(),
  staffPrograms: z.string().optional(),

  // Page 5: Products & Services
  averagePrice: z.string().optional(),
  topRevenue: z.string().optional(),
  newProducts: z.string().optional(),

  // Page 6: Marketing & Growth Strategy
  monthlyMarketingCost: z.string().optional(),
  customerAcquisition: z.string().optional(),
  loyaltyPrograms: z.string().optional(),
  expansionPlans: z.string().optional(),

  // Page 7: SWOT Analysis
  strengths: z.string().optional(),
  weaknesses: z.string().optional(),
  opportunities: z.string().optional(),
  threats: z.string().optional(),

  // Page 8: Financials
  monthlyEarnings: z.string().optional(),
  inventoryCost: z.string().optional(),
  monthlyExpenses: z.string().optional(),
  debtInvestors: z.string().optional(),
  financialGoals: z.string().optional(),
  growthMilestone: z.string().optional(),

  // Optional user ID
  userId: z.string().optional(),
  origin: z.string().optional()
});

export const updateBusinessPlanSchema = createBusinessPlanSchema.partial();

export type CreateBusinessPlanInput = z.infer<typeof createBusinessPlanSchema>;
export type UpdateBusinessPlanInput = z.infer<typeof updateBusinessPlanSchema>;

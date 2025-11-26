import { z } from 'zod';
import {
  page1Schema,
  page2Schema,
  page3Schema,
  page4Schema,
  page5Schema,
  page6Schema,
  page7Schema,
  page8Schema,
} from './schemas';

export * from './schemas';

export function getSchemaForPage(page: string | number): z.ZodSchema {
  switch (page) {
    case 'page1':
    case 1:
      return page1Schema;
    case 'page2':
    case 2:
      return page2Schema;
    case 'page3':
    case 3:
      return page3Schema;
    case 'page4':
    case 4:
      return page4Schema;
    case 'page5':
    case 5:
      return page5Schema;
    case 'page6':
    case 6:
      return page6Schema;
    case 'page7':
    case 7:
      return page7Schema;
    case 'page8':
    case 8:
      return page8Schema;
    default:
      return z.object({});
  }
}

// Combined schema for final validation
export const completeFormSchema = z.object({
  // Page 1: Company Overview & Goals
  businessName: z.string().min(2),
  website: z.string().url().optional().or(z.literal('')),
  businessAddress: z.string().min(10),
  businessPurpose: z.string().min(20),
  problemSolution: z.string().min(20),
  topGoals: z.string().min(30),
  keyAchievements: z.string().min(10),

  // Page 2: Structure & Operations
  inspiration: z.string().min(20),
  longTermVision: z.string().min(30),
  legalStructure: z.string().min(2),
  ownership: z.string().min(10),
  locationSetup: z.string().min(10),
  permitsLicenses: z.string().optional(),
  suppliersPartners: z.string().optional(),
  differentiation: z.string().min(20),

  // Page 3: Market & Competition
  serviceArea: z.string().min(3),
  targetMarket: z.string().min(30),
  competitors: z.string().min(10),
  competitiveComparison: z.string().min(20),
  marketTrends: z.string().min(20),

  // Page 4: Team & Management
  teamMembers: z.string().min(10),
  hiringPlans: z.string().min(5),
  staffPrograms: z.string().optional(),

  // Page 5: Products & Services
  averagePrice: z.string().min(1),
  topRevenue: z.string().min(10),
  newProducts: z.string().optional(),

  // Page 6: Marketing & Growth Strategy
  monthlyMarketingCost: z.string().min(1),
  customerAcquisition: z.string().min(20),
  loyaltyPrograms: z.string().optional(),
  expansionPlans: z.string().optional(),

  // Page 7: SWOT Analysis
  strengths: z.string().min(20),
  weaknesses: z.string().min(10),
  opportunities: z.string().min(10),
  threats: z.string().min(10),

  // Page 8: Financials
  monthlyEarnings: z.string().min(1),
  inventoryCost: z.string().min(1),
  monthlyExpenses: z.string().min(10),
  debtInvestors: z.string().optional(),
  financialGoals: z.string().min(20),
  growthMilestone: z.string().min(10),
});

export type CompleteFormData = z.infer<typeof completeFormSchema>;

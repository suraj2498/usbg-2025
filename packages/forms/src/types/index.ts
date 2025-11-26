export interface MultiStepFormData {
  // Page 1: Company Overview & Goals
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
  businessName?: string;
  website?: string;
  businessAddress?: string;
  businessPurpose?: string;
  problemSolution?: string;
  topGoals?: string;
  keyAchievements?: string;

  // Page 2: Structure & Operations
  inspiration?: string;
  longTermVision?: string;
  legalStructure?: string;
  ownership?: string;
  locationSetup?: string;
  permitsLicenses?: string;
  suppliersPartners?: string;
  differentiation?: string;

  // Page 3: Market & Competition
  serviceArea?: string;
  targetMarket?: string;
  competitors?: string;
  competitiveComparison?: string;
  marketTrends?: string;

  // Page 4: Team & Management
  teamMembers?: string;
  hiringPlans?: string;
  staffPrograms?: string;

  // Page 5: Products & Services
  averagePrice?: string;
  topRevenue?: string;
  newProducts?: string;

  // Page 6: Marketing & Growth Strategy
  monthlyMarketingCost?: string;
  customerAcquisition?: string;
  loyaltyPrograms?: string;
  expansionPlans?: string;

  // Page 7: SWOT Analysis
  strengths?: string;
  weaknesses?: string;
  opportunities?: string;
  threats?: string;

  // Page 8: Financials
  monthlyEarnings?: string;
  inventoryCost?: string;
  monthlyExpenses?: string;
  debtInvestors?: string;
  financialGoals?: string;
  growthMilestone?: string;
}

export interface StepConfig {
  id: number;
  title: string;
  description: string;
  icon: string;
}

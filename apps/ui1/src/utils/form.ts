import { MultiStepFormData } from '@monorepo/forms';

export interface PageConfig {
    label: string;
    type: 'input' | 'textarea';
    key: keyof MultiStepFormData;
    placeholder: string;
}

export const formConfig: {
  [page: string]: PageConfig[];
} = {
  page1: [
    {
      label: 'What is your business name?',
      type: 'input',
      key: 'businessName',
      placeholder: 'e.g., Acme Corp',
    },
    {
      label: 'If you have a website, what is it?',
      type: 'input',
      key: 'website',
      placeholder: 'https://example.com',
    },
    {
      label: 'What is the address of the business?',
      type: 'textarea',
      key: 'businessAddress',
      placeholder: '123 Main St, City, State, ZIP',
    },
    {
      label: 'What is the purpose of your business, in one sentence?',
      type: 'textarea',
      key: 'businessPurpose',
      placeholder: 'We help businesses streamline their operations through...',
    },
    {
      label: 'What problem does your business solve, and for whom?',
      type: 'textarea',
      key: 'problemSolution',
      placeholder: 'We solve X problem for Y customers by...',
    },
    {
      label: 'What are your top 3 goals for the next 1–3 years?',
      type: 'textarea',
      key: 'topGoals',
      placeholder: '1. Reach $1M in revenue\n2. Expand to new markets\n3. Launch new product line',
    },
    {
      label:
        'What key achievements or traction do you already have (revenue, clients, awards, etc.)?',
      type: 'textarea',
      key: 'keyAchievements',
      placeholder: 'e.g., $500K revenue, 100+ clients, Best Startup Award 2024',
    },
  ],
  page2: [
    {
      label: 'What inspired you to start this business?',
      type: 'textarea',
      key: 'inspiration',
      placeholder: 'Describe your motivation and what sparked the idea...',
    },
    {
      label: 'What is your long-term vision for the company (3–5 years)?',
      type: 'textarea',
      key: 'longTermVision',
      placeholder: 'In 5 years, we will be...',
    },
    {
      label: 'What is your legal structure (LLC, S-Corp, Sole Proprietor, etc.)?',
      type: 'input',
      key: 'legalStructure',
      placeholder: 'e.g., LLC, S-Corp',
    },
    {
      label: 'Who owns the company, and what are their equity shares and roles?',
      type: 'textarea',
      key: 'ownership',
      placeholder: 'John Doe - 60% - CEO\nJane Smith - 40% - CTO',
    },
    {
      label: 'Describe your location, facility, or setup.',
      type: 'textarea',
      key: 'locationSetup',
      placeholder: 'Remote team, office in downtown, warehouse in...',
    },
    {
      label: 'If any, what permits, licenses, or certifications do you have or need?',
      type: 'textarea',
      key: 'permitsLicenses',
      placeholder: 'e.g., Business license, Food handler permit, ISO certification',
    },
    {
      label: 'Who are your primary suppliers, vendors, or partners?',
      type: 'textarea',
      key: 'suppliersPartners',
      placeholder: 'List key suppliers and partners...',
    },
    {
      label: 'What makes your business different from competitors?',
      type: 'textarea',
      key: 'differentiation',
      placeholder: 'Our unique value proposition is...',
    },
  ],
  page3: [
    {
      label: 'What city, county, or region do you serve?',
      type: 'input',
      key: 'serviceArea',
      placeholder: 'e.g., Los Angeles County, CA',
    },
    {
      label: 'Who is your target market (tell us their age, income, lifestyle, and main needs)?',
      type: 'textarea',
      key: 'targetMarket',
      placeholder: 'Age: 25-45, Income: $50K-$100K, Lifestyle: Urban professionals who...',
    },
    {
      label: 'Who are your top 3–5 competitors (names or website)?',
      type: 'textarea',
      key: 'competitors',
      placeholder: '1. Competitor A - competitora.com\n2. Competitor B - competitorb.com',
    },
    {
      label: 'How do you compare in pricing, quality, and customer experience?',
      type: 'textarea',
      key: 'competitiveComparison',
      placeholder: 'We offer premium quality at mid-range prices with...',
    },
    {
      label: 'What trends or changes are shaping your business right now?',
      type: 'textarea',
      key: 'marketTrends',
      placeholder: 'e.g., Remote work, sustainability focus, digital transformation',
    },
  ],
  page4: [
    {
      label: 'Who started the business or key team members, and what are their roles?',
      type: 'textarea',
      key: 'teamMembers',
      placeholder: 'Founder - John Doe - CEO\nCo-founder - Jane Smith - COO',
    },
    {
      label: 'Do you plan to hire more staff members in the next year?',
      type: 'textarea',
      key: 'hiringPlans',
      placeholder: 'Yes, we plan to hire 3 sales reps and 2 developers',
    },
    {
      label: 'Do you offer staff training, incentives, or retention programs?',
      type: 'textarea',
      key: 'staffPrograms',
      placeholder: 'Monthly training, performance bonuses, health benefits',
    },
  ],
  page5: [
    {
      label: 'What is your average price?',
      type: 'input',
      key: 'averagePrice',
      placeholder: '$99.99',
    },
    {
      label: 'What generates the most sales or profit?',
      type: 'textarea',
      key: 'topRevenue',
      placeholder: 'Our premium package accounts for 60% of revenue',
    },
    {
      label: 'Do you plan to introduce new or seasonal products/services?',
      type: 'textarea',
      key: 'newProducts',
      placeholder: 'Yes, launching summer collection in Q2',
    },
  ],
  page6: [
    {
      label: 'What is your monthly marketing cost?',
      type: 'input',
      key: 'monthlyMarketingCost',
      placeholder: '$5,000',
    },
    {
      label: 'How do customers find your business?',
      type: 'textarea',
      key: 'customerAcquisition',
      placeholder: 'Google Ads (40%), referrals (30%), social media (20%), other (10%)',
    },
    {
      label: 'Do you have loyalty, referral, or promotional programs?',
      type: 'textarea',
      key: 'loyaltyPrograms',
      placeholder: '10% referral discount, loyalty points program, seasonal promotions',
    },
    {
      label: 'Do you plan to expand into new cities or markets?',
      type: 'textarea',
      key: 'expansionPlans',
      placeholder: 'Planning to expand to Texas and Florida in 2025',
    },
  ],
  page7: [
    {
      label: 'Strengths: What do customers love most about your business?',
      type: 'textarea',
      key: 'strengths',
      placeholder: 'Excellent customer service, fast delivery, quality products',
    },
    {
      label: 'Weaknesses: What challenges do you face?',
      type: 'textarea',
      key: 'weaknesses',
      placeholder: 'Limited brand awareness, higher prices than competitors',
    },
    {
      label: 'Opportunities: How could you gain an advantage?',
      type: 'textarea',
      key: 'opportunities',
      placeholder: 'Growing market demand, potential partnerships, new technology',
    },
    {
      label: 'Threats: What external risks (competition, economy, supply) concern you most?',
      type: 'textarea',
      key: 'threats',
      placeholder: 'New competitors entering market, economic downturn, supply chain issues',
    },
  ],
  page8: [
    {
      label: 'What is your average monthly earning?',
      type: 'input',
      key: 'monthlyEarnings',
      placeholder: '$50,000',
    },
    {
      label: 'How much does it cost you money to stock inventory?',
      type: 'input',
      key: 'inventoryCost',
      placeholder: '$10,000',
    },
    {
      label: 'What are your typical monthly expenses (rent, payroll, supplies, etc.)?',
      type: 'textarea',
      key: 'monthlyExpenses',
      placeholder: 'Rent: $2,000\nPayroll: $15,000\nSupplies: $3,000\nUtilities: $500',
    },
    {
      label: 'Do you have any current loans, investors, or debts?',
      type: 'textarea',
      key: 'debtInvestors',
      placeholder: 'SBA loan: $100K at 5% interest, Angel investor: $50K for 10% equity',
    },
    {
      label: 'What are your main financial goals for the next 1–3 years?',
      type: 'textarea',
      key: 'financialGoals',
      placeholder: 'Reach profitability, grow revenue to $1M, pay off debt',
    },
    {
      label: 'What is your next major growth or expansion milestone?',
      type: 'textarea',
      key: 'growthMilestone',
      placeholder: 'Open second location, launch e-commerce site, hire 10 employees',
    },
  ],
  page9: []
};

import { SESClient, SendEmailCommand, SendEmailCommandInput } from '@aws-sdk/client-ses';

interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  cc?: string | string[];
  bcc?: string | string[];
  from?: string;
}

export class EmailService {
  private sesClient: SESClient;
  private defaultFromEmail: string;

  constructor() {
    this.sesClient = new SESClient({
      region: process.env.AWS_REGION || 'us-east-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    this.defaultFromEmail = process.env.AWS_SES_FROM_EMAIL || 'noreply@yourdomain.com';
  }

  async sendEmail(options: EmailOptions): Promise<void> {
    const { to, subject, html, cc, bcc, from } = options;

    // Convert single emails to arrays
    const toAddresses = Array.isArray(to) ? to : [to];
    const ccAddresses = cc ? (Array.isArray(cc) ? cc : [cc]) : undefined;
    const bccAddresses = bcc ? (Array.isArray(bcc) ? bcc : [bcc]) : undefined;

    const params: SendEmailCommandInput = {
      Source: from || this.defaultFromEmail,
      Destination: {
        ToAddresses: toAddresses,
        CcAddresses: ccAddresses,
        BccAddresses: bccAddresses,
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: html,
            Charset: 'UTF-8',
          },
        },
      },
    };

    try {
      const command = new SendEmailCommand(params);
      const response = await this.sesClient.send(command);
      console.log('✅ Email sent successfully:', response.MessageId);
    } catch (error) {
      console.error('❌ Failed to send email:', error);
      throw new Error(`Failed to send email: ${error}`);
    }
  }

  generateBusinessPlanEmail(data: any): string {
    const formatValue = (value: string | undefined) => {
      if (!value) return '<em style="color: #999;">Not provided</em>';
      return value.replace(/\n/g, '<br>');
    };

    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
            margin: -40px -40px 40px -40px;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
          }
          .header p {
            margin: 10px 0 0 0;
            opacity: 0.95;
            font-size: 16px;
          }
          .section {
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 2px solid #f0f0f0;
          }
          .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .section-title {
            color: #667eea;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #667eea;
          }
          .field {
            margin-bottom: 25px;
          }
          .field-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 8px;
            font-size: 14px;
            display: block;
          }
          .field-value {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #667eea;
            font-size: 15px;
            color: #333;
          }
          .field-value em {
            font-style: italic;
          }
          .customer-info {
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
          }
          .customer-info h2 {
            margin: 0 0 15px 0;
            font-size: 18px;
            color: #333;
          }
          .customer-info .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
          }
          .info-item {
            background: white;
            padding: 12px;
            border-radius: 6px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          .info-item strong {
            display: block;
            color: #667eea;
            font-size: 12px;
            margin-bottom: 5px;
            text-transform: uppercase;
          }
          .info-item span {
            color: #333;
            font-size: 15px;
          }
          .footer {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #f0f0f0;
            text-align: center;
            color: #999;
            font-size: 13px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎯 New Business Plan Request</h1>
            <p>A new customer has submitted their business information</p>
          </div>

          <!-- Customer Information -->
          <div class="customer-info">
            <h2>👤 Customer Information</h2>
            <div class="info-grid">
              <div class="info-item">
                <strong>Full Name</strong>
                <span>${data.firstName || ''} ${data.middleName || ''} ${data.lastName || ''}</span>
              </div>
              <div class="info-item">
                <strong>Business Name</strong>
                <span>${data.businessName || 'Not provided'}</span>
              </div>
              <div class="info-item">
                <strong>Website</strong>
                <span>${data.website ? `<a href="${data.website}" style="color: #667eea;">${data.website}</a>` : 'Not provided'}</span>
              </div>
              <div class="info-item">
                <strong>Email</strong>
                <span>${data.email ? `<a href="${data.email}" style="color: #667eea;">${data.email}</a>` : 'Not provided'}</span>
              </div>
            </div>
          </div>

          <!-- Section 1: Company Overview & Goals -->
          <div class="section">
            <h2 class="section-title">📋 Company Overview & Goals</h2>
            
            <div class="field">
              <label class="field-label">Business Address</label>
              <div class="field-value">${formatValue(data.businessAddress)}</div>
            </div>

            <div class="field">
              <label class="field-label">What is the purpose of your business, in one sentence?</label>
              <div class="field-value">${formatValue(data.businessPurpose)}</div>
            </div>

            <div class="field">
              <label class="field-label">What problem does your business solve, and for whom?</label>
              <div class="field-value">${formatValue(data.problemSolution)}</div>
            </div>

            <div class="field">
              <label class="field-label">What are your top 3 goals for the next 1–3 years?</label>
              <div class="field-value">${formatValue(data.topGoals)}</div>
            </div>

            <div class="field">
              <label class="field-label">What key achievements or traction do you already have?</label>
              <div class="field-value">${formatValue(data.keyAchievements)}</div>
            </div>
          </div>

          <!-- Section 2: Structure & Operations -->
          <div class="section">
            <h2 class="section-title">🏢 Structure & Operations</h2>
            
            <div class="field">
              <label class="field-label">What inspired you to start this business?</label>
              <div class="field-value">${formatValue(data.inspiration)}</div>
            </div>

            <div class="field">
              <label class="field-label">What is your long-term vision for the company (3–5 years)?</label>
              <div class="field-value">${formatValue(data.longTermVision)}</div>
            </div>

            <div class="field">
              <label class="field-label">Legal Structure</label>
              <div class="field-value">${formatValue(data.legalStructure)}</div>
            </div>

            <div class="field">
              <label class="field-label">Who owns the company, and what are their equity shares and roles?</label>
              <div class="field-value">${formatValue(data.ownership)}</div>
            </div>

            <div class="field">
              <label class="field-label">Describe your location, facility, or setup</label>
              <div class="field-value">${formatValue(data.locationSetup)}</div>
            </div>

            <div class="field">
              <label class="field-label">Permits, licenses, or certifications</label>
              <div class="field-value">${formatValue(data.permitsLicenses)}</div>
            </div>

            <div class="field">
              <label class="field-label">Primary suppliers, vendors, or partners</label>
              <div class="field-value">${formatValue(data.suppliersPartners)}</div>
            </div>

            <div class="field">
              <label class="field-label">What makes your business different from competitors?</label>
              <div class="field-value">${formatValue(data.differentiation)}</div>
            </div>
          </div>

          <!-- Section 3: Market & Competition -->
          <div class="section">
            <h2 class="section-title">🎯 Market & Competition</h2>
            
            <div class="field">
              <label class="field-label">Service Area</label>
              <div class="field-value">${formatValue(data.serviceArea)}</div>
            </div>

            <div class="field">
              <label class="field-label">Target Market (age, income, lifestyle, needs)</label>
              <div class="field-value">${formatValue(data.targetMarket)}</div>
            </div>

            <div class="field">
              <label class="field-label">Top 3–5 Competitors</label>
              <div class="field-value">${formatValue(data.competitors)}</div>
            </div>

            <div class="field">
              <label class="field-label">Competitive Comparison (pricing, quality, experience)</label>
              <div class="field-value">${formatValue(data.competitiveComparison)}</div>
            </div>

            <div class="field">
              <label class="field-label">Market Trends</label>
              <div class="field-value">${formatValue(data.marketTrends)}</div>
            </div>
          </div>

          <!-- Section 4: Team & Management -->
          <div class="section">
            <h2 class="section-title">👥 Team & Management</h2>
            
            <div class="field">
              <label class="field-label">Key Team Members and Roles</label>
              <div class="field-value">${formatValue(data.teamMembers)}</div>
            </div>

            <div class="field">
              <label class="field-label">Hiring Plans</label>
              <div class="field-value">${formatValue(data.hiringPlans)}</div>
            </div>

            <div class="field">
              <label class="field-label">Staff Training, Incentives, or Retention Programs</label>
              <div class="field-value">${formatValue(data.staffPrograms)}</div>
            </div>
          </div>

          <!-- Section 5: Products & Services -->
          <div class="section">
            <h2 class="section-title">📦 Products & Services</h2>
            
            <div class="field">
              <label class="field-label">Average Price</label>
              <div class="field-value">${formatValue(data.averagePrice)}</div>
            </div>

            <div class="field">
              <label class="field-label">What generates the most sales or profit?</label>
              <div class="field-value">${formatValue(data.topRevenue)}</div>
            </div>

            <div class="field">
              <label class="field-label">Plans for New or Seasonal Products/Services</label>
              <div class="field-value">${formatValue(data.newProducts)}</div>
            </div>
          </div>

          <!-- Section 6: Marketing & Growth Strategy -->
          <div class="section">
            <h2 class="section-title">📈 Marketing & Growth Strategy</h2>
            
            <div class="field">
              <label class="field-label">Monthly Marketing Cost</label>
              <div class="field-value">${formatValue(data.monthlyMarketingCost)}</div>
            </div>

            <div class="field">
              <label class="field-label">How do customers find your business?</label>
              <div class="field-value">${formatValue(data.customerAcquisition)}</div>
            </div>

            <div class="field">
              <label class="field-label">Loyalty, Referral, or Promotional Programs</label>
              <div class="field-value">${formatValue(data.loyaltyPrograms)}</div>
            </div>

            <div class="field">
              <label class="field-label">Expansion Plans</label>
              <div class="field-value">${formatValue(data.expansionPlans)}</div>
            </div>
          </div>

          <!-- Section 7: SWOT Analysis -->
          <div class="section">
            <h2 class="section-title">💡 SWOT Analysis</h2>
            
            <div class="field">
              <label class="field-label">Strengths: What do customers love most?</label>
              <div class="field-value">${formatValue(data.strengths)}</div>
            </div>

            <div class="field">
              <label class="field-label">Weaknesses: What challenges do you face?</label>
              <div class="field-value">${formatValue(data.weaknesses)}</div>
            </div>

            <div class="field">
              <label class="field-label">Opportunities: How could you gain an advantage?</label>
              <div class="field-value">${formatValue(data.opportunities)}</div>
            </div>

            <div class="field">
              <label class="field-label">Threats: External risks (competition, economy, supply)</label>
              <div class="field-value">${formatValue(data.threats)}</div>
            </div>
          </div>

          <!-- Section 8: Financials -->
          <div class="section">
            <h2 class="section-title">💰 Financials</h2>
            
            <div class="field">
              <label class="field-label">Average Monthly Earnings</label>
              <div class="field-value">${formatValue(data.monthlyEarnings)}</div>
            </div>

            <div class="field">
              <label class="field-label">Inventory Cost</label>
              <div class="field-value">${formatValue(data.inventoryCost)}</div>
            </div>

            <div class="field">
              <label class="field-label">Typical Monthly Expenses (rent, payroll, supplies, etc.)</label>
              <div class="field-value">${formatValue(data.monthlyExpenses)}</div>
            </div>

            <div class="field">
              <label class="field-label">Current Loans, Investors, or Debts</label>
              <div class="field-value">${formatValue(data.debtInvestors)}</div>
            </div>

            <div class="field">
              <label class="field-label">Main Financial Goals (next 1–3 years)</label>
              <div class="field-value">${formatValue(data.financialGoals)}</div>
            </div>

            <div class="field">
              <label class="field-label">Next Major Growth or Expansion Milestone</label>
              <div class="field-value">${formatValue(data.growthMilestone)}</div>
            </div>
          </div>
        </div>
      </body>
      </html>
  `;
  }
}

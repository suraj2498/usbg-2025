import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SignatureBusinessPlansLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Conservative Hero Section */}
      <section className="bg-white py-24 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl md:text-6xl font-serif mb-8 text-[#002147] leading-tight"
            style={{ fontFamily: 'Merriweather, Georgia, serif' }}
          >
            Executive-grade business plans designed to optimize your business and help you stand out
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Plan structure using formats with the highest acceptance rates for the SBA, financial
            institutions, and grant committees.
          </p>

          <Link
            href="/form"
            className="inline-flex items-center gap-2 bg-[#002147] text-white px-10 py-4 text-lg font-medium hover:bg-[#003366] transition-colors"
          >
            Start Your Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-serif mb-12 text-[#002147]"
            style={{ fontFamily: 'Merriweather, Georgia, serif' }}
          >
            What's Included In The Plan
          </h2>

          <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
            <p>• 12 page business plan organized for third-party review</p>
            <p>• Financial projections structured around standard underwriting logic</p>
            <p>• Clear assumptions section explaining where the numbers originate from</p>
            <p>• Delivered in Word and PDF so it is easy to submit or edit</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-4xl font-serif mb-6 text-[#002147]"
            style={{ fontFamily: 'Merriweather, Georgia, serif' }}
          >
            How We Build Your Plan
          </h2>

          <p className="text-xl text-gray-700 mb-12 italic">
            Your Time is Valuable. Our Process is Seamless.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#002147]">
                Initial Strategy and Data Intake
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                You provide all necessary proprietary data, access, financial history, and strategic
                objectives through our comprehensive intake assessment and a focused kick-off
                session. This transfers the entire project to our team.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#002147]">
                Market Due Diligence & Validation
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our research analysts independently conduct a thorough competitive analysis and
                industry deep-dive, validating all market assumptions against current, high-fidelity
                data sources to ensure the foundation of your plan is robust and investor-ready.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#002147]">
                Investment-Grade Financial Modeling
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our financial specialists autonomously construct comprehensive, dynamic models
                designed to withstand the rigorous scrutiny of VC and institutional lenders.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#002147]">
                Drafting & Narrative Structuring
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our writing team crafts the complete, executive-level narrative of the business plan
                seamlessly integrating the validated research and financial models without needing
                further input.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#002147]">
                Executive Delivery & Consultation
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                The full, integrated draft and supporting materials are delivered. You review the
                complete package at your convenience, and we then schedule a dedicated follow-up
                session to address all questions, discuss feedback, and implement the final round of
                revisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl font-serif mb-12 text-[#002147]"
            style={{ fontFamily: 'Merriweather, Georgia, serif' }}
          >
            Investment
          </h2>

          <div className="mb-8">
            <p className="text-3xl text-gray-900 font-medium mb-2">
              ${Math.round(Number(process.env.NEXT_PUBLIC_PLAN_PRICE!) / 100)}
            </p>
            <p className="text-lg text-gray-600">
              Built by experienced business plan writers with funding reviews in mind.
            </p>
          </div>

          <Link
            href="/form"
            className="inline-flex items-center gap-2 bg-[#002147] text-white px-10 py-4 text-lg font-medium hover:bg-[#003366] transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl md:text-5xl font-serif mb-8 text-[#002147] leading-tight"
            style={{ fontFamily: 'Merriweather, Georgia, serif' }}
          >
            Ready to Present Your Business Professionally
          </h2>

          <p className="text-xl mb-10 text-gray-700">
            Let our expert team help you build a plan that meets institutional standards.
          </p>

          <Link
            href="/form"
            className="inline-flex items-center gap-2 bg-[#002147] text-white px-10 py-4 text-lg font-medium hover:bg-[#003366] transition-colors"
          >
            Begin Your Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

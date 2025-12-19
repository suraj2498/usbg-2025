import Link from 'next/link';
import { ArrowRight, FileText, CheckCircle2, Calculator, Clock } from 'lucide-react';

export default function EZBusinessPlansLanding() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Two-Column Hero Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Get A Professional Business Plan In 24 Hours
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-700">
                Answer a guided set of questions and receive a complete, ready-to-use business plan.
              </p>

              <Link 
                href="/form"
                className="inline-flex items-center gap-2 bg-[#39FF14] text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2edb10] transition-all shadow-lg"
              >
                Start Intake Form
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Column - Info Card */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                What You'll Get
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-gray-700">24-48 hour delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-gray-700">12-15 page professional plan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-gray-700">Expert human review</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-gray-900" />
                  </div>
                  <span className="text-gray-700">1 free revision included</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#007BFF] mb-1" style={{ fontFamily: 'Roboto Mono, monospace' }}>24hr</div>
                  <div className="text-xs text-gray-600">Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#007BFF] mb-1" style={{ fontFamily: 'Roboto Mono, monospace' }}>15</div>
                  <div className="text-xs text-gray-600">Pages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#007BFF] mb-1" style={{ fontFamily: 'Roboto Mono, monospace' }}>7</div>
                  <div className="text-xs text-gray-600">Day Edits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            How It Works
          </h2>

          {/* Progress Bar */}
          <div className="relative mb-16">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gray-300">
              <div className="h-full bg-[#007BFF] w-full"></div>
            </div>

            {/* Steps */}
            <div className="relative grid grid-cols-3 gap-4">
              {/* Upload */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  1
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>Upload</h3>
                <p className="text-sm text-gray-600">Fill out our guided intake form</p>
              </div>

              {/* Review */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  2
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>Review</h3>
                <p className="text-sm text-gray-600">Our experts review and finalize</p>
              </div>

              {/* Download */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  3
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>Download</h3>
                <p className="text-sm text-gray-600">Receive your plan in 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Cards */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Numbers You Can Trust
              </h3>
              <p className="text-gray-600 text-left">
                We organize your financial projections so they are clear, realistic, and ready 
                for review by any partner or investor.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Accuracy Meets Speed
              </h3>
              <p className="text-gray-600 text-left">
                We combine a streamlined intake process with human expertise to deliver 
                professional documents faster than a traditional consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                The Strategy Document
              </h3>
              <p className="text-gray-600 text-left">
                A fully written, professional business plan (Word & PDF).
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                The Financial Model
              </h3>
              <p className="text-gray-600 text-left">
                Transparent, editable documents so you can adjust numbers as you grow.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 text-left" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                7-Day Refinement Window
              </h3>
              <p className="text-gray-600 text-left">
                Need to tweak a projection? We include one round of rapid edits free of charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Pricing
          </h2>

          {/* Pricing Card */}
          <div className="bg-white rounded-2xl p-10 shadow-xl border-2 border-[#007BFF]">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>$299</div>
              <p className="text-gray-600">One-time payment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-700 text-left">Formal Business plan</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-700 text-left">Word and PDF delivery</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-700 text-left">Financials based on your inputs</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#39FF14] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-700 text-left">One included revision</span>
              </div>
            </div>

            <Link 
              href="/form"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#007BFF] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#0056b3] transition-all shadow-lg"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#007BFF] to-[#0056b3] rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to Create Your Growth Strategy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a professional, data-backed business plan delivered in 24-48 hours.
            </p>
            
            <Link 
              href="/form"
              className="inline-flex items-center gap-2 bg-[#39FF14] text-gray-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-[#2edb10] transition-all shadow-xl"
            >
              Create My Growth Strategy
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

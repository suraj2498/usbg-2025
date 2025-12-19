import Link from 'next/link';
import { ArrowRight, FileText, Sparkles, Eye } from 'lucide-react';

export default function BusinessPlanBoutiqueLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Asymmetric Hero Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="text-left">
              <h1 className="text-6xl md:text-7xl font-serif mb-8 text-black leading-tight" style={{ fontFamily: 'Didot, serif' }}>
                Narrative Business Plans For Modern Brands
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                First impressions matter. We create clean, organized business plans that make it easy 
                for investors to say "yes" to your vision.
              </p>

              <Link 
                href="/form"
                className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 text-lg font-medium hover:bg-gray-800 transition-colors"
                style={{ borderRadius: '4px' }}
              >
                Build My Boutique Plan
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Trust Points */}
              <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-gray-200">
                <span className="text-sm text-gray-600 font-light">Brand-conscious layouts</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600 font-light">Designed for screen reading</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-600 font-light">Created for pitches and presentations</span>
              </div>
            </div>

            {/* Right Column - Document Mockups */}
            <div className="relative hidden md:block">
              <div className="relative">
                {/* Layered document mockups */}
                <div className="absolute top-0 left-0 w-72 h-96 bg-gradient-to-br from-pink-100 to-pink-50 transform rotate-3 shadow-lg"></div>
                <div className="absolute top-8 left-12 w-72 h-96 bg-gradient-to-br from-purple-100 to-purple-50 transform -rotate-2 shadow-lg"></div>
                <div className="relative w-72 h-96 bg-white border border-gray-200 shadow-2xl p-8 transform -rotate-1">
                  <div className="space-y-4">
                    <div className="h-3 bg-black w-3/4"></div>
                    <div className="h-2 bg-gray-300 w-full"></div>
                    <div className="h-2 bg-gray-300 w-5/6"></div>
                    <div className="h-2 bg-gray-300 w-4/6"></div>
                    <div className="mt-6 h-32 bg-gradient-to-br from-mint-100 to-mint-50"></div>
                    <div className="h-2 bg-gray-300 w-full mt-4"></div>
                    <div className="h-2 bg-gray-300 w-4/5"></div>
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <p className="text-sm text-gray-500 mt-12 italic" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                8 page narrative structure • Layouts aligned with modern investor expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Value Props - Text Left, Visual Right */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-2 space-y-8">
              <div>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-serif mb-6 text-black" style={{ fontFamily: 'Didot, serif' }}>
                  Stand Out in the Stack
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-light" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                  Most business plans are boring and hard to read. Yours will be sharp, organized, 
                  and highlight exactly why your idea is a winner.
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="bg-white p-12 shadow-xl">
                <div className="space-y-3">
                  <div className="h-4 bg-black w-2/3"></div>
                  <div className="h-2 bg-gray-200 w-full"></div>
                  <div className="h-2 bg-gray-200 w-5/6"></div>
                  <div className="h-2 bg-gray-200 w-4/6"></div>
                  <div className="mt-8 h-48 bg-gradient-to-br from-purple-100 to-pink-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Section - Visual Left, Text Right */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            <div className="md:col-span-3 order-2 md:order-1">
              <div className="bg-gradient-to-br from-mint-50 to-mint-100 p-16 shadow-lg">
                <div className="space-y-4">
                  <div className="h-3 bg-gray-800 w-1/2"></div>
                  <div className="h-2 bg-gray-400 w-full"></div>
                  <div className="h-2 bg-gray-400 w-4/5"></div>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="h-24 bg-white/50"></div>
                    <div className="h-24 bg-white/50"></div>
                    <div className="h-24 bg-white/50"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 order-1 md:order-2 space-y-8">
              <div>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-serif mb-6 text-black" style={{ fontFamily: 'Didot, serif' }}>
                  Refined for Clarity
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed font-light" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                  We refine your information to ensure the flow and structure make sense to an outsider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Create - Circular Flow */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-16 text-black" style={{ fontFamily: 'Didot, serif' }}>
            What We Create
          </h2>

          {/* Circular Loop */}
          <div className="relative w-80 h-80 mx-auto mb-12">
            {/* Circle */}
            <div className="absolute inset-0 border-4 border-black rounded-full"></div>
            
            {/* Vision - Top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white px-6 py-3 border-2 border-black">
                <span className="font-serif text-lg text-black" style={{ fontFamily: 'Didot, serif' }}>Vision</span>
              </div>
            </div>

            {/* Structure - Right */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <div className="bg-white px-6 py-3 border-2 border-black">
                <span className="font-serif text-lg text-black" style={{ fontFamily: 'Didot, serif' }}>Structure</span>
              </div>
            </div>

            {/* Polish - Bottom */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <div className="bg-white px-6 py-3 border-2 border-black">
                <span className="font-serif text-lg text-black" style={{ fontFamily: 'Didot, serif' }}>Polish</span>
              </div>
            </div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto font-light italic" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
            Built asynchronously from your inputs, with clarification handled by email if needed.
          </p>
        </div>
      </section>

      {/* Staggered Deliverables */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-serif mb-20 text-black text-center" style={{ fontFamily: 'Didot, serif' }}>
            What's In The Box
          </h2>

          <div className="space-y-16">
            {/* Item 1 - Offset Left */}
            <div className="md:ml-0 md:mr-auto md:w-2/3 bg-gradient-to-br from-pink-50 to-white p-10 border border-gray-200">
              <h3 className="text-3xl font-serif mb-4 text-black" style={{ fontFamily: 'Didot, serif' }}>
                The Design Assets
              </h3>
              <p className="text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                High-resolution PDFs for presentation and editable source files for future updates.
              </p>
            </div>

            {/* Item 2 - Offset Right */}
            <div className="md:ml-auto md:mr-0 md:w-2/3 bg-gradient-to-br from-purple-50 to-white p-10 border border-gray-200">
              <h3 className="text-3xl font-serif mb-4 text-black" style={{ fontFamily: 'Didot, serif' }}>
                The Financials
              </h3>
              <p className="text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                Clear, easy-to-read models that tell your financial story with precision.
              </p>
            </div>

            {/* Item 3 - Offset Left */}
            <div className="md:ml-0 md:mr-auto md:w-2/3 bg-gradient-to-br from-mint-50 to-white p-10 border border-gray-200">
              <h3 className="text-3xl font-serif mb-4 text-black" style={{ fontFamily: 'Didot, serif' }}>
                The Final Polish
              </h3>
              <p className="text-gray-700 font-light leading-relaxed" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                We include a revision round to fine-tune the language and ensure it captures 
                your voice perfectly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-serif mb-8 text-black" style={{ fontFamily: 'Didot, serif' }}>
            Investment
          </h2>
          
          <div className="bg-white p-12 border-2 border-black inline-block">
            <div className="text-6xl font-serif mb-4 text-black" style={{ fontFamily: 'Didot, serif' }}>$275</div>
            <p className="text-gray-600 font-light" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              One thoughtfully crafted business plan
            </p>
          </div>

          <div className="mt-12">
            <Link 
              href="/form"
              className="inline-flex items-center gap-3 bg-black text-white px-12 py-5 text-xl font-medium hover:bg-gray-800 transition-colors"
              style={{ borderRadius: '4px' }}
            >
              Begin Your Project
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Asymmetric */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:w-2/3">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight" style={{ fontFamily: 'Didot, serif' }}>
              Ready to Make Your Best Impression?
            </h2>
            <p className="text-xl mb-10 opacity-90 font-light leading-relaxed" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              Get a clean, organized business plan that makes investors excited to say yes.
            </p>
            <Link 
              href="/form"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
              style={{ borderRadius: '4px' }}
            >
              Start My Boutique Plan
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

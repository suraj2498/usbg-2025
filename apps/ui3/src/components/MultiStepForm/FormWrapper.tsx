'use client';
import { useState } from 'react';
import { useMultiStepForm, MultiStepFormData, getSchemaForPage } from '@monorepo/forms';
import { ChevronLeft } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step from './steps/Step';
import { z } from 'zod';
import { formConfig } from '@/utils/form';

export default function MultiStepForm() {
  const { form, currentStep, totalSteps, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm(9);

  const [isSaving, setIsSaving] = useState(false);

  const onSubmit = async (data: MultiStepFormData) => {
    try {
      setIsSaving(true);
      const currentStepName = Object.keys(formConfig)[currentStep - 1];

      const isReviewStep = currentStep === totalSteps - 1;
      console.log({ isReviewStep });
      if (isReviewStep) {
        // Validate final page
        const currentSchema = getSchemaForPage(currentStep);
        await currentSchema.parseAsync(data);

        // Submit all data to API
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

        const response = await fetch(`${API_URL}/api/business-plans`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, origin: process.env.NEXT_PUBLIC_ORIGIN ?? '' }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to save form');
        }

        const result = await response.json();
        console.log('Form saved successfully:', result);
        await nextStep(currentStepName);
      } else if (isLastStep) {
        window.location.href = `${process.env.NEXT_PUBLIC_STRIPE_LINK!}?prefilled_email=${encodeURIComponent(data.email!)}`;
      } else {
        // Just move to next step, no API call
        await nextStep(currentStepName);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          form.setError(err.path[0] as any, {
            message: err.message,
          });
        });
      } else {
        console.error('Saving error:', error);
        alert(error instanceof Error ? error.message : 'Failed to save. Please try again later.');
      }
    } finally {
      setIsSaving(false);
    }
  };

  const getButtonText = () => {
    if (currentStep === totalSteps - 1) return 'Review';
    else if (isLastStep)
      return (
        <>
          Continue to checkout
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </>
      );
    else return 'Next step';
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with Asymmetric Layout */}
      <div className="bg-white border-b-2 border-black mb-12">
        <div className="px-12 py-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-serif text-black mb-3" style={{ fontFamily: 'Didot, serif' }}>
                Business Plan Generator
              </h1>
              <p className="text-lg text-gray-600 font-light" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                Complete all required fields with care
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-light">
              <span>Step {currentStep}</span>
              <span className="text-gray-300">•</span>
              <span>{totalSteps} total</span>
            </div>
          </div>
        </div>

        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Form Content - Generous White Space */}
      <div className="bg-white border border-gray-200 px-12 py-16">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
          {/* Step Content */}
          <div className="min-h-[500px]">
            <Step
              form={form}
              currentStep={currentStep}
              isLastStep={isLastStep}
              totalSteps={totalSteps}
            />
          </div>

          {/* Navigation Buttons - Asymmetric */}
          <div className="flex items-center justify-between pt-12 border-t border-gray-300">
            <button
              type="button"
              onClick={prevStep}
              disabled={isFirstStep}
              className={`
                flex items-center gap-3 px-8 py-3 font-medium
                transition-colors duration-200
                ${isFirstStep
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                  : 'bg-white border border-gray-400 text-gray-700 hover:border-black hover:text-black'
                }
              `}
              style={{ borderRadius: '4px', fontFamily: 'Helvetica Neue, sans-serif' }}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <button
              type="submit"
              className="
                flex items-center gap-3 px-10 py-3 font-medium
                bg-black text-white hover:bg-gray-800
                transition-colors duration-200
                min-w-[180px] justify-center
              "
              style={{ borderRadius: '4px', fontFamily: 'Helvetica Neue, sans-serif' }}
              disabled={isSaving}
            >
              {getButtonText()}
            </button>
          </div>
        </form>

        {/* Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-12 p-6 bg-gradient-to-br from-pink-50 to-purple-50 border border-gray-200">
            <p className="text-xs font-serif text-gray-700 mb-3" style={{ fontFamily: 'Didot, serif' }}>Debug Info:</p>
            <pre className="text-xs text-gray-800 overflow-auto font-light" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              {JSON.stringify(form.watch(), null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Decorative Accent */}
      <div className="mt-8 h-2 bg-gradient-to-r from-pink-200 via-purple-200 to-mint-200"></div>
    </div>
  );
}

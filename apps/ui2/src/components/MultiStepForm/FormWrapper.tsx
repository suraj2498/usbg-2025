'use client';
import { useState } from 'react';
import { useMultiStepForm, MultiStepFormData, getSchemaForPage } from '@monorepo/forms';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step from './steps/Step';
import { z } from 'zod'
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
        window.location.href = process.env.NEXT_PUBLIC_STRIPE_LINK!;
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
    if (currentStep === totalSteps - 1)
      return 'Review';
    else if (isLastStep)
      return 'Continue to checkout'
    else
      return 'Next'
  }

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 border-t-4 border-primary">
      <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Step Content */}
        <div className="min-h-[400px]">
          <Step
            form={form}
            currentStep={currentStep}
            totalSteps={totalSteps}
            isLastStep={isLastStep}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
          <button
            type="button"
            onClick={prevStep}
            disabled={isFirstStep}
            className={`
              flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold
              transition-all duration-200
              ${
                isFirstStep
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary'
              }
            `}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous Step
          </button>

          <button
            type="submit"
            className="
              flex items-center gap-2 px-8 py-2.5 rounded-lg font-semibold
              bg-primary text-white hover:bg-primary-dark
              transition-all duration-200 shadow-md hover:shadow-lg
              min-w-[140px] justify-center
            "
            disabled={isSaving}
          >
            {getButtonText()}
            {!isLastStep && <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      </form>

      {/* Debug Info - Remove in production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs font-semibold text-gray-600 mb-2">Debug Info:</p>
          <pre className="text-xs text-gray-800 overflow-auto">

            {JSON.stringify(form.watch(), null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

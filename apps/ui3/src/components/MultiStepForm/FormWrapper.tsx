'use client';

import { useMultiStepForm, MultiStepFormData } from '@monorepo/forms';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StepIndicator from './StepIndicator';
import Step from './steps/Step';

export default function MultiStepForm() {
  const { form, currentStep, totalSteps, nextStep, prevStep, isFirstStep, isLastStep } =
    useMultiStepForm(9);

  const onSubmit = async (data: MultiStepFormData) => {
    if (isLastStep) {
      console.log('Form submitted:', data);
      alert('Form submitted successfully! Check console for data.');
    } else {
      await nextStep();
    }
  };

  return (
    <div className="max-w-8xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 border-b-0">
        <div className="px-8 py-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Business Plan Generator</h1>
              <p className="text-sm text-gray-600">Complete all required fields</p>
            </div>
          </div>
        </div>

        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      </div>

      {/* Form Content */}
      <div className="bg-gray-50 rounded-b-lg shadow-sm border border-gray-200 border-t-0 p-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Step Content */}
          <div className="min-h-[500px]">
            <Step form={form} currentStep={currentStep} isLastStep={isLastStep} totalSteps={totalSteps} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t-2 border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={isFirstStep}
              className={`
                flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold
                transition-all duration-200
                ${
                  isFirstStep
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary shadow-sm'
                }
              `}
            >
              <ChevronLeft className="w-5 h-5" />
              Previous Step
            </button>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <button
                type="submit"
                className="
                  flex items-center gap-2 px-8 py-2.5 rounded-lg font-semibold
                  bg-primary text-white hover:bg-primary-dark
                  transition-all duration-200 shadow-md hover:shadow-lg
                  min-w-[160px] justify-center
                "
              >
                {isLastStep ? (
                  <>
                    Submit Form
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    Next Step
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-xs font-semibold text-gray-600 mb-2">Debug Info:</p>
            <pre className="text-xs text-gray-800 overflow-auto">
              {JSON.stringify(form.watch(), null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

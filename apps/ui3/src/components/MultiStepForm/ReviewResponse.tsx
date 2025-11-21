// components/ReviewResponses.tsx
import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { formConfig } from '@/utils/form';

interface ReviewResponsesProps {
  form: UseFormReturn<MultiStepFormData>;
  currentStep: number;
  isLastStep: boolean;
}

export default function ReviewResponses({ 
  form, 
  currentStep, 
  isLastStep 
}: ReviewResponsesProps) {
  // Debug: Check if this component is rendering
  console.log('ReviewResponses render:', { currentStep, isLastStep });

  if (!isLastStep) {
    return null;
  }

  const data = form.getValues();
  const steps = Object.keys(formConfig) as (keyof typeof formConfig)[];
  
  // Debug: Log steps and data
  const formSteps = steps.slice(0, currentStep);

  // Get all fields from all steps
  const allFields: Array<{ label: string; value: any }> = [];
  
  console.log({formSteps})
  console.log({formConfig})
  formSteps.forEach((stepKey) => {
    const stepConfig = formConfig[stepKey];
    console.log('Processing step:', stepKey, stepConfig);
    
    // [{label: asdas, key}]
    stepConfig?.forEach((config) => {
      console.log({config})
      const value = data[config.key as keyof MultiStepFormData];

      allFields.push({
        label: config.label,
        value: value
      });
    });
  });

  console.log('All fields:', allFields);

  // If no fields, show a message
  if (allFields.length === 0) {
    return (
      <div className="space-y-8">
        <div className="text-center pb-6 border-b">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Review Your Responses
          </h2>
          <p className="text-gray-600">
            Please review your answers before submitting
          </p>
        </div>
        <div className="text-center py-12">
          <p className="text-red-600">No fields found to review</p>
          <p className="text-sm text-gray-500 mt-2">
            Current step: {currentStep}, Total steps: {steps.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center pb-6 border-b">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Review Your Responses
        </h2>
        <p className="text-gray-600">
          Please review your answers before submitting
        </p>
      </div>

      {/* Simple List */}
      <div className="space-y-4">
        {allFields.map((field, index) => (
          <div key={index} className="pb-4 border-b border-gray-200 last:border-0">
            <div className="font-medium text-gray-900 mb-2">
              {field.label}
            </div>
            <div className="text-gray-700">
              {formatValue(field.value)}
            </div>
          </div>
        ))}
      </div>

      {/* Confirmation */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 text-blue-600 rounded"
          />
          <span className="text-sm text-gray-700">
            I confirm all information is accurate
          </span>
        </label>
      </div>
    </div>
  );
}

function formatValue(value: any): string {
  if (value === null || value === undefined || value === '') return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return String(value);
}

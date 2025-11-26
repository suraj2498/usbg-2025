import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';

interface ReviewResponsesProps {
  form: UseFormReturn<MultiStepFormData>;
  currentStep: number;
  isLastStep: boolean;
}

export default function ReviewResponses({ 
  isLastStep 
}: ReviewResponsesProps) {
  if (!isLastStep) {
    return null;
  }

  return (
    <div className="mt-24">
      {/* Header */}
      <div className="text-center pb-6 border-b">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Thank You!
        </h2>
        <p className="text-gray-600">
          Thanks for filling out the form!
        </p>
      </div>

      {/* Message */}
      <div className="text-center py-8">
        <p className="text-lg text-gray-700">
          Continue to the payment page to finalize your request.
        </p>
      </div>
    </div>
  );
}

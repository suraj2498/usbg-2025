'use client';

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { id: 1, label: 'Step 1' },
  { id: 2, label: 'Step 2' },
  { id: 3, label: 'Step 3' },
  { id: 4, label: 'Step 4' },
  { id: 5, label: 'Step 5' },
  { id: 6, label: 'Step 6' },
  { id: 7, label: 'Step 7' },
  { id: 8, label: 'Step 8' },
  { id: 9, label: 'Step 9' },
];

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="mb-8 bg-white border-b border-gray-200">
      <div className="flex items-center">
        {steps.slice(0, totalSteps).map((step) => (
          <div
            key={step.id}
            className={`
              relative flex items-center justify-center h-16
              transition-all duration-300
              ${
                step.id === currentStep
                  ? 'bg-primary text-white z-10'
                  : step.id < currentStep
                  ? 'bg-gray-300 text-gray-700'
                  : 'bg-gray-100 text-gray-500'
              }
            `}
            style={{
              width: `${100 / totalSteps}%`,
              clipPath:
                step.id === 1
                  ? 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)'
                  : step.id === totalSteps
                  ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 10% 50%)'
                  : 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)',
            }}
          >
            <div className="flex items-center gap-3 font-semibold">
              <span className="text-2xl">{step.id}</span>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-wider opacity-80">STEP</span>
                <span className="text-sm">{step.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

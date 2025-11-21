'use client';

import { UseFormReturn } from 'react-hook-form';
import { MultiStepFormData } from '@monorepo/forms';
import { Input, Textarea } from '@monorepo/ui';
import { formConfig, PageConfig } from '@/utils/form';
import ReviewResponses from '../ReviewResponse'

interface StepProps {
  form: UseFormReturn<MultiStepFormData>;
  currentStep: number;
  totalSteps: number;
  isLastStep: boolean;
}

export default function Step({ form, currentStep, totalSteps, isLastStep }: StepProps) {
  const {
    register,
    formState: { errors },
  } = form;

  const steps = Object.keys(formConfig);
  const stepKey  = steps[currentStep - 1]

  if (stepKey === undefined || stepKey === null) {
    return null;
  }

  return (
    <div className="space-y-6">
      {
        !isLastStep ? 
        formConfig[stepKey]?.map((step: PageConfig) => {
          if (step.type === 'input') {
            return (<Input
              key={step.key}
              label={step.label}
              placeholder={step.placeholder}
              error={errors[step.key]?.message}
              {...register(step.key)}
            />)
          }

          if (step.type === 'textarea') {
            return (<Textarea
              key={step.key}
              label={step.label}
              placeholder={step.placeholder}
              error={errors[step.key]?.message}
              rows={5}
              {...register(step.key)}
            />)
          }

          return null;
        })
       : <ReviewResponses form={form} currentStep={currentStep} isLastStep={totalSteps === currentStep} /> 
      }
    </div>
  );
}

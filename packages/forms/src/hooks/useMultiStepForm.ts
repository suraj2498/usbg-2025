import { useState } from 'react';
import { z } from 'zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { getSchemaForPage } from '../schemas';
import type { MultiStepFormData } from '../types';

export interface UseMultiStepFormReturn {
  form: UseFormReturn<MultiStepFormData>;
  currentStep: number;
  totalSteps: number;
  nextStep: (currentStepName?: string) => Promise<void>;
  prevStep: () => void;
  goToStep: (step: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  progress: number;
}

export function useMultiStepForm(totalSteps: number = 3): UseMultiStepFormReturn {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<MultiStepFormData>({
    mode: 'onChange',
  });

  const nextStep = async (currentStepName?: string) => {
    // Manually validate current step fields
    const currentSchema = getSchemaForPage(currentStepName ?? currentStep);
    const currentData = form.getValues();

    console.log({currentStep, totalSteps})
    
    try {
      await currentSchema.parseAsync(currentData);
      if (currentStep <= totalSteps) {      
        setCurrentStep((prev) => prev + 1);
        form.clearErrors();
      }
    } catch (error) {
      console.log('❌ Validation failed:', error);
      // Zod validation failed - set errors
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => {
          form.setError(err.path[0] as any, {
            message: err.message,
          });
        });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      form.clearErrors();
    }
  };

  const goToStep = (step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
      form.clearErrors();
    }
  };

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;
  const progress = (currentStep / totalSteps) * 100;

  return {
    form,
    currentStep,
    totalSteps,
    nextStep,
    prevStep,
    goToStep,
    isFirstStep,
    isLastStep,
    progress,
  };
}

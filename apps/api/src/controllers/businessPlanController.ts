import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';
import { createError } from '../middleware/errorHandler';
import { EmailService } from '../services/email';
import { getDomainConfig } from '../utils/utils';

// Create a new business plan
export const createBusinessPlan = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const businessPlanInput = req.body;
    const businessPlan = await prisma.businessPlan.create({
      data: businessPlanInput,
    });


    res.status(201).json({
      success: true,
      message: 'Business plan created successfully',
      data: businessPlan,
    });
  } catch (error) {
    next(error);
  }
};

// Get all business plans
export const getAllBusinessPlans = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { page = '1', limit = '10', userId } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

    const where = userId ? { userId: userId as string } : {};

    const [businessPlans, total] = await Promise.all([
      prisma.businessPlan.findMany({
        where,
        skip,
        take: parseInt(limit as string),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.businessPlan.count({ where }),
    ]);

    res.status(200).json({
      success: true,
      data: businessPlans,
      pagination: {
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        total,
        pages: Math.ceil(total / parseInt(limit as string)),
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get a single business plan by ID
export const getBusinessPlanById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const businessPlan = await prisma.businessPlan.findUnique({
      where: { id },
    });

    if (!businessPlan) {
      throw createError('Business plan not found', 404);
    }

    res.status(200).json({
      success: true,
      data: businessPlan,
    });
  } catch (error) {
    next(error);
  }
};

// Update a business plan
export const updateBusinessPlan = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    // Check if exists
    const exists = await prisma.businessPlan.findUnique({
      where: { id },
    });

    if (!exists) {
      throw createError('Business plan not found', 404);
    }

    const businessPlan = await prisma.businessPlan.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: 'Business plan updated successfully',
      data: businessPlan,
    });
  } catch (error) {
    next(error);
  }
};

// Partial update (patch) a business plan
export const patchBusinessPlan = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const businessPlan = await prisma.businessPlan.update({
      where: { id },
      data: req.body,
    });

    res.status(200).json({
      success: true,
      message: 'Business plan updated successfully',
      data: businessPlan,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a business plan
export const deleteBusinessPlan = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    await prisma.businessPlan.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Business plan deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

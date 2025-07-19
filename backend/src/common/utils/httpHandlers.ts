import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import type { ZodError, ZodSchema } from "zod";

import { ServiceResponse } from "@/common/models/serviceResponse";

type SchemaMap = {
  body?: ZodSchema;
  query?: ZodSchema;
  params?: ZodSchema;
};

export const validateRequest = (schemas: SchemaMap) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate each part of the request if schema is provided
    if (schemas.body) {
      req.body = await schemas.body.parseAsync(req.body);
    }
    if (schemas.query) {
      req.query = await schemas.query.parseAsync(req.query);
    }
    if (schemas.params) {
      req.params = await schemas.params.parseAsync(req.params);
    }

    next();
  } catch (err) {
    const zodError = err as ZodError;

    const errors = zodError.errors.map((e) => {
      const fieldPath = e.path.length > 0 ? e.path.join(".") : "root";
      return `${fieldPath}: ${e.message}`;
    });

    const errorMessage =
      errors.length === 1
        ? `Invalid input: ${errors[0]}`
        : `Invalid input (${errors.length} errors): ${errors.join("; ")}`;

    const serviceResponse = ServiceResponse.failure(errorMessage, null, StatusCodes.BAD_REQUEST);
    res.status(serviceResponse.statusCode).send(serviceResponse);
  }
};
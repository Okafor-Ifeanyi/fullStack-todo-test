import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { ServiceResponse } from "../models/serviceResponse";
import { env } from "../utils/envConfig";

interface CustomRequest extends Request {
  userId?: number;
}

// Middleware to check if user is authenticated
export const isAuthorized = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  // Get token from request headers, cookies, or wherever you are sending it
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!token) {
    const failureResponse = ServiceResponse.failure(
        "Unauthorized: No token provided",
        { message: "Oops you forgot to add your token" },
        StatusCodes.UNAUTHORIZED
      );
    return res.status(StatusCodes.UNAUTHORIZED).json(failureResponse);
  }

  jwt.verify(token, env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      const failureResponse = ServiceResponse.failure(
        "Unauthorized: Invalid token",
        { message: "Oops you forgot to add your token" },
        StatusCodes.UNAUTHORIZED
      );
        return res.status(StatusCodes.UNAUTHORIZED).json(failureResponse);
    }

    // Attach the decoded payload to the request for further use in protected routes
    if (decoded) {
      req.userId = decoded.id;
      next();
    } else {
      const failureResponse = ServiceResponse.failure(
        "User not Authorized",
        null,
        StatusCodes.UNAUTHORIZED
      );
      return res.status(StatusCodes.UNAUTHORIZED).json(failureResponse);
    }
  });
};

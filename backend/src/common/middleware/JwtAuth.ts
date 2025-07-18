import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import { ServiceResponse } from '../models/serviceResponse'
import { env } from '../utils/envConfig'

interface CustomRequest extends Request {
  userId?: number
}

// Middleware to check if user is authenticated
export const isAuthorized = (req: CustomRequest, res: Response, next: NextFunction) => {

  // Get token from request headers, cookies, or wherever you are sending it
  const token = req.headers.authorization?.split(' ')[1] || req.cookies.jwt

  if (!token) {
    return ServiceResponse.failure("Unauthorized: No token provided", null, StatusCodes.UNAUTHORIZED);
  }

  jwt.verify(token, env.JWT_SECRET, (err: any, decoded: any) => {
    if (err) {
      return ServiceResponse.failure("Unauthorized: Invalid token", null, StatusCodes.UNAUTHORIZED);
    }

    // Attach the decoded payload to the request for further use in protected routes
    if (decoded) {
      req.userId = decoded.userId
      next()
    } else {
        return ServiceResponse.failure("User not Authorized", null, StatusCodes.UNAUTHORIZED);
    }
  })
}


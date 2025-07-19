export interface AuthResponse {
    success: boolean;
    message: string;
    statusCode: number;
    responseObject: {
      token: string;
      user: User;
    };
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    avaatar?: string | null;
    password: string; // Note: hashed password – usually not returned in frontend-safe APIs
    createdAt: string; // ISO date string
    updatedAt: string;
  }

  export interface AuthRequest {
    email: string;
    password: string;
  }
  
export interface RegisterRequest extends AuthRequest {
    name: string;
  }

  export interface BaseResponse<T = any> {
    success: boolean;
    message: string;
    responseObject: T;
    statusCode: number;
  }
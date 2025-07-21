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
  avaatar?: string;
}

export interface UpdateUserRequest {
  name?: string;
  avaatar?: string;
}

export interface BaseResponse<T = any> {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
}

export interface CloudinaryUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  original_filename: string;
}

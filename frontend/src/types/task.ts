export interface Task {
    id: number;
    title: string;
    description?: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
    extras?: Record<string, any> | null;
    userId: number;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface TaskRequest {
    title: string;
    description?: string;
    extras?: string;
  }
  
  export interface TaskUpdateRequest {
    title?: string;
    description?: string;
    status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
    extras?: Record<string, any>;
  }

  export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE'
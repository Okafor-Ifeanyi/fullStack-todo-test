export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: string; // ISO date string
}

export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'DONE';
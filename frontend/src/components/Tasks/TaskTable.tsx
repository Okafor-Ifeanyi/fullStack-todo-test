import React from 'react';
import type { Task } from '../../types/task';

interface TaskTableHeaderProps {
  columns: string[];
}

export const TaskTableHeader: React.FC<TaskTableHeaderProps> = ({ columns }) => (
  <thead>
    <tr>
      {columns.map((col, idx) => (
        <th key={idx} className="border px-4 py-2 text-left">
          {col}
        </th>
      ))}
    </tr>
  </thead>
);

interface TaskTableRowProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

export const TaskTableRow: React.FC<TaskTableRowProps> = ({ task, onUpdate, onDelete }) => (
  <tr className='border justify-center item'>
    <td className="border px-4 py-2">{task.title}</td>
    <td className="border px-4 py-2">{task.description}</td>
    <td className="border px-4 py-2 capitalize">{task.status}</td>
    <td className="border px-4 py-2">{new Date(task.createdAt).toLocaleDateString()}</td>
    <td className="px-4 py-2 flex flex-col my-auto gap-2">
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        onClick={() => onUpdate(task)}
      >
        Update
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);

interface TaskTableProps {
  tasks: Task[];
  onUpdate: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

const columns = ['Title', 'Description', 'Status', 'Created At', 'Actions'];

export const TaskTable: React.FC<TaskTableProps> = ({ tasks, onUpdate, onDelete }) => (
    <div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse mt-4">
    <TaskTableHeader columns={columns} />
    <tbody>
      {tasks.map(task => (
        
        <TaskTableRow 
            key={task.id} 
            task={task} 
            onUpdate={onUpdate} 
            onDelete={onDelete}
        />


      ))}
    </tbody>
  </table>
  </div>
);
import React, { useState } from "react";
import { TaskTable } from "../components/Tasks/TaskTable";
import { type Task, type TaskStatus } from "../types/task";

const mockTasks: Task[] = [
  {
    id: 1,
    title: "Finish report",
    description: "Complete the quarterly financial report",
    status: "PENDING",
    dueDate: "2025-07-20",
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Discuss sprint goals",
    status: "PENDING",
    dueDate: "2025-07-15",
  },
];

const TasksView: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<"all" | TaskStatus>("all");

  const filteredTasks =
    statusFilter === "all"
      ? mockTasks
      : mockTasks.filter((t) => t.status === statusFilter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by status:</label>
        <select
          className="border px-3 py-1 rounded"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value as TaskStatus | "all")
          }
        >
          <option value="all">All</option>
          <option value="PENDING">Pending</option>
          <option value="DONE">Done</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
        </select>
      </div>

      <TaskTable
        tasks={filteredTasks}
        onUpdate={(task) => {
          // open modal or redirect to edit page
          console.log("Update task:", task);
        }}
        onDelete={(id) => {
          // call delete logic
          console.log("Delete task with ID:", id);
        }}
      />
    </div>
  );
};

export default TasksView;

import React, { useState } from "react";
import { TaskTable } from "../components/Tasks/TaskTable";
import { type TaskStatus, type Task } from "../types/task";
import {
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} from "../services/todo.service";
import { handleApiError } from "../lib/errorHandler";
import { toast } from "sonner";
import { LoaderIcon } from "../assets/svg/Icons";

const TasksView: React.FC = () => {
  const [statusFilter, setStatusFilter] = useState<"all" | TaskStatus>("all");
  const { data, isLoading, isError, error } = useGetTasksQuery();
  const [updateTask, { isLoading: updateLoader }] = useUpdateTaskMutation();
  const [deleteTask, { isLoading: deleteLoader }] = useDeleteTaskMutation();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "PENDING" as TaskStatus,
  });

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const [confirmText, setConfirmText] = useState("");

  if (isError) {
    handleApiError(error);
  }

  const tasks = data?.responseObject ?? [];

  const openEditModal = (task: Task) => {
    setEditingTask(task);
    setFormData({
      title: task.title,
      status: task.status,
      description: task.description,
    });
    setEditModalOpen(true);
  };

  const openDeleteModal = (taskId: number) => {
    setDeleteTargetId(taskId);
    setConfirmText("");
    setDeleteModalOpen(true);
  };

  const handleModalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalSubmit = async () => {
    if (!editingTask) return;
    try {
      const response = await updateTask({
        id: editingTask.id,
        data: {
          title: formData.title,
          description: formData.description,
          status: formData.status,
        },
      }).unwrap();

      if (response.success) {
        toast.success("Task updated successfully!");
        setEditModalOpen(false);
        setEditingTask(null);
      }
    } catch (err) {
      handleApiError(err);
    }
  };

  const handleDelete = async () => {
    if (confirmText !== "delete my task" || !deleteTargetId) return;

    try {
      await deleteTask(deleteTargetId).unwrap();
      toast.success("Task deleted.");
      setDeleteModalOpen(false);
      setDeleteTargetId(null);
    } catch (err) {
      handleApiError(err);
    }
  };

  const renderButtonContent = (title: string, loader: boolean) =>
    loader ? <LoaderIcon width={20} height={20} /> : title;

  const filteredTasks =
    statusFilter === "all"
      ? tasks
      : tasks.filter((t) => t.status === statusFilter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by status:</label>
        <select
          className="border px-3 py-1 rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as TaskStatus | "all")}
        >
          <option value="all">All</option>
          <option value="PENDING">Pending</option>
          <option value="DONE">Done</option>
          <option value="IN_PROGRESS">In Progress</option>
        </select>
      </div>

      {filteredTasks.length === 0 && !isLoading ? (
        <div className="text-gray-500">No tasks available.</div>
      ) : isLoading ? (
        <div className="text-gray-500">Loading tasks...</div>
      ) : (
        <TaskTable
          tasks={filteredTasks}
          onUpdate={(task) => openEditModal(task)}
          onDelete={(id) => openDeleteModal(id)}
        />
      )}

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>

            <label className="block mb-2 font-medium">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleModalChange}
              className="border w-full px-3 py-2 mb-4 rounded"
            />

            <label className="block mb-2 font-medium">Description</label>
            <input
              name="description"
              value={formData.description}
              onChange={handleModalChange}
              className="border w-full px-3 py-2 mb-4 rounded"
            />

            <label className="block mb-2 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleModalChange}
              className="border w-full px-3 py-2 mb-4 rounded"
            >
              <option value="PENDING">Pending</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="DONE">Done</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="w-full rounded bg-blue-600 p-2 font-semibold text-center items-center justify-center flex text-white hover:bg-blue-700"
                disabled={updateLoader}
              >
                {renderButtonContent("Save Changes", updateLoader)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2 text-red-600">
              Confirm Task Deletion
            </h2>
            <p className="text-sm mb-4">
              To delete your task, type <strong>delete my task</strong> below:
            </p>
            <input
              type="text"
              className="w-full border p-2 rounded mb-4"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteModalOpen(false)}
                className="px-4 py-2 text-sm bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                disabled={confirmText !== "delete my task"}
                onClick={handleDelete}
                className={`px-4 py-2 text-sm rounded text-white ${
                  confirmText === "delete my task"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-300 cursor-not-allowed"
                }`}
              >
                {renderButtonContent("Delete", deleteLoader)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksView;
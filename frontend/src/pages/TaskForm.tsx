import React, { useState } from "react";
import { useCreateTaskMutation } from "../services/todo.service";
import { toast } from "sonner";
import { handleApiError } from "../lib/errorHandler";
import { LoaderIcon } from "../assets/svg/Icons";

const CreateTaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [extras, setExtras] = useState<string>("");
  const [error] = useState("");
  const [createTask, { isLoading }] = useCreateTaskMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let parsedExtras;

    try {
        parsedExtras = extras ? JSON.parse(extras) : undefined;
      } catch (error) {
        toast.error("Extras must be a valid JSON object");
        return;
    }

    try {
      const response = await createTask({
        title,
        description,
        extras: parsedExtras,
      }).unwrap();
      if (response.statusCode !== 201) {
        toast.success("Task created successfully!");
      }
    } catch (err) {
      console.error("Create Form failed", err);
      handleApiError(err);
    }
  };

  const renderButtonContent = () => {
    if (isLoading) {
      return <LoaderIcon width={20} height={20} className="text-center" />;
    }
    return "Create Task";
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <h1 className="text-2xl font-bold mb-6">Create New Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border p-2 rounded"
            placeholder="e.g., Fix dashboard bug"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full border p-2 rounded"
            placeholder="Details about the task"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Extras (JSON)</label>
          <textarea
            value={extras}
            onChange={(e) => setExtras(e.target.value)}
            rows={4}
            className="w-full border p-2 rounded font-mono"
            placeholder='e.g., {"tags": ["bug", "urgent"], "priority": "high"}'
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
            className="w-full rounded bg-blue-600 p-2 font-semibold text-center items-center justify-center flex text-white hover:bg-blue-700"

          disabled={isLoading}
        >
          {renderButtonContent()}
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;

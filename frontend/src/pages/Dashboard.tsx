// src/pages/Dashboard.tsx
import { useNavigate } from "react-router-dom";
import { BookIcon, CreateNewIcon, LoaderIcon } from "../assets/svg/Icons";
import { useGetTasksQuery } from "../services/todo.service";
import { handleApiError } from "../lib/errorHandler";

export default function Dashboard() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetTasksQuery();
  const actions = [
    {
      label: "View My Tasks",
      icon: <BookIcon />,
      route: "/tasks",
      bg: "bg-blue-600 hover:bg-blue-700",
    },
    {
      label: "Create New Task",
      icon: <CreateNewIcon />,
      route: "/create",
      bg: "bg-green-600 hover:bg-green-700",
    },
  ];

  if (isError) {
    handleApiError(error);
  }
  
  const tasks = data?.responseObject ?? [];

  const mockStats = {
    total: tasks.length,
    pending: tasks.filter((task) => task.status === "PENDING").length,
    inProgress: tasks.filter((task) => task.status === "IN_PROGRESS").length,
    done: tasks.filter((task) => task.status === "DONE").length,
  };

  return (
    <div className="min-h-screen bg-gray-100 md:flex md:space-x-4">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Dashboard Overview
        </h1>
        <h3 className="text-2xl font-medium text-gray-800 mb-3">
          Welcome Back
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-gray-500 text-sm">Total Tasks</h3>
            <p className="text-3xl font-semibold text-blue-600">
              {isLoading ? (
                <LoaderIcon width={36} className="mt-2" />
              ) : (
                mockStats.total
              )}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-gray-500 text-sm">Pending</h3>
            <p className="text-3xl font-semibold text-yellow-500">
              {isLoading ? (
                <LoaderIcon width={36} className="mt-2" />
              ) : (
                mockStats.pending
              )}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-gray-500 text-sm">In Progress</h3>
            <p className="text-3xl font-semibold text-purple-500">
              {isLoading ? (
                <LoaderIcon width={36} className="mt-2" />
              ) : (
                mockStats.inProgress
              )}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h3 className="text-gray-500 text-sm">Completed</h3>
            <p className="text-3xl font-semibold text-green-500">
              {isLoading ? (
                <LoaderIcon width={36} className="mt-2" />
              ) : (
                mockStats.done
              )}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            What would you like to do?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {actions.map(({ label, icon, route, bg }) => (
              <button
                key={label}
                onClick={() => navigate(route)}
                className={`rounded-lg text-white p-4 shadow flex items-center justify-center gap-2 ${bg}`}
              >
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

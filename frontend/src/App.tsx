import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from "./pages/Login";
import Signup from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import PrivateRouteWrapper from "./components/Global/PrivateWrapper";
import Layout from "./components/Global/Layout";
import TasksView from "./pages/TasksPage";
import CreateTaskForm from "./pages/TaskForm";
import ProfilePage from "./pages/ProfilePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadAuthFromLocalStorage } from "./state/Store/authSlice";
import type { AppDispatch } from "./state/store";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadAuthFromLocalStorage());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Main app layout routes */}
        <Route  path="/" element={<PrivateRouteWrapper component={ <Layout /> } />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<TasksView />} />
          <Route path="/create" element={<CreateTaskForm />} />
          <Route path="/profile" element={<ProfilePage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

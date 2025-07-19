// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import { login } from "../state/Store/authSlice";
import { LoaderIcon } from "../assets/svg/Icons";
import { handleApiError } from "../lib/errorHandler";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  console.log("User from Redux state:", user);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Registering user:", { email, password });

      const response = await loginUser({ email, password }).unwrap();

      localStorage.setItem("token", response.responseObject.token); // Save token if returned
      localStorage.setItem("user", JSON.stringify(response.responseObject.user)); // Save token if returned
      
      dispatch(login(response.responseObject)); // Set Redux state
      navigate("/"); // Redirect to home page
    } catch (err) {
      console.error("Registration failed", err);
      handleApiError(err);
    }
  };

  const renderButtonContent = () => {
    if (isLoading) {
      return <LoaderIcon width={20} height={20} className="text-center"/>;
    }
    return "Log In";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-xl"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="eg. johndoe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="eg. your_password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full rounded bg-blue-600 p-2 font-semibold text-center items-center justify-center flex text-white hover:bg-blue-700"

          disabled={isLoading}
        >
          {renderButtonContent()}
        </button>
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
}

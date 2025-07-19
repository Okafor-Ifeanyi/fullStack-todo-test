// src/pages/Signup.tsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../services/auth.service";
import { login } from "../state/Store/authSlice";
import { LoaderIcon } from "../assets/svg/Icons";
import { handleApiError } from "../lib/errorHandler";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [registerUser, { isLoading, isError }] = useRegisterMutation();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Registering user:", { name, email, password });

      const response = await registerUser({ name, email, password }).unwrap();

      localStorage.setItem("token", response.responseObject.token); // Save token if returned
      dispatch(login(response.responseObject)); // Set Redux state
        navigate("/"); // Redirect to home page
        console.log("Registration successful", response);
        
    } catch (err) {
      console.error("Registration failed", err);
      handleApiError(err);
    }
  };

  const renderButtonContent = () => {
    if (isLoading) {
      return <LoaderIcon width={20} height={20} className="text-center"/>;
    }

    return "Sign Up";
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-xl"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h2>

        <label htmlFor="email">Name</label>
        <input
          type="text"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="eg. John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="eg. john.doe@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="w-full rounded border border-gray-300 p-2"
          placeholder="eg. ********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full rounded bg-green-600 p-2 font-semibold text-center items-center justify-center flex text-white hover:bg-green-700"
          disabled={isLoading || isError}
        >
          {renderButtonContent()}
        </button>
        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
}

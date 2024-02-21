"use client";
import { useState, useRef } from "react";
const Login = () => {
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const signup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div>
      <form
        className={`flex flex-col items-center justify-center gap-y-4 my-2 ${
          loading ? `pointer-events-none opacity-60` : ``
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={usernameRef}
          type="text"
          placeholder="Username"
          className="bg-transparent ring-1 focus:ring-2 ring-primary-700 focus:ring-primary-300 outline-none px-2 py-3 rounded transition-all text-sm w-[240px] text-gray-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              passwordRef.current?.focus();
            }
          }}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          className="bg-transparent ring-1 focus:ring-2 ring-primary-700 focus:ring-primary-300 outline-none px-2 py-3 rounded transition-all text-sm w-[240px] text-gray-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowUp") {
              usernameRef.current?.focus();
            }
          }}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <button
          className="bg-primary-500 mt-2 hover:bg-primary-600 transition-all text-gray-800 font-semibold px-3 py-2 rounded"
          onClick={signup}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

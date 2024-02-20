"use client";

import { useState, useRef } from "react";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const fullnameRef = useRef(null);

  const signup = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div>
      <form
        className={`flex flex-col items-center justify-center gap-y-4 my-3 ${
          loading ? `pointer-events-none opacity-60` : ``
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={fullnameRef}
          type="text"
          placeholder="Full Name"
          className="bg-transparent ring-1 ring-primary-700 focus:ring-primary-300 outline-none px-2 py-3 rounded transition-all text-sm w-[240px] text-gray-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              usernameRef.current?.focus();
            } else if (e.key === "ArrowUp") {
              confirmPasswordRef.current?.focus();
            }
          }}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
        <input
          ref={usernameRef}
          type="text"
          placeholder="Choose a username"
          className="bg-transparent ring-1 ring-primary-700 focus:ring-primary-300 outline-none px-2 py-3 rounded transition-all text-sm w-[240px] text-gray-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              passwordRef.current?.focus();
            } else if (e.key === "ArrowUp") {
              fullnameRef.current?.focus();
            }
          }}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter a password"
          className="bg-transparent ring-1 ring-primary-700 focus:ring-primary-300 outline-none px-2 py-3 rounded transition-all text-sm w-[240px] text-gray-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              confirmPasswordRef.current?.focus();
            } else if (e.key === "ArrowUp") {
              usernameRef.current?.focus();
            }
          }}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <input
          ref={confirmPasswordRef}
          type="password"
          placeholder="Confirm password"
          className="bg-transparent ring-1 ring-primary-700 focus:ring-primary-300 outline-none px-2 py-3 rounded transition-all text-sm w-[240px] text-gray-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              fullnameRef.current?.focus();
            } else if (e.key === "ArrowUp") {
              passwordRef.current?.focus();
            }
          }}
          onChange={(e) =>
            setInputs({ ...inputs, confirmPassword: e.target.value })
          }
        />
        <button
          className="bg-primary-500 hover:bg-primary-600 transition-all text-gray-800 font-semibold px-3 py-2 rounded"
          onClick={signup}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;

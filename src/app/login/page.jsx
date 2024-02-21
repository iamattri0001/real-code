import React from "react";
import Login from "../../components/Login";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-background-900/60 p-10 flex flex-col items-center justify-center gap-y-5 rounded-lg">
      <h2 className="text-3xl bg-gradient-to-br from-primary-500 to-accent-500 bg-clip-text text-transparent font-bold">
        Login with credentials
      </h2>
      <Login />
      <p className="text-center text-sm text-gray-300">
        Dont have an account?{" "}
        <Link href={"/sign-up"} className="text-accent-300">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Page;

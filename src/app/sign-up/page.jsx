import Signup from "../../components/Signup";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-background-900/60 p-10 flex flex-col items-center justify-center gap-y-5 rounded-lg">
      <h2 className="text-3xl bg-gradient-to-br from-primary-500 to-accent-500 bg-clip-text text-transparent font-bold">
        Create a new account
      </h2>
      <Signup />
      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="text-accent-300">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Page;

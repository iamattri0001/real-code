import { FaCodeBranch, FaBell } from "react-icons/fa";
const Nav = () => {
  return (
    <nav className="flex py-3 justify-between absolute top-0 w-full">
      <div className="flex items-center justify-center space-x-2">
        <FaCodeBranch className="text-2xl text-secondary-300" />
        <span className="text-lg bg-gradient-to-br from-secondary-300 to-primary-300 bg-clip-text text-transparent font-bold">
          RealCode
        </span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search project"
          className="text-sm p-2 w-[340px] rounded bg-background-900 outline-none ring-1 focus:ring-accent-600 transition-all text-text-100/80 placeholder:text-xs selection:bg-accent-700"
        />
        <FaBell className="text-2xl text-text-600 cursor-pointer hover:text-text-500 transition-all" />
        <img
          src="https://avatar.iran.liara.run/public/boy?username=mr.random"
          className="w-10"
        />
      </div>
    </nav>
  );
};

export default Nav;

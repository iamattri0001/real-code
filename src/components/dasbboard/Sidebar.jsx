"use client";
import { FaCode } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Sidebar = ({}) => {
  const pathname = usePathname();
  let route = pathname.replace("/dashboard", "");
  if (route === "") {
    route = "/";
  }
  
  return (
    <div className="bg-background-900 min-h-[40vh] top-[50%] left-2 -translate-y-1/2 fixed px-3 z-10 justify-center flex flex-col space-y-10 rounded-full">
      <Link href={"/dashboard"}>
        <FaHome
          className={`text-2xl transition-transform ${
            route === "/"
              ? ` text-accent-400`
              : `text-text-500 hover:text-text-600`
          }`}
        />
      </Link>
      <Link href={"/dashboard/teams"}>
        <RiTeamFill
          className={`text-2xl transition-transform ${
            route === "/teams"
              ? ` text-accent-400`
              : `text-text-500 hover:text-text-600`
          }`}
        />
      </Link>
      <Link href={"/dashboard/projects"}>
        <FaCode
          className={`text-2xl transition-transform ${
            route === "/projects"
              ? ` text-accent-400`
              : `text-text-500 hover:text-text-600`
          }`}
        />
      </Link>
      <Link href={"/dashboard/invite"}>
        <IoPersonAdd
          className={`text-2xl transition-transform ${
            route === "/invite"
              ? ` text-accent-400`
              : `text-text-500 hover:text-text-600`
          }`}
        />
      </Link>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaTv , FaTools } from "react-icons/fa";

const Sidebar = () => {

  const [visibility, SetVisibility] = useState("hidden");
  const router = useRouter();

  return (
    <React.Fragment>
      <aside id="sidebar">
        <div className="sticky top-0 left-0 h-screen flex flex-col justify-start shadow-xl bg-white py-5 px-8 space-y-5">
          <div className="text-center mt-2">
              <h1 className="text-lg font-bold mb-1">Admin Panel</h1>
          </div>
          <hr />
          <ul className="flex flex-col w-full mb-auto space-y-7">

            <li>
              <h1 className="text-sm font-semibold text-slate-600">Important</h1>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link href={"/admin/dashboard"} className="flex items-center justify-start space-x-3 hover:text-ascent">
                <FaTv size={18} className="opacity-50" /><span className="font-medium tracking-widest text-sm">Dashboard</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link href={"/admin/setting"} className="flex items-center justify-start space-x-3 hover:text-ascent">
                <FaTools size={18} className="opacity-50" /><span className="font-medium tracking-widest text-sm">Settings</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link href={"/admin/dashboard"} className="flex items-center justify-start space-x-3 hover:text-ascent">
                <FaTools size={18} className="opacity-50" /><span className="font-medium tracking-widest text-sm">Settings</span>
              </Link>
            </li>

            {/* Sidebar Item */}
            <li>
              <Link href={"/admin/dashboard"} className="flex items-center justify-start space-x-3 hover:text-ascent">
                <FaTools size={18} className="opacity-50" /><span className="font-medium tracking-widest text-sm">Settings</span>
              </Link>
            </li>

          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Sidebar;
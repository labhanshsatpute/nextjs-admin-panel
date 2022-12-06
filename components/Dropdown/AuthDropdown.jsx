import React, { useState } from "react";
import { TbLogout, TbHeadset, TbSettings } from "react-icons/tb";

const AuthDropdown = () => {

  const [state, setState] = useState('hidden');

  const handleOpenDropdown = (event) => {
    setState('block');
  }

  const handleCloseDropdown = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setState('hidden');  
    }
  }

  return (
    <React.Fragment>
      <div className="relative" onClick={(event) => handleOpenDropdown(event)} onBlur={(event) => handleCloseDropdown(event)}>
        <div>
          <button type="button" className="h-[60px] w-[60px] flex items-center justify-center overflow-hidden rounded-full border-4 border-white">
            <img src="/profile.jpg" alt="user-profile" className="h-full w-full" />
          </button>
        </div>
        <div className={`absolute ${state} border right-0 z-10 mt-2 w-auto origin-top-right rounded bg-white border-slate-300 shadow-lg px-5 py-4 space-y-3 text-left`}>

          <button className="flex items-center justify-start w-auto space-x-2">
            <div className="w-[50px] h-[50px] rounded-full border overflow-hidden">
              <img src="/profile.jpg" alt="user-profile" className="h-full w-full" />
            </div>
            <div className="whitespace-nowrap text-left">
              <h1 className="font-semibold text-base">Labhansh Satpute</h1>
              <h1 className="text-slate-500 text-xs">labansh25@gmail.com</h1>
            </div>
          </button>

          <hr />

          <ul className="flex flex-col space-y-3">
            <li><a href="#" className="text-sm font-medium text-slate-700 hover:text-ascent whitespace-nowrap flex items-center justify-start"> <TbSettings size={20} className="mr-2 mt-[-1px]" />Account Settings</a></li>
            <li><a href="#" className="text-sm font-medium text-slate-700 hover:text-ascent whitespace-nowrap flex items-center justify-start"> <TbHeadset size={20} className="mr-2 mt-[-1px]" />Customer Support</a></li>
            <li><a href="#" className="text-sm font-medium text-slate-700 hover:text-ascent whitespace-nowrap flex items-center justify-start"> <TbLogout size={20} className="mr-2 mt-[-1px]" />Logout</a></li>
          </ul>

        </div>
      </div>
    </React.Fragment>
  );
}

export default AuthDropdown;
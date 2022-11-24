import React, { useState } from "react";

const TableDropdown = () => {

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
          <button type="button" className="inline-flex w-fit justify-center itce rounded border bg-ascent text-white px-4 py-2 text-xs font-medium">Options</button>
        </div>
        <div className={`absolute ${state} border right-0 z-10 mt-2 w-fit origin-top-right rounded bg-slate-50 shadow-lg px-2 py-3`}>
          <ul className="flex flex-col space-y-3">
            <li><a href="#" onClick={() => console.log('Clicked on link')} className="text-xs font-medium text-slate-700 hover:text-ascent px-3 py-2 whitespace-nowrap">Account Information</a></li>
            <li><a href="#" className="text-xs font-medium text-slate-700 hover:text-ascent px-3 py-2 whitespace-nowrap">Account Information</a></li>
            <li><a href="#" className="text-xs font-medium text-slate-700 hover:text-ascent px-3 py-2 whitespace-nowrap">Account Information</a></li>
            <li><a href="#" className="text-xs font-medium text-slate-700 hover:text-ascent px-3 py-2 whitespace-nowrap">Account Information</a></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TableDropdown;
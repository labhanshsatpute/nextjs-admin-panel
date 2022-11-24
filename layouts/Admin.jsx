import React from "react";
import Sidebar from "../components/Sidebar";

const Admin = ({ children }) => {
  return (
    <React.Fragment>
      <main className="flex">
        <Sidebar/>
        <section id="section">
          <div className="h-[40vh] w-full absolute bg-slate-800 z-10"></div>
          <div className="relative z-20 md:p-10 sm:p-5">
            { children }
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Admin;
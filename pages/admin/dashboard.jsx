import React from "react";
import Admin from "../../layouts/Admin";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className="font-bold text-4xl text-white">Dashboard</h1>
      </div>
      <div className="flex flex-col mt-10">

        <figure className="shadow-xl rounded-md overflow-hidden">
          <div className="py-4 px-6 bg-white flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-lg mb-1">Designers</h1>
              <p className="text-xs text-slate-500">All registred designers list</p>
            </div>
          </div>
          <div className="p-3 bg-slate-100">

          </div>
        </figure>
        
      </div>
    </React.Fragment>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
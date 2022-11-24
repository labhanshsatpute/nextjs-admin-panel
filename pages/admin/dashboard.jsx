import React, { useEffect, useState } from "react";
import Admin from "../../layouts/Admin";

import DataTable from 'react-data-table-component';

const Dashboard = () => {

  const columns = [
      {
          name: 'Type',
          selector: row => row.type,
          sortable: true,
          cell:(row) => <button onClick={() => alert('dsfsd')} >{row.type}</button>,
      },
      {
          name: 'Login',
          selector: row => row.login,
          sortable: true,
      },
      {
          name: 'Node Id',
          selector: row => row.node_id,
          sortable: true,
      },
  ];

  const [users,setUsers] = useState(null);

  useEffect(() => {
    try {
      fetch('https://api.github.com/users')
      .then((response) => { 
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
    } catch (error) {
      console.error(error);
    }
  },[]);

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
          <div className="p-0 bg-slate-100 border-y">
          { (users !== null) ? <DataTable columns={columns} data={users} pagination /> :null }
          </div>
        </figure>
        
      </div>
    </React.Fragment>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
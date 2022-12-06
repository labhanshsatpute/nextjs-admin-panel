import React, { useEffect, useState } from "react";
import Admin from "../../layouts/Admin";

import DataTable from 'react-data-table-component';
import TableDropdown from "../../components/Dropdown/TableDropdown";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AuthDropdown from "../../components/Dropdown/AuthDropdown";

const Dashboard = () => {

  const crumbs = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard'
    },
    {
      title: 'Designer',
      path: '/admin/dashboard'
    }
  ]

  const columns = [
      {
          name: 'Type',
          selector: row => row.type,
          sortable: true,
      },
      {
          name: 'Profile',
          cell: (row) => <img src={row.avatar_url} alt="image" className="h-14 w-14 p-1 rounded-full" />
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
      {
          name: 'Action',
          cell:(row) => <TableDropdown />,
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-white mb-3">Dashboard</h1>
          <Breadcrumb crumbs={crumbs} />
        </div>
        <AuthDropdown/>
      </div>
      <div className="flex flex-col md:mt-10 sm:mt-5">

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
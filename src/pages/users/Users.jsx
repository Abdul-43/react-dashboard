import DataTable from "../../components/dataTable/DataTable";
import "./user.scss";
import { userRows } from "../../data";
import { useState } from "react";
import AddUser from "../../components/add/Add";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="avatar">
          <img src={params.row.img || "./noavatar.png"} alt="" />
        </div>
      );
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 190,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 110,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    type: "number",
    width: 110,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
  {
    field: "verified",
    headerName: "Verified",
    type: "boolean",
    widht: 100,
  },
];

function Users() {

  const [open,setOpen]=useState(false)
  return (
    <div className="userTable">
      <div className="title">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new users</button>
      </div>
      <div style={{ width: '100%' }}> 
        <DataTable slug="user" columns={columns} rows={userRows} />
        {open && <AddUser setOpen={setOpen} columns={columns}/>}
      </div>
    </div>
  );
}

export default Users;

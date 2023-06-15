import React, { useState } from 'react'
import "./userlist.css"
import {DataGrid} from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom'

function Userlist() {

    const [data, setData] = useState(userRows)

    const handleDelete = (rowId) => {
        setData(data.filter(row=>row.id!==rowId))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 250, renderCell: (params)=>{
            return (
                <div className="userListUser">
                    <img src={params.row.avatar} alt="" className="userListImg" />
                    {params.row.userName}
                </div>
            )
        } },
        { field: 'email', headerName: 'E-mail', width: 200 },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'transaction', headerName: 'Transaction', width: 130 },
        { field: 'action', headerName: 'Action', width: 160, renderCell: (params)=>{
            return (
                <div className="userListAction">
                    <Link to={"/user/"+ params.row.id }>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                </div>
            )
        } },
      ];
      

    return (
        <div className="userList">
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={6}
                rowsPerPageOptions={[6]}
                checkboxSelection
            />       
        </div>
    )
}

export default Userlist

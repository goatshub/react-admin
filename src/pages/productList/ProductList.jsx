import React, { useState } from 'react'
import './productList.css'
import {DataGrid} from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom'

export default function ProductList() {
    const [data, setData] = useState(productRows)
    const handleDelete = (rowId) => {
        setData(data.filter(row=>row.id!==rowId))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'product', headerName: 'Product', width: 250, renderCell: (params)=>{
            return (
                <div className="productListItem">
                    <img src={params.row.img} alt="" className="productListImg" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'action', headerName: 'Action', width: 160, renderCell: (params)=>{
            return (
                <div className="userListAction">
                    <Link to={"/product/"+ params.row.id }>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)} />
                </div>
            )
        } },
      ];



    return (
        <div className="productList">
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

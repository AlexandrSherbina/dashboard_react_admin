import React, { useState } from 'react';
import './products.scss';
import DataTable from './../../components/dataTable/DataTable';
import Add from './../../components/add/Add';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../data';


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    type: "string",
    width: 250,      
  },
  {
    field: "color",
    headerName: "Color",
    type: "string",
    width: 150  
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 200
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200  
  },
  {
    field: "createdAt",
    headerName: "Created At",  
    type: 'string',
    width: 200     
  },
  {
    field: "inStock",
    headerName: "In Stock",
    type: "boolean",
    width: 150
  }
 
];
const Products = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="products" >
      <div className="info">
        <h1>Users</h1>
        <button  onClick={()=>setOpen(true)}>Add New Products</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products}></DataTable>
      {open && <Add slug="product" columns={columns} setOpen={setOpen}/>}
    </div>
  )  
}


export default Products

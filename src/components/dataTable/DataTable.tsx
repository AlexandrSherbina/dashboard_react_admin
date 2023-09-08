import React from "react";
import {
  DataGrid,
  GridToolbar,
  GridColDef, 
} from "@mui/x-data-grid";
import {
  QueryClient,
  useMutation
} from '@tanstack/react-query';
import "./dataTable.scss";
import { Link } from 'react-router-dom';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const queryClient = new QueryClient();

    const mutation = useMutation({
      mutationFn: (id: number) => {
        return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
              method: "delete"            
            })
      },
      onSuccess:  () => {
        queryClient.invalidateQueries([`all${props.slug}`])
      }
    })

    const handleDelete =(id:number) => {
      //dele the item
      mutation.mutate(id)        
    }

    const actionColumn: GridColDef =  {
        field: "actions",
        headerName: "Actions",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="action">
             <Link to={`/${props.slug}/${params.row.id}`}>
                <img src="/view.svg" alt=""/>
             </Link>        
              <div className="delete" onClick={() => handleDelete(params.row.id)}>
                <img src="/delete.svg" alt="" />
              </div>
            </div>
          );
        },
      };


  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;

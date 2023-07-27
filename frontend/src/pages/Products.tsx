import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import Card from "@mui/material/Card" ;
import SortIcon from "@mui/material/IconButton/IconButton";

function Products() {

    const data = [
        {
          id: 1,
          name: "Nguyễn Đại Tú",
          dob: "2001",
          position: "Boss"
        },
        {
          id: 2,
          name: "Trần Văn Tú",
          dob: "2001",
          position: "Writer"
        },
        {
          id: 3,
          name: "Đỗ Bá Toàn",
          dob: "2001",
          position: "Manager"
        },
        
      ];

      const columns = [
        {
            name: "No.",
            selector: "id",
            sortable: true
          },
        {
          name: "Name",
          selector: "name",
          sortable: true
        },
        {
          name: "Date of Birth",
          selector: "dob",
          sortable: true
        },
        {
          name: "Position",
          selector: "position",
          sortable: true
        }
      ];
  return (
    <div className=" min-h-screen bg-gray-100 text-gray-900">
      <Card className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <DataTable className=" mt-6 hover: bg-slate-500"
          title="Employess"
          columns={columns}
          data={data}
          defaultSortField="name"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </Card>
    </div>
  )
}

export default Products

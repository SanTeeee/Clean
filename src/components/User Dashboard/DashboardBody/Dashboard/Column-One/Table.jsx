import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      setData(
        response.data.users.map((user) => ({
          id: "#" + user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          age: user.age,
          country: user.address?.country || "Unknown",
          status: user.isVerified ? "Verified" : "Unverified",
        }))
      );
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      { header: "Order ID", accessorKey: "id" },
      { header: "Name", accessorKey: "name" },
      { header: "Email", accessorKey: "email" },
      { header: "Age", accessorKey: "age" },
      { header: "Country", accessorKey: "country" },
      { header: "Status", accessorKey: "status" },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => console.log("Row clicked:", row.original),
        sx: {
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      })}
      muiTableBodyProps={{
        sx: {
          "& td": {
            padding: "10px",
            fontSize: "14px",
          },
        },
      }}
      muiTableHeadRowProps={{
        sx: {
          "& th": {
            backgroundColor: "#e1ecfa",
            fontWeight: "bold",
            fontSize: "16px",
          },
        },
      }}
      initialState={{
        pagination: { pageSize: 10 },
      }}
    />
  );
};

export default Table;

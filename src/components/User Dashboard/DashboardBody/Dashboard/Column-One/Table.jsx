import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

const Table = ({ selectedUser, setSelectedUser }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setData(
          response.data.users.map((user) => ({
            id: "#" + user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            age: user.age,
            country: user.address?.country || "Unknown",
            status: user.isVerified ? "Verified" : "Unverified",
            description: user, // Store full user object for detailed display
          }))
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
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
  const handleRowClick = (event) => {
    // Access the row data directly from the event target (row)
    const row = event.currentTarget;
    setSelectedUser(
      selectedUser && selectedUser.id === row.row.original.description.id
        ? null
        : row.row.original.description
    );
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <MaterialReactTable
          columns={columns}
          data={data}
          muiTableBodyRowProps={({ row }) => ({
            onClick: handleRowClick, // No arguments needed, handleRowClick will access the row data internally
            sx: {
              cursor: "pointer", // Add cursor style for clickability
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
      )}
    </div>
  );
};

export default Table;

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

  const handleRowClick = (row) => {
    // Toggle the selected user: clear if the same row is clicked again
    setSelectedUser(
      selectedUser && selectedUser.id === row.original.description.id
        ? null
        : row.original.description
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
            onClick: () => handleRowClick(row), // Call handleRowClick here
            sx: {
              cursor: "pointer", // Pointer cursor on hover
              "&:hover": {
                backgroundColor: "#f5f5f5", // Highlight row on hover
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
      )}
    </div>
  );
};

export default Table;

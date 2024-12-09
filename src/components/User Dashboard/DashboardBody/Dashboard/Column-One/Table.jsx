import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

const Table = ({ selectedUser, setSelectedUser, collapse }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://dummyjson.com/users";
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
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
      {
        header: "Order id",
        accessorKey: "id",
        size: 20,
      },
      {
        header: "Name",
        accessorKey: "name",
        size: 100,
      },
      {
        header: "Email",
        accessorKey: "email",
        size: 150,
      },
      {
        header: "Age",
        accessorKey: "age",
        size: 50,
      },
      {
        header: "Country",
        accessorKey: "country",
        size: 100,
      },
      {
        header: "Status",
        accessorKey: "status",
        size: 75,
      },
    ],
    []
  );

  const handleRowClick = (row) => {
    console.log(row);
    // Toggle the selected user: clear if the same row is clicked again
    setSelectedUser(
      selectedUser && selectedUser.id === row.original.description.id
        ? null
        : row.original.description
    );
  };

  return (
    <div className={`table ${collapse ? "collapse" : ""}`}>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnOrdering
            muiTableContainerProps={{
              sx: {
                maxHeight: "50vh",
                overflow: "auto",
              },
            }}
            muiTableBodyRowProps={({ row }) => ({
              onClick: () => {
                handleRowClick(row); // Call your existing row click handler
              },
              sx: {
                cursor: "pointer", // Make the row clickable
                "&:hover": {
                  backgroundColor: "#e1ecfa", // Add hover effect for better UX
                },
              },
            })}
            muiTableBodyProps={{
              sx: {
                "& td": {
                  padding: "15px",
                  fontSize: "13px",
                  cursor: "pointer", // Add pointer cursor for clickable rows
                },
              },
            }}
            initialState={{
              pagination: {
                pageSize: 5,
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default Table;

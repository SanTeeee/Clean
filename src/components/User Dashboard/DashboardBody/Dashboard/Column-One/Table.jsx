import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

const Table = ({ selectedUser, setSelectedUser, collapse }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
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
    // Toggle the selected user: clear if the same row is clicked again
    setSelectedUser(
      selectedUser && selectedUser.id === row.original.description.id
        ? null
        : row.original.description
    );
  };
  console.log(data);

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
            // muiTableContainerProps={{
            //   sx: {
            //     overflow: "auto",
            //   },
            // }}
            muiTableBodyRowProps={({ row }) => ({
              onClick: () => {
                handleRowClick(row); // Call your existing row click handler
              },
              sx: {
                cursor: "pointer", // Make the row clickable
              },
            })}
            muiTableHeadRowProps={{
              sx: {
                "& th": {
                  backgroundColor: "#e1ecfa", // Change this to your desired color
                  // Adjust text color for better contrast
                  fontWeight: "bold",
                  fontSize: "14px",
                  // Optional: align text to center
                },
              },
            }}
            initialState={{
              pagination: {
                pageSize: 10,
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default Table;

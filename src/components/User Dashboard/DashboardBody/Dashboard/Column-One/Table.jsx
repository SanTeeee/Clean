import React, { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import axios from "axios";

const Table = () => {
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
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.email,
            age: user.age,
            country: user.address?.country || "Unknown",
            status: user.isVerified ? "Verified" : "Unverified",
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

  // Handle editing row values
  const handleSaveRow = async ({ exitEditingMode, row, values }) => {
    try {
      // Update the specific row's data
      const updatedData = data.map((item) =>
        item.id === row.original.id ? { ...item, ...values } : item
      );
      setData(updatedData);

      // Simulate a server update
      await axios.put(`https://dummyjson.com/users/${row.original.id}`, values);
    } catch (error) {
      console.error("Failed to save changes", error);
    } finally {
      exitEditingMode(); // Close edit mode
    }
  };

  return (
    <div style={{ padding: "1rem 0" }} className="table">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <MaterialReactTable
          columns={columns}
          data={data}
          enableClickToCopy
          enableColumnOrdering
          enableEditing
          editingMode="modal" // Optional: Use "cell", "row", or "modal" editing modes
          onEditingRowSave={handleSaveRow}
          muiTableContainerProps={{
            sx: {
              maxHeight: "50vh",
              overflowX: "hidden",
            },
          }}
          muiTableBodyProps={{
            sx: {
              "& td": {
                padding: "4px 8px",
                fontSize: "0.875rem",
              },
            },
          }}
          muiTableHeadCellProps={{
            sx: {
              padding: "6px 10px",
              fontSize: "0.875rem",
            },
          }}
          muiTablePaperProps={{
            sx: {
              width: "100%",
              overflow: "hidden",
            },
          }}
          muiTableProps={{
            sx: {
              "& .MuiTableRow-root": {
                height: "50px",
              },
            },
          }}
          initialState={{
            pagination: {
              pageSize: 5,
            },
          }}
        />
      )}
    </div>
  );
};

export default Table;

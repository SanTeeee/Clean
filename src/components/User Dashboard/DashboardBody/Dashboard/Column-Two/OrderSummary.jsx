import React from "react";

const OrderSummary = ({ selectedUser }) => {
  return (
    <div className="order-summary">
      <h2>Order-Summary</h2>
      {selectedUser && (
        <div>
          {selectedUser && ( // Render selected user details
            <div
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                border: "2px solid lightgray",
                borderRadius: "5px",
              }}
            >
              <h3>User Details</h3>
              <p>
                <strong>ID:</strong> {selectedUser.id}
              </p>
              <p>
                <strong>Name:</strong> {selectedUser.firstName}
                {selectedUser.lastName}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Age:</strong> {selectedUser.age}
              </p>
              <p>
                <strong>Country:</strong>{" "}
                {selectedUser.address?.country || "Unknown"}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {selectedUser.isVerified ? "Verified" : "Unverified"}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Company:</strong> {selectedUser.company?.name}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;

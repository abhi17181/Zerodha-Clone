import React from "react";

const chargesData = [
  { type: "Online account", charge: "FREE", isFree: true },
  { type: "Offline account", charge: "FREE", isFree: true },
  { type: "NRI account (offline only)", charge: "₹ 500" },
  {
    type: "Partnership, LLP, HUF, or Corporate accounts (offline only)",
    charge: "₹ 500",
  },
];

function Brokerage() {
  return (
    <div className="container" style={{ maxWidth: "1100px" }}>

      <div className="row mt-5">

        <div className="col-12 p-4">

          {/* Heading */}
          <h2 className="text-muted">
            Charges for account opening
          </h2>

          {/* Table */}
          <div className="table-responsive">
            <table className="table align-middle" style={{ border: "none" }}>
              
              <thead>
                <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                  <th style={{ color: "#6c757d", fontWeight: "500" }}>
                    Type of account
                  </th>
                  <th
                    className="text-end"
                    style={{ color: "#6c757d", fontWeight: "500" }}
                  >
                    Charges
                  </th>
                </tr>
              </thead>

              <tbody>
                {chargesData.map((item, index) => (
                  <tr
                    key={index}
                    style={{ borderBottom: "1px solid #f1f1f1" }}
                  >
                    <td style={{ padding: "16px 0" }}>{item.type}</td>

                    <td className="text-end" style={{ padding: "16px 0" }}>
                      {item.isFree ? (
                        <span
                          style={{
                            backgroundColor: "#28a745",
                            color: "white",
                            fontSize: "12px",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            fontWeight: "500",
                          }}
                        >
                          FREE
                        </span>
                      ) : (
                        item.charge
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Brokerage;
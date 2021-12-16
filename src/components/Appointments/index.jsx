import React from "react";

import "./index.css";

const Appointments = ({ selected, data }) => {
  return (
    <div className="appointments-wrap">
      {selected && (
        <div className="header">
          <h1>
            Dr. {selected.lastName} {selected.firstName}
          </h1>
          <span>{selected.email}</span>
        </div>
      )}
      <div className="appointments-table">
        <table>
          <thead>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
            <th>Kind</th>
          </thead>
          <tbody>
            {data &&
              data.map((el, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{el.name}</td>
                  <td>{el.time}</td>
                  <td>{el.kind}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;

import React from "react";

import "./index.css";

const Physicians = ({ data, selected, setSelected }) => {
  return (
    <div className="physician-wrap">
      <div className="header-title">notable</div>
      <div className="physicians-list">
        <p>Physicians</p>
        <ul>
          {data &&
            data.map((el) => (
              <li
                key={`physician-${el.id}`}
                className={`${selected && selected.id === el.id ? "active" : ""}`}
                onClick={() => setSelected(el)}
              >
                {el.firstName}, {el.lastName}
              </li>
            ))}
        </ul>
      </div>
      <div className="action">
        <button type="button">Logout</button>
      </div>
    </div>
  );
};

export default Physicians;

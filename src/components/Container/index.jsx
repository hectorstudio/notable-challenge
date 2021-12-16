import React, { useState, useEffect } from "react";

import Physicians from "../Physicians";
import Appointments from "../Appointments";

import "./index.css";

const Container = () => {
  const [physicians, setPhysicians] = useState([]);
  const [selectedPhysic, setSelected] = useState();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/physicians")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setPhysicians(data);
          setSelected(data[0]);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedPhysic) {
      fetch(`http://localhost:9000/appointments/${selectedPhysic.id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            setAppointments(data);
          }
        });
    }
  }, [selectedPhysic])

  console.log(appointments);

  return (
    <div className="container-wrap">
      <Physicians
        data={physicians}
        selected={selectedPhysic}
        setSelected={setSelected}
      />
      <Appointments
        selected={selectedPhysic}
        data={appointments}
      />
    </div>
  );
};

export default Container;

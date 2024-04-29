import React, { useState, useEffect } from 'react';

function RegisteredAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchAppointments();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  const fetchAppointments = async () => {
    try {
      // Example API endpoint to fetch booked appointments
      const url = "http://localhost:8080/appointment/all";
      const response = await fetch(url);
      const data = await response.json();

      // Assuming the API returns an array of booked appointments
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div className='full-height'>
      <div className='registered-appointments-content'>
      <center>
        <table border="1">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Parent</th>
              <th>Parent Name</th>
              <th>parent Phoneno</th>
              <th>Counsellor ID</th>
              <th>Councellor Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.studentId}</td>
                <td>{appointment.studentName}</td>
                <td>{appointment.parentGender}</td>
                <td>{appointment.parentname}</td>
                <td>{appointment.parentphoneno}</td>
                <td>{appointment.counsellorId}</td>
                <td>{appointment.counsellorname}</td>
                <td>{appointment.date}</td>
              </tr>
            ))}
          </tbody>
         
        </table>
        </center>
      </div>
    </div>
  );
}

export default RegisteredAppointments;

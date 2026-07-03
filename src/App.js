import React, { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");

  function submitForm() {
    alert(
      "Student Registered Successfully!\n\n" +
      "Name: " + name +
      "\nRoll No: " + rollNo +
      "\nCourse: " + course
    );
  }

  return (

    <div className="container">

      <h1>Student Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Roll Number"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={submitForm}>
        Register
      </button>

      <div className="details">

        <h2>Student Details</h2>

        <p><b>Name :</b> {name}</p>

        <p><b>Roll No :</b> {rollNo}</p>

        <p><b>Course :</b> {course}</p>

      </div>

    </div>

  );

}

export default App;
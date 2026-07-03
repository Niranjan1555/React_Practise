<<<<<<< HEAD
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
=======
import React,{useState} from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>


    </div>
  );
}

export default App;


>>>>>>> a899fcd7fd8008ca8d6b6da34099d2497c659221

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7b43cdd32db8c7ca8b6144f236643ff55fd97d59
import React, { useState } from "react";
import "./App.css";

function App() {
<<<<<<< HEAD
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="container">
      <h1>React Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>
        <button onClick={clear}>Clear</button>
      </div>

      <h2>Result: {result}</h2>
=======

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


>>>>>>> 7b43cdd32db8c7ca8b6144f236643ff55fd97d59
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;


>>>>>>> a899fcd7fd8008ca8d6b6da34099d2497c659221
>>>>>>> 7b43cdd32db8c7ca8b6144f236643ff55fd97d59

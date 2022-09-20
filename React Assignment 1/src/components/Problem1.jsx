import React from "react";
import { useState } from "react";
import "../css/Problem1.css";

export default function Problem1() {
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [bmi,setBmi] = useState(0)
    const [range,setRange] = useState("")
    const [message,setMessage] = useState("")

    function calculateBMI(e) {
        e.preventDefault()
        let tmpBmi = weight/((height/100)*(height/100))
        tmpBmi = tmpBmi.toFixed(2)
        setBmi(tmpBmi)

        // console.log(tmpBmi)
        if(tmpBmi <= 18.4){
          setMessage("Underweight")
        }
        else if(tmpBmi > 18.4 && tmpBmi <= 24.9 ){
          setMessage("Normal")
        }
        else if(tmpBmi >= 25.0 && tmpBmi <= 39.9){
          setMessage("Overweight")
        }
        else if (tmpBmi >= 40.0){
          setMessage("Obese")
        } else {
          setMessage("")
        }
        setRange("63.32 kg - 85.22 kg")
    }

  return (
    <div className="main">
        <header className="bmi-header">BMI Calculator</header>
      <form onSubmit={calculateBMI}>
        <div className="mb-3">
          <label htmlFor="height" className="form-label">
            Enter your height (cm)
          </label>
          <input value={height} onChange={(e)=>setHeight(e.target.value)} required type="number" className="form-control" id="height" />
        </div>
        <div className="mb-3">
          <label htmlFor="weight" className="form-label">
            Enter your weight (kg)
          </label>
          <input value={weight} onChange={(e)=>setWeight(e.target.value)} required type="number" className="form-control" id="weight" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
      <div className="result">
        <div>Your BMI is - {bmi}</div>
        <div>Your suggested weight range is between {range}</div>
        <div>Your in a {message} weight range</div>
      </div>
    </div>
  );
}

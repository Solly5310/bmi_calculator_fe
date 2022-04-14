import React, {useState} from "react";
import axios from "axios";

const MetricTab = () => {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(0);


const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
  let weight = parseInt(e.target.value)
  console.log(weight)
  setWeight(weight)
}

const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
  let height = parseInt(e.target.value)
  setHeight(height)
}


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log(e)
    //console.log(e.currentTarget)
    
    let url = `http://52.64.17.31:5000/weight/metric?weight=${weight}&height=${height}`
    
    const {data} = await axios.get(url)
    const bmi = data.bmi
    setBMI(bmi)
  }



  return (
    <div className="FirstTab">
      <p>Calculate BMI</p>
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <div className="inputs">
            <div className="i">
              <label id ="weight">Weight (kg):</label>
            </div>
            <input className = "measureInput" onChange={handleWeightChange} type="number" min="1" max="635"/>
          </div>
          <div className="inputs">
          <div className="i">
            <label>Height (cm):</label>
          </div>
            <input className = "measureInput" onChange={handleHeightChange} id="height" type="number" min="1" max="272"/>
          </div>
          <input className="submitButton" type="submit" value="submit"></input>
        </form>
      </div>
      {bmi > 0 ? <p>BMI: {bmi}</p> : ""}
    </div>
  );
};
export default MetricTab;
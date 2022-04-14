import React, {useState} from "react";
import axios from "axios";

const UsTab = () => {

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
    
    let url = `http://52.64.17.31:5000/weight/us?weight=${weight}&height=${height}`
    
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
              <label id ="weight">Weight (lb):</label>
            </div>
            <input className = "measureInput" onChange={handleWeightChange} type="number" min="1" max="1400"/>
          </div>
          <div className="inputs">
          <div className="i">
            <label>Height (in):</label>
          </div>
            <input className = "measureInput" onChange={handleHeightChange} id="height" type="number" min="1" max="107"/>
          </div>
          <input className="submitButton" type="submit" value="submit"></input>
        </form>
      </div>
      {bmi > 0 ? <p>Your BMI: {bmi}</p> : ""}
    </div>
  );
};
export default UsTab;
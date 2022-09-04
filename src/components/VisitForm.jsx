import React, { useState } from "react";
import ReactDOM from "react-dom";
import AdminsNavBar from "./AdminsNavBar";
import { useParams } from "react-router-dom";



function VisitForm(props) {

  const [date, setDate] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [fatLevel, setFatLevel] = useState();
  const [muscleLevel, setMuscleLevel] = useState();
  const [message, setMessage] = useState("");

  const params = useParams()
  const userName = params.userPath;




  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/users/" + props.userName , {
        method: "POST",
        headers: {"Content-Type": "application/json"},
           body: JSON.stringify({
             date: date,
             weight: weight,
             bmi: bmi,
             fatLevel: fatLevel,
             muscleLevel: muscleLevel
             }),
          });

      if (res.status === 201) {

        setWeight();
        setBmi();
        setFatLevel();
        setMuscleLevel();
        setMessage("Dane zapisano");

      } else {
        setMessage("Wystąpił błąd");

      }
    } catch (err) {
      console.log(err);
    }


  };


  return <div>

  <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
  <AdminsNavBar userName = {userName}/>
  </div>


  <h3 class="my-2">Wprowadź dane z wizyty</h3>
          <p>
            <form onSubmit={handleSubmit}>
              <input type="date" value={date} class="my-1" required onChange={(e) => setDate(e.target.value)} /><br/>
              <input type="number" value={weight} placeholder="Waga" class="my-1" required onChange={(e) => setWeight(e.target.value)} /><br/>
              <input type="number" value={bmi} placeholder="BMI" class="my-1" required onChange={(e) => setBmi(e.target.value)} /><br/>
              <input type="number" value={fatLevel} placeholder="% tkanki tłuszczowej" class="my-1" required onChange={(e) => setFatLevel(e.target.value)} /><br/>
              <input type="number" value={muscleLevel} placeholder="% tkanki mięśniowej" class="my-1" required onChange={(e) => setMuscleLevel(e.target.value)} /><br/>
              <button type="submit">Prześlij</button>

              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </p>






  </div>
}

export default VisitForm;

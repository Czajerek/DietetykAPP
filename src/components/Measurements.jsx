import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import UsersNavBar from "./UsersNavBar";
import { useParams } from "react-router-dom";






function Measurements() {

  const params = useParams()
  const userName = params.userPath

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("http://localhost:5000/users/" + userName + "/measurements")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
       setData(actualData);
       setError(null);
     })
     .catch((err) => {
             setError(err.message);
             setData(null);
           })
       .finally(() => {
             setLoading(false);
           });
  }, []);





  return (
<div>

<div class="border-bottom mx-0" style={{textAlign: "center"}}>
<UsersNavBar userName = {userName}/>
</div>


<h5>Pomiary. {userName}</h5>

<div>

{loading && <div>A moment please...</div>}
{error && (
  <div>{`There is a problem fetching the post data - ${error}`}</div>
)}

  {data &&
    data.map(({ id, date, weight, bmi, fatLevel, muscleLevel }) => (
      <div key={id} class="w-75 my-3 ms-4 border-bottom" style={{textAlign: "left"}}>
      <p><b>Data pomiaru: </b>{date.substring(0, 10)}</p>
      <ul>
        <li><b>Masa ciała [kg]: </b>{weight.$numberDecimal}</li>
        <li><b>BMI: </b>{bmi.$numberDecimal}</li>
        <li><b>Poziom tkanki tłuszczowej [%]: </b>{fatLevel.$numberDecimal}</li>
        <li><b>Poziom tkanki mięśniowej [%]: </b>{muscleLevel.$numberDecimal}</li>
      </ul>
      </div>

    ))}





</div>



</div>
);

}
export default Measurements;

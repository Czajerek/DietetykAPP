import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


function AvailableDates(props) {

const [week, setWeek] = useState()
const [message, setMessage] = useState("");


const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

console.log(props.weekToBeChecked);


useEffect(() => {
  fetch("http://localhost:5000/calendar/" + props.weekToBeChecked)
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
     console.log(data);
   })
   .catch((err) => {
           setError(err.message);
           setData(null);
         })
     .finally(() => {
           setLoading(false);
         });
}, []);



  return (<div>

  </div>

);

}
export default AvailableDates;

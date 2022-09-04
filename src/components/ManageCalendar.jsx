
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import AvailableDates from "./AvailableDates"

import UsersNavBar from "./UsersNavBar";
import AdminsNavBar from "./AdminsNavBar";
import { useParams } from "react-router-dom";



function ManageCalendar() {


const params = useParams()
const userName = params.userPath;

const [week, setWeek] = useState();
const [message, setMessage] = useState("");

const [trigger, setTrigger] = useState(null);


const [days, setDays] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const [day, setDay] = useState();
const [hour, setHour] = useState();

const [value, setValue] = useState(0);

function presentStatus(message){
  console.log(message);
}

function forceUpdate(){

  return

   setValue(value => value + 1);
   console.log(value);
}

function setInfo(day, hour) {
  console.log(day);
  console.log(hour);

  try {
    let res = fetch("http://localhost:5000/calendar/" + week, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
           name: day,
           hourOperator: hour,
           content: "Zajęte"
           }),
        });
    res.then(res => {

    if (res.status === 201) {

      // setWeek("");
      setMessage("Week added successfully");
      forceUpdate();
      setTrigger(Math.random())
      console.log(message);
      checkWeek();
    } else {
      setMessage("Some error occured");
      console.log(message);
    }

      })
  } catch (err) {
    console.log(err);
  }


}

const [hourOperator, setHourOperator] = useState(null);
const [dayOperator, setDayOperator] = useState(null);

function visitHandling(){

  console.log(hourOperator);
  console.log(dayOperator);

  try {
    let res = fetch("http://localhost:5000/calendar/" + week, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
           name: dayOperator,
           hourOperator: hourOperator,
           content: "Zajęte"
           }),
        });

    if (res.status === 201) {

      setWeek("");
      setMessage("Week added successfully");
      console.log(message);
    } else {
      setMessage("Some error occured");
      console.log(message);
    }
  } catch (err) {
    console.log(err);
  }
}

async function addWeek() {
  try {
    const res = await fetch("http://localhost:5000/calendar", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
         body: JSON.stringify({
           week: week,
           }),
        });
      if (res.status === 201) {
      setWeek("");
      setMessage("Week added successfully");
      presentStatus("Week added successfully");
    } else {
      presentStatus("Some error occured");
      console.log(message);
    }
  } catch (err) {
    console.log(err);
  }
};



function checkWeek() {


    fetch("http://localhost:5000/calendar/" + week)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
       setDays(actualData);
       setError(null);
       console.log(days);
     })
     .catch((err) => {
             setError(err.message);
             setDays(null);
           })
       .finally(() => {
             setLoading(false);
           });


}






return (
  <div>

  { userName !== "admin" ? (

    <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
    <UsersNavBar userName = {userName}/>
    </div>

  ) :   <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
    <AdminsNavBar userName = {userName}/>
    </div>
  }

    <div class="row border-bottom mx-0" style={{textAlign: "center", backgroundColor: "#ffff4d"}}>

      <h5 class="my-2">Wolne terminy</h5>


    </div>


    <div class="row gx-0 border-bottom">
    <input type="week" name="week" id="camp-week" value={week}
       min="2022-W29" max="2030-W52" required onChange={(e) => setWeek(e.target.value)} />
    </div>
    <button onClick={checkWeek}>Sprawdź terminy</button>






    {loading && <div>A moment please...</div>}
    {error && (
      <div>{`There is a problem fetching the post data - ${error}`}</div>
    )}

      {days &&
        days.map((day) => {
          console.log(day);
    return (

      <div key={day._id} class="w-75 my-3 ms-4 border-bottom" style={{textAlign: "left"}} >
        <div class="border-bottom mb-3"><p><b>Name: {day.name}</b></p> </div>
        {day.eight === "Wolne" ? <p>8:00: {day.eight} <button onClick={() => { setInfo(day.name, "eight"); }}>Rezerwuj</button></p> : null }
        {day.halfPastEight === "Wolne" ? <p>8:30: {day.halfPastEight} <button onClick={() => { setInfo(day.name, "halfPastEight"); }}>Rezerwuj</button></p> : null }
        {day.nine === "Wolne" ? <p>9:00: {day.nine} <button onClick={() => { setInfo(day.name, "nine"); }}>Rezerwuj</button></p> : null }
        {day.halfPastNine === "Wolne" ? <p>9:30: {day.halfPastNine} <button onClick={() => { setInfo(day.name, "halfPastNine"); }}>Rezerwuj</button></p> : null }
        {day.ten === "Wolne" ? <p>10:00: {day.ten} <button onClick={() => { setInfo(day.name, "ten"); }}>Rezerwuj</button></p> : null }
        {day.halfPastTen === "Wolne" ? <p>10:30: {day.halfPastTen} <button onClick={() => { setInfo(day.name, "halfPastTen"); }}>Rezerwuj</button></p> : null }
        {day.eleven === "Wolne" ? <p>11:00: {day.eleven} <button onClick={() => { setInfo(day.name, "eleven"); }}>Rezerwuj</button></p> : null }
        {day.halfPastEleven === "Wolne" ? <p>11:30: {day.halfPastEleven} <button onClick={() => { setInfo(day.name, "halfPastEleven"); }}>Rezerwuj</button></p> : null }
        {day.twelve === "Wolne" ? <p>12:00: {day.twelve} <button onClick={() => { setInfo(day.name, "twelve"); }}>Rezerwuj</button></p> : null }
        {day.halfPastTwelve === "Wolne" ? <p>12:30: {day.halfPastTwelve} <button onClick={() => { setInfo(day.name, "halfPastTwelve"); }}>Rezerwuj</button></p> : null }
        {day.thirteen === "Wolne" ? <p>13:00: {day.thirteen} <button onClick={() => { setInfo(day.name, "thirteen"); }}>Rezerwuj</button></p> : null }
        {day.halfPastThirteen === "Wolne" ? <p>13:30: {day.halfPastThirteen} <button onClick={() => { setInfo(day.name, "halfPastThirteen"); }}>Rezerwuj</button></p> : null }
        {day.fourteen === "Wolne" ? <p>14:00: {day.fourteen} <button onClick={() => { setInfo(day.name, "fourteen"); }}>Rezerwuj</button></p> : null }
        {day.halfPastFourteen === "Wolne" ? <p>14:30: {day.halfPastFourteen} <button onClick={() => { setInfo(day.name, "halfPastFourteen"); }}>Rezerwuj</button></p> : null }
        {day.fifteen === "Wolne" ? <p>15:00: {day.fifteen} <button onClick={() => { setInfo(day.name, "fifteen"); }}>Rezerwuj</button></p> : null }
        {day.halfPastFifteen === "Wolne" ? <p>15:30: {day.halfPastFifteen} <button onClick={() => { setInfo(day.name, "halfPastFifteen"); }}>Rezerwuj</button></p> : null }
        {day.sixteen === "Wolne" ? <p>16:00: {day.sixteen} <button onClick={() => { setInfo(day.name, "sixteen"); }}>Rezerwuj</button></p> : null }
          <p>control: {value} </p>








      </div>
);


})}



{ userName !== "admin" ? null



 :  <div>






    <div class="row border-bottom mx-0" style={{textAlign: "center", backgroundColor: "#ffff4d"}}>

    <h5 class="my-2">Dodaj tydzień</h5>
    <input type="week" name="week" id="camp-week" value={week}
       min="2022-W29" max="2030-W52" required onChange={(e) => setWeek(e.target.value)} />
    </div>

      <button onClick={addWeek}>Dodaj tydzień</button>

    { message ? <p>{message}</p> : null }



</div>}





</div>
)


}
export default ManageCalendar;

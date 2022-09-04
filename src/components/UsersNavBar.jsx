import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom"






function UsersNavBar(props) {

const navigate = useNavigate();



function navigation(){
  console.log("lala");
}


function measurements() {
  props.pageOrder("Measurements");
};

function visit() {
  props.pageOrder("Visit");
};

function messages() {
  props.pageOrder("Messages");
};




  return (
<div>
  <div class="mb-0 border-right d-flex justify-content-around">

    <button type="button" class="btn btn-primary mx-5" value="measurements" onClick={() => navigate("/users/" + props.userName + "/measurements")}>Analiza składu ciała</button>
    <button type="button" class="btn btn-primary mx-5" value="visits" onClick={() => navigate("/users/" + props.userName + "/calendar") }>Następna wizyta</button>
    <button type="button" class="btn btn-primary mx-5 " value="messages" onClick={() => navigate("/users/" + props.userName + "/messages")}>Wiadomości</button>
    <a href="http://localhost:5000/logout"><button type="button" class="btn btn-primary mx-5" value="Wyloguj">Wyloguj</button></a>
  </div>




</div>
)
}
export default UsersNavBar;

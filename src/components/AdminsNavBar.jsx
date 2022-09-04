import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from "react-router-dom"






function AdminsNavBar(props) {

const navigate = useNavigate();

function measurements() {
  props.pageOrder("Measurements");
};

function visit() {
  props.pageOrder("Visit");
};

function messages() {
  props.pageOrder("Messages");
};

function calendar() {
  props.pageOrder("Calendar");
};

function summarize() {
  props.pageOrder("Summarize");
};

function register() {
  props.pageOrder("Register");
};

function addArticle() {
  props.pageOrder("AddArticle");
};





  return (
<div>
  <div class="mb-0 border-right d-flex justify-content-around">


    <button type="button" class="btn btn-primary" onClick={() => navigate("/users/" + props.userName + "/register")}>Dodaj pacjenta</button>
    <button type="button" class="btn btn-primary" onClick={() => navigate("/users/" + props.userName + "/summarize")}>Podsumuj wizytę</button>
    <button type="button" class="btn btn-primary" onClick={() => navigate("/users/" + props.userName + "/addarticle")}>Dodaj wpis na bloga</button>
    <button type="button" class="btn btn-primary" onClick={() => navigate("/users/" + props.userName + "/calendar")}>Dodaj wizyty</button>
    <button type="button" class="btn btn-primary" onClick={() => navigate("/users/" + props.userName + "/messages")}>Wiadomości</button>
    <a href="http://localhost:5000/logout"><button type="button" class="btn btn-primary" value="Wyloguj">Wyloguj</button></a>
  </div>




</div>
)
}
export default AdminsNavBar;

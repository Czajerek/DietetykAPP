
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";
import UserSelector from "./UserSelector"
import VisitForm from "./VisitForm"
import { useParams } from "react-router-dom";


function SummarizeVisit() {

  const params = useParams()
  const userName = params.userPath;

  const [user, setUser] = useState();


  function redirecting(username) {
    setUser(username);
  }


  return (
  <div>




{!user ? <UserSelector redirect = {redirecting}/> :  <VisitForm userName = {user}/>}

</div>
)


}
export default SummarizeVisit;

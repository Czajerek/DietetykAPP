import React, { useState } from "react";
import { Navigate } from "react-router-dom"
import UsersNavBar from "./UsersNavBar";

import Measurements from "./Measurements";
import Visit from "./Visit";
import Messages from "./Messages";



function UsersPage() {

  const path = window.location.pathname;
  const userName = path.slice(7);
  console.log(userName);

  const [pageState, setPageState] = useState("Measurements");






  return (




    <div class="row gx-0">




    <div class="row border-bottom mx-0" style={{textAlign: "center", backgroundColor: "#ffff4d"}}>

      <h5 class="my-2">Witaj {userName}!</h5>


  </div>

  <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
<UsersNavBar userName = {userName}/>
  </div>

  <div>

{pageState === "Measurements" ? <Navigate to={"/users/" + userName + "/measurements"} /> : null }
{pageState === "Visit" ? <Navigate to={"/users/" + userName + "/visits"}/> : null }
{pageState === "Messages" ? <Navigate to={"/users/" + userName + "/messages"}/> : null }

  </div>







</div>
)
}
export default UsersPage;

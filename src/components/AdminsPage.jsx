import React, { useState } from "react";
import AdminsNavBar from "./AdminsNavBar";

import Measurements from "./Measurements";
import AddArticle from "./AddArticle";
import Visit from "./Visit";
import Messages from "./Messages";
import Register from "./Register";
import SummarizeVisit from "./SummarizeVisit";
import ManageCalendar from "./ManageCalendar";





function AdminsPage() {

  const path = window.location.pathname;
  const userName = path.slice(7);

  const [pageState, setPageState] = useState("Register");






  return (




    <div class="row gx-0">




    <div class="row border-bottom mx-0" style={{textAlign: "center", backgroundColor: "#ffff4d"}}>

      <h5 class="my-2">Cześć Kasia!</h5>


  </div>

  <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
<AdminsNavBar userName = {userName}/>
  </div>

  <div>


{pageState === "Register" ? <Register/> : null }
{pageState === "Summarize" ? <SummarizeVisit/> : null }
{pageState === "Calendar" ? <ManageCalendar/> : null }
{pageState === "Visit" ? <Visit/> : null }
{pageState === "Messages" ? <Messages user = {userName}/> : null }
{pageState === "AddArticle" ? <AddArticle/> : null }

  </div>







</div>
)
}
export default AdminsPage;


import React, { useState } from "react";
import ReactDOM from "react-dom";
import AdminsNavBar from "./AdminsNavBar";
import { useParams } from "react-router-dom";



function Register() {

  const params = useParams()

  const [userName, setUsername] = useState(params.userPath);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
           body: JSON.stringify({
             username: userName,
             password: password,
             }),
          });

      if (res.status === 201) {

        setUsername("");
        setPassword("");
        setMessage("User registered successfully");
        console.log(message);
      } else {
        setMessage("Some error occured");
        console.log(message);
      }
    } catch (err) {
      console.log(err);
    }

}

  return (

  <div class="row gx-0 border-bottom">

  <div class="border-bottom mx-0" style={{textAlign: "center"}}>
  <AdminsNavBar userName = {userName}/>
  </div>



  <h3 class="my-2">Zarejestruj pacjenta</h3>
        <p>
          <form onSubmit={handleSubmit}>
            <input type="text" value={userName} placeholder="Login" class="my-1" required onChange={(e) => setUsername(e.target.value)} /><br/>
            <input type="text" value={password} placeholder="Password" class="my-1" required onChange={(e) => setPassword(e.target.value)} /><br/>
            <button type="submit">Zarejestruj</button>

            <div className="message">{message ? <p>{message}</p> : null}</div>
          </form>
        </p>



</div>


)


}
export default Register;


import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";


function LogScreen() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [path, setPath] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
           body: JSON.stringify({
             username: username,
             password: password,
             }),
          });


      console.log(res.status);
      if (res.status === 200) {
        console.log("STATUS 200!");

        setPath(username);

        setPassword("");
        setMessage("Logged in successfully");


      } else {
        setMessage("Błędny login lub hasło");
        console.log(message);

      }
    } catch (err) {
      console.log(err);
    }

};






  return (

  <div class="row gx-0 border-bottom">



  <h3 class="my-2">Zaloguj się!</h3>
        <p>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} placeholder="Login" class="my-1" required onChange={(e) => setUsername(e.target.value)} /><br/>
            <input type="password" value={password} placeholder="Password" class="my-1" required onChange={(e) => setPassword(e.target.value)} /><br/>
            <button type="submit">Zaloguj</button>
            {console.log(username)}

            <div className="message">{message ? <p>{message}</p> : null}</div>

          </form>
        </p>



  {message === "Logged in successfully" ? username === "admin" ?  <Navigate to={"/users/admin/register"} replace={true} /> : <Navigate to={"/users/" + path + "/measurements"} replace={true} /> : null }



</div>


)


}
export default LogScreen;

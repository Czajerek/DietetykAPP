import React, { useState } from "react";
import ReactDOM from "react-dom";



function DataCollection(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/toCall", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
           body: JSON.stringify({
             name: name,
             email: email,
             mobileNumber: mobileNumber,
             }),
          });
      let resJson = await res.json();
      if (res.status === 200) {

        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");

      }
    } catch (err) {
      console.log(err);
    }

{props.formSubmited()};
  };


  return <div>
  <h3 class="my-2">Umów się na wizytę!</h3>
          <p>
            <form onSubmit={handleSubmit}>
              <input type="text" value={name} placeholder="Imię" class="my-1" required onChange={(e) => setName(e.target.value)} /><br/>
              <input type="text" value={email} placeholder="Nazwisko" class="my-1" required onChange={(e) => setEmail(e.target.value)} /><br/>
              <input type="text" value={mobileNumber} placeholder="numer telefonu" class="my-1" required onChange={(e) => setMobileNumber(e.target.value)} /><br/>
              <button type="submit">Prześlij</button>

              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </p>






  </div>
}

export default DataCollection;

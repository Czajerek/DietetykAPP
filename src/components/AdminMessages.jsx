import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import AdminsNavBar from "./AdminsNavBar";
import UserSelector from "./UserSelector";
import { useParams } from "react-router-dom";




function AdminMessages(props) {


  const userName = "admin";

  const [client, setClient] = useState("Adam");

  const [textField, setTextField] = useState("");
  const [controlMessage, setControlMessage] = useState("");


  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [clients, setClients] = useState(null);
  const [clientLoading, setClientLoading] = useState(true);
  const [clientError, setClientError] = useState(null);

  const [trigger, setTrigger] = useState(null);


  const [user, setUser] = useState();

  function redirecting(username) {
    setClient(username);
    setTrigger(Math.random())
  }



  useEffect(() => {

    async function findMessages() {
      try {
        const response = await fetch(`http://localhost:5000/users/` + client + "/messages")
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json()
        setMessages(actualData);
        setError(null);
    } catch (error) {
      setError(error.message);
      setMessages(null);
    } finally {
      setLoading(false);
    }};
    findMessages();
  }, [trigger]);



  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
       setClients(actualData);
       setClientError(null);
     })
     .catch((err) => {
             setClientError(err.message);
             setClients(null);
           })
       .finally(() => {
             setClientLoading(false);
           });
  }, []);



  function sendMessage(event) {

    try {
    const res = fetch("http://localhost:5000/users/" + client + "/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: new Date(),
        message: textField,
        direction: 0
      }),
    });

    res.then(res => {
      console.log(res.status);

      if (res.ok) {

          setTextField("");
          console.log(textField);
          setControlMessage("Message added successfully");
          console.log(controlMessage);
          setTrigger(Math.random())
          console.log(trigger);

        } else {
          setControlMessage("Some error occured");
          console.log(controlMessage);

        }

      })



    } catch (err) {
      console.log(err);
    }

    event.preventDefault();
  }



  function handleChange(event) {
    setTextField(event.target.value);
  }



  return ( <
    div class="row" >

    <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
    <AdminsNavBar userName = {userName}/>

    </div>

    <div class="w-25 border border-top-0 border-bottom-0" style={{textAlign: "center"}}>


<div>

{clientLoading && <div>A moment please...</div>}
{clientError && (
<div>{`There is a problem fetching the post data - ${clientError}`}</div>
)}

{clients &&
clients.map(({ id, username }) => (
  <div key={id} class="w-75 my-3 ms-4 border-bottom" style={{textAlign: "left"}}>
  <button type="button" class="btn btn-primary mx-5" onClick={({}) => redirecting(username)}>{username}</button>
  </div>

))}

</div>


    </div>

    <div class="w-75">

    {
      loading && < div > A moment please... < /div>} {
        error && ( <
          div > {
            `There is a problem fetching the post data - ${error}`
          } < /div>
        )
      }

      {
        messages &&
          messages.map(({
            id,
            message,
            date,
            direction
          }) => (
            direction === true ? (

              <
              div key = {
                id
              }
              class = "w-75 my-3 ms-4 border-bottom"
              style = {
                {
                  textAlign: "left"
                }
              } >

              <
              p > {
                date.substring(11, 19)
              } {
                date.substring(0, 10)
              } < /p> <
              p > {
                message
              } < /p>

              <
              /div>

            ) : (

              <
              div key = {
                id
              }
              class = "w-75 my-3 me-4 border-bottom"
              style = {
                {
                  textAlign: "right",
                  margin: "auto"
                }
              } >

              <
              p > {
                date.substring(11, 19)
              } {
                date.substring(0, 10)
              } < /p> <
              p > {
                message
              } < /p>

              <
              /div>


            )

          ))
      }








<form onSubmit={sendMessage}>
      <
      div class = "form-group mx-5"
      style = {
        {
          textAlign: "left"
        }
      } >
      <
      textarea class = "form-control"
      placeholder = "Napisz wiadomość"
      rows = "5"
      onChange = {event => setTextField(event.target.value)
      }
      value = {
        textField
      }
      /> <
      /div> <
      button type="submit"> Wyślij < /button>

    </form>


</div>
      <
      /div>
    );

  }
  export default AdminMessages;

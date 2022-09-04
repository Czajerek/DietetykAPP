import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import UsersNavBar from "./UsersNavBar";
import AdminsNavBar from "./AdminsNavBar";
import { useParams } from "react-router-dom";




function Messages(props) {

  const params = useParams()
  const userName = params.userPath

  const [textField, setTextField] = useState("");
  const [controlMessage, setControlMessage] = useState("");


  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [trigger, setTrigger] = useState(null);



  useEffect(() => {

    async function findMessages() {
      try {
        const response = await fetch(`http://localhost:5000/users/` + userName + "/messages")
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




  function sendMessage(event) {

    try {
    const res = fetch("http://localhost:5000/users/" + userName + "/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        date: new Date(),
        message: textField,
        direction: 1
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
    div >

    { userName !== "admin" ? (

      <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
      <UsersNavBar userName = {userName}/>
      </div>

    ) :   <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
      <AdminsNavBar userName = {userName}/>
      </div>
    }




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
      <
      /div>
    );

  }
  export default Messages;

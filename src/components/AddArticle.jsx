import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import AdminsNavBar from "./AdminsNavBar";
import { useParams } from "react-router-dom";



function AddArticle() {

  const params = useParams()
  const userName = params.userPath;

  const [textField, setTextField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [controlMessage, setControlMessage] = useState("");


  const [messages, setMessages] = useState(null);
  const [error, setError] = useState(null);


  function sendArticle() {
    try {
      const res = fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: titleField,
          content: textField,
        }),
      });

      res.then(res => {
        console.log(res.status);

        if (res.ok) {

          setTextField("");
          setControlMessage("Article added successfully");
          console.log(controlMessage);
        } else {
          setControlMessage("Some error occured");
          console.log(controlMessage);

        }

      })



    } catch (err) {
      console.log(err);
    }
  }



  function handleArticleChange(event) {
    setTextField(event.target.value);
  }

  function handleTitleChange(event) {
    setTitleField(event.target.value);
  }



  return ( <
    div >

    <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
    <AdminsNavBar userName = {userName}/>
    </div>


    <
    div class = "form-group mx-5"
    style = {
      {
        textAlign: "left"
      }
    } >
    <input placeholder = "Tytuł artykułu" class=" form-control mt-4 w-100" onChange = {handleTitleChange} value = { titleField }/>
    <
    textArea class = "form-control my-3"
    placeholder = "Treść artykułu"
    rows = "5"
    onChange = {
      handleArticleChange
    }
    value = {
      textField
    }
    /> < /
    div > <
    button onClick = {
      sendArticle
    } > Wyślij < /button>


    <
    /div>
  );

}
export default AddArticle;

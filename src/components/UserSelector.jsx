
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Navigate } from "react-router-dom";
import AdminsNavBar from "./AdminsNavBar";
import { useParams } from "react-router-dom";


function UserSelector(props) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams()

  const [userName, setUsername] = useState(params.userPath);


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
       setData(actualData);
       setError(null);
     })
     .catch((err) => {
             setError(err.message);
             setData(null);
           })
       .finally(() => {
             setLoading(false);
           });
  }, []);


  return (
    <div class="row gx-0 border-bottom">

    <div class="row border-bottom mx-0" style={{textAlign: "center"}}>
    <AdminsNavBar userName = {userName}/>
    </div>

    <div>



  <h4>Wybierz pacjenta</h4>

</div>
<div>

{loading && <div>A moment please...</div>}
{error && (
  <div>{`There is a problem fetching the post data - ${error}`}</div>
)}

  {data &&
    data.map(({ id, username }) => (
      <div key={id} class="w-75 my-3 ms-4 border-bottom" style={{textAlign: "left"}}>
      <button type="button" class="btn btn-primary mx-5" onClick={({}) => props.redirect(username)}>{username}</button>
      </div>

    ))}

</div>

</div>
)


}
export default UserSelector;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import DataCollection from "./DataCollection"
import Thanks from "./Thanks"



function Form() {

  const [state, setState] = useState(false);

  function changeState() {
      setState(true);


  }

  function unChangeState() {
      setState(false);
  }


  return (
    <div>

{state === true ? <Thanks unChange = {unChangeState}/> : <DataCollection formSubmited = {changeState}/>}


  </div>
);
}
export default Form;

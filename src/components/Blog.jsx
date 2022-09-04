import React, { useState, useEffect } from 'react';



function Blog() {

  const [toCall, setToCall] = useState();


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);






  useEffect(() => {
    fetch(`http://localhost:5000/posts`)
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




  return <div class="row gx-0 border-bottom">

  <div class="row border-bottom mx-0" style={{textAlign: "center", backgroundColor: "#ffff4d"}}>

    <h5 class="my-2">Blog</h5>


</div>



      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}

        {data &&
          data.map(({ id, title, content }) => (
            <div key={id} class="w-75 my-3 ms-4 border-bottom" style={{textAlign: "left"}}>
              <h4>{title}</h4><br/>
              <p>
              {content.substring(0, 90) + "..."}
              <a href={"http://localhost:3000/" + title}>Czytaj dalej</a></p>

            </div>
          ))}






</div>





}
export default Blog;

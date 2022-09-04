import React, {
  useState,
  useEffect
} from 'react';


function  presentStatus(post){
    const content = post.content;
    const title = post.title;
    const id = post._id

  }


function Post(props) {

  const [toCall, setToCall] = useState();


  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const path = window.location.pathname;
  const postTitle = path.slice(1);
  console.log(postTitle);








  // useEffect(() => {
  //   fetch(`http://localhost:5000/posts/` + postTitle)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //
  //       return response;
  //
  //     })
  //     .then((response) => {
  //       return response.json()
  //     })
  //
  //     .then((actualData) => {
  //       setData(actualData);
  //       setError(null);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setData(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //       presentStatus(data);
  //     });
  // }, []);


  useEffect(() => {

    async function findPost() {
      try {
        const response = await fetch(`http://localhost:5000/posts/` + postTitle)
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json()
        setPost(actualData);
        presentStatus(actualData);
        setError(null);
    } catch (error) {
      setError(error.message);
      setPost(null);
      console.log(error);
    } finally {
      setLoading(false);
      console.log(post);

    }};
    findPost();
  }, []);




  return (
    <
    div >

  {loading && <div>A moment please...</div>}
  {post && <div>
    <p style={{textAlign: "left", justifyContent: "left"}} class="ms-4 my-4"><b>{post.title}</b></p>
    <p style={{textAlign: "justify"}} class="mx-4 my-4">{post.content}</p>

    </div>}


    <
    /div>


  )









}
export default Post;

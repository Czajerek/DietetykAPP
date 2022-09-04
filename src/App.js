import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Offer from "./components/Offer";
import Faq from "./components/FAQ";
import Contact from "./components/Contact";
import LogScreen from "./components/LogScreen";
import Register from "./components/Register";
import SummarizeVisit from "./components/SummarizeVisit";
import ManageCalendar from "./components/ManageCalendar";
import VisitForm from "./components/VisitForm";
import AddArticle from "./components/AddArticle";
import Measurements from "./components/Measurements";
import Messages from "./components/Messages";
import AdminMessages from "./components/AdminMessages";
import "./App.css";
import { Route, Routes, useParams } from "react-router-dom";








const tytulec = "tytuł";

function App() {


  const path = window.location.pathname;
  const userName = path.slice(7);

  const  postPath  = useParams();
  const  userPath  = useParams();


  return (
<div class="row gx-0">


  <Header/>


  <div class="row gx-0">
    <div class="col-9 border-end" style={{textAlign: "center"}}  >
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/OFfer" element={<Offer/>} />
        <Route path="/Faq" element={<Faq/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/LogScreen" element={<LogScreen/>} />
        <Route path="/users/:userPath/register" element={<Register/>} />
        <Route path="/users/:userPath/summarize" element={<SummarizeVisit/>} />
        <Route path="/users/:userPath/visitform" element={<VisitForm/>} />
        <Route path="/users/:userPath/calendar" element={<ManageCalendar/>} />
        <Route path="/users/:userPath/addarticle" element={<AddArticle/>} />
        <Route path="/:postPath" element={<Post title = {tytulec}/>} />


        <Route path="/users/:userPath/measurements" element={<Measurements/>} />
        <Route path="/users/admin/messages" element={<AdminMessages/>} />
        <Route path="/users/:userPath/messages" element={<Messages/>} />

      </Routes>

    </div>


    <div class="col-3" style={{textAlign: "center"}}>
      <h4 class="mb-3">Kasia Kowalska</h4>
  <img src="images/Diet1.jfif" class="" alt="..." style={{borderRadius: "10%"}}/>
  <p class="pt-5">
Absolwentka Śląskiego Uniwersytetu Medycznego<br/>
Z zamiłowania kucharka.
  </p>

  <p class="pt-5 ps-4" style={{textAlign: "left"}}>
Hobby:

  </p>
  <p class="ps-5" style={{textAlign: "left"}}>
- kajaki,<br/>
- pływanie,<br/>
- fotografia.

  </p>





    </div>
  </div>



  <div class="row gx-0" style={{backgroundColor: "grey"}}>
    <Footer/>
  </div>




</div>

  );
}

export default App;

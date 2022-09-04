import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Youtube from "./localisation";
import YT from "./YT";
import Form from "./Form";
import Blog from "./Blog";
import Offer from "./Offer";
import Faq from "./FAQ";
import Contact from "./Contact";
import LogScreen from "./LogScreen";
import "../App.css";


function Home() {
  return <div>





  <div class="row border-bottom mx-0">
  <Form/>

  </div>
  <div class="row border-bottom mx-0" style={{textAlign: "center", backgroundColor: "#ffff4d"}}>

    <h3 class="my-2">Gabinet</h3>


</div>






  <div class="row border-bottom mx-0">


    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true"  style={{width: "60%", margin: "1rem auto"}}>
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="images/gab2.jpg" class="d-block w-100" alt="..." style={{borderRadius: "10%"}}/>
        </div>
        <div class="carousel-item">
          <img src="images/gab3.jfif" class="d-block w-100" alt="..." style={{borderRadius: "10%"}}/>
        </div>
        <div class="carousel-item">
          <img src="images/gab4.jpg" class="d-block w-100" alt="..." style={{borderRadius: "10%"}}/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>





</div>


<Youtube/>


  </div>
  <div class="row mx-0 border-bottom" style={{backgroundColor: "#ffff4d"}}>
    <h3>Projekty/współpraca</h3>
  </div>
  <div class="row mx-0">
    <h5>Lorem ipsum</h5>
  </div>


</div>


}
export default Home;

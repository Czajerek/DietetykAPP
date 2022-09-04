import { Link } from "react-router-dom";

function NavBar() {
  return(

  <div class="mb-0 border-bottom border-right d-flex justify-content-between">
    <Link to="/"><button type="button" class="btn btn-primary weryfikacja">Strona główna</button></Link>
    <Link to="/Blog"><button type="button" class="btn btn-primary">Blog</button></Link>
    <Link to="/Offer"><button type="button" class="btn btn-primary">Oferta</button></Link>
    <Link to="/Faq"><button type="button" class="btn btn-primary">FAQ</button></Link>
    <Link to="/Contact"><button type="button" class="btn btn-primary">Kontakt</button></Link>
    <a href="http://localhost:5000/login"><button type="button" class="btn btn-primary">Strefa Pacjenta</button></a>
  </div>

)
}
export default NavBar;

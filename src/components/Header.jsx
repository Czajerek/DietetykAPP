
function Header() {
  return <div class="row gx-0 border-bottom">

  <div class="col-lg-1 col-md-1 col-sm-2 col-2" style={{backgroundColor: "green", marginTop: "auto", marginBottom: "auto"}} >
    <img src="/images/logo.png" alt="Logo" width="125%"></img>
  </div>
  <div class="col-lg-2 col-md-3 col-sm-4 col-5" style={{textAlign: "center", marginTop: "auto", marginBottom: "auto"}} >
    <h3> Bardziej Roślinna Dietetyka </h3>
  </div>
  <div class="col-lg-9 col-md-8 col-sm-6 col-5" >
  <ul class=" justify-content-end list-unstyled d-flex" style={{paddingTop: "25px", paddingRight: "20px"}}>
    <li class="ms-3"><a class="text-muted" href="#"><img src="/images/instagram.png" alt="instagram logo" style={{width: "35px", height: "35px"}}></img></a></li>
    <li class="ms-3"><a class="text-muted" href="#"><img src="/images/facebook.png" alt="instagram logo" style={{width: "35px", height: "35px"}}></img></a></li>
  </ul>
  </div>





</div>
}
export default Header;

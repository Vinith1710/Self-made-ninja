import menuImg from '../../Assets/icons/menu.svg';
import logo from '../../Assets/icons/logo-text.svg';
function Header(){
    return(
        <>
        {/* <h1>ABCD</h1> */}
        {/* https://Vinith1710.github.io/self-made-ninja */}
        	<a href="https://wa.me/916380586139?text=Hi%2C%20I%20am%20(name)%0AI%20would%20like%20to%20know%20more%20about%20SNA%20" class="whatsapp_float" title="Get Help from Our Selfmade Ninja Academy Support Team" target="_blank" rel="noopener noreferrer">
		<i class="fa fa-whatsapp whatsapp-icon"></i>
	</a>
        <nav id="top-navbar">
  <div class="sm-menu">
    <div class="dropdown">
      <button type="button" class="btn menu-btn navbar-toggler" data-bs-toggle="dropdown">
        <img src={menuImg} alt="menu"/>
      </button>
      <ul class="dropdown-menu dropdown-menu-body">
        <li class="line"></li>
        <li><a class="dropdown-item title" href="/aboutus">About Us</a></li>
        <li><a class="dropdown-item title" href="/contactus">Contact</a></li>
        <li><a class="dropdown-item title" href="/verify-cert">Certificate Verification</a></li>
                  <li><a class="dropdown-item title" href="https://git.selfmade.ninja/oauth/authorize?response_type=code&client_id=58fe303937fdac1aef5fb0a81452b12d110502f71abe15f607678211e8546511&redirect_uri=https%3A%2F%2Fselfmade.ninja%2Flogin&state=25bafe296f&scope=openid+profile+email+read_registry+write_registry+read_repository+write_repository+read_api&code_challenge=JcTYER3wk5DFgPs0saVbpZg5VxFLiIh7DSOUo69UosE&code_challenge_method=S256">Sign in</a></li>
              </ul>
    </div>
  </div>
  <div class="sna-logo">
    <a href="#">
      <img src={logo} alt="Sna Logo"/>
    </a>
  </div>
  <div class="navbar-content">
    <div class="sm-course-dropdown">
        <a href="/courses" class="btn course-dropdown-btn">Courses</a>
    </div>
    <a href="/courses" class="btn xl-course-btn" type="button">Courses</a>
    <div class="navbar-main-dropdown">
      <a href="/aboutus" type="button" class="btn d-link">About Us</a>
      <a href="/contactus" type="button" class="btn d-link">Contact</a>
      <a href="/verify-cert" type="button" class="btn d-link">Certificate Verification</a>
      <a href="#" type="button" class="btn d-link notification"> <i class="bi bi-bell"></i></a>
      <div class="login-wrapper">
                  <a type="button" href="https://git.selfmade.ninja/oauth/authorize?response_type=code&client_id=58fe303937fdac1aef5fb0a81452b12d110502f71abe15f607678211e8546511&redirect_uri=https%3A%2F%2Fselfmade.ninja%2Flogin&state=25bafe296f&scope=openid+profile+email+read_registry+write_registry+read_repository+write_repository+read_api&code_challenge=JcTYER3wk5DFgPs0saVbpZg5VxFLiIh7DSOUo69UosE&code_challenge_method=S256" class="btn sigin">Sign in</a>
              </div>
    </div>
  </div>
</nav>	</>
    )
}

export default Header;
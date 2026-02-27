
// ==== Navbar reuseble code ====

export const navBar = () => {

  return `
    <header class="navbar">
    <div class="logo">Furn<span>it<i class="fa-solid fa-couch"></i>re</span></div>

    <nav>
      <ul class="menu">                   
        <li><a href="../index.html">Home</a></li>

        <li class="dropdown">
          <a href="#">Shop ▾</a>
          <ul class="dropdown-menu">
            <li><a href="#">Living Room</a></li>
            <li><a href="#">Bedroom</a></li>
            <li><a href="#">Dining</a></li>
            <li><a href="#">Office</a></li>
          </ul>
        </li>

        <li><a href="#">Collections</a></li>
        <li><a href="#">Offers</a></li>
        <li><a href="../HTML_pages/About.html">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <div class="nav-right">
      <input type="text" placeholder="Search furniture..." class="search">
      <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
      <a href="#"><i class="fa-solid fa-user"></i></a>
    </div>
  </header>
    `
};


export const navFooterStyle = () => {

  return `
    .navbar {
    width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  background: var(--gray);
  border-bottom: 1px solid rgb(185, 182, 182);
  position: fixed;
  animation: scroll-transition;
  animation-timeline: scroll(y);
  transition:0.3s;
  z-index:2;
}

@keyframes scroll-transition {
  0%{
    background-color:transparent;
  }

  5%{
  background:var(--gray);
  box-shadow:0 0 10px var(--black);
  }

  100%{
    background-color: var(--gray);
     box-shadow:0 0 10px var(--black);
     position: absolute;
  }
     
  } 

.logo {
  font-size: 26px;
  font-weight: bold;
  color: var(--black);
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.473);
}

.logo span {
  color: var(--golden-hour);
  }
  
  .logo span i{
    margin:0px 2px;
}

.menu {
  list-style: none;
  display: flex;
  gap: 25px;
}

.menu li {
  position: relative;
}

.menu a {
  text-decoration: none;
  color: var(--black);
  font-weight: 500;
}

// ==== underline animation code ===

.menu li a {
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.menu li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  background-color: var(--golden-hour);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.menu li a:hover::after,
.menu li a:focus::after {
  transform: scaleX(1);
}

.menu li a:focus {
  color: var(--golden-hour);
}

.menu a:hover {
  color: var(--golden-hour);
}

/* Dropdown */
.dropdown-menu {
  position: absolute;
  top: 30px; /* initial position slightly down */
  left: 0;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  list-style: none;
  min-width: 180px;
  max-height: 0; /* Initially hidden */
  opacity: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    opacity 0.4s ease,
    transform 0.4s ease;
  transform: translateY(-10px); /* Slight lift effect */
}

.dropdown-menu li a {
  display: block;
  padding: 8px 15px;
  color: var(--black);
  text-decoration: none;
  margin-bottom:0.3rem;
}

.dropdown-menu li a:hover {
  background: var(--gray);
  color: var(--golden-hour);
}
  

.dropdown:hover .dropdown-menu {
  max-height: 500px; /* Enough to show all items */
  opacity: 1;
  transform: translateY(0);
}

/* Right section */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search:focus{
outline:none;
border: 2px solid var(--golden-hour);
}

.nav-right a:hover{
color:var(--golden-hour);
}

.nav-right a {
  text-decoration: none;
  font-size: 18px;
  color:var( --black) ;
}

.nav-right a li{
color:var(--black);
}




footer {
  width: 100%;
  position: relative;
}

footer h1{
 color: var(--white);
  font-style:normal;
}

footer .container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0%;
  padding-top:2.5rem;
  background-color: rgba(0, 0, 0, 0.918);
}

footer .container .box_1 {
  width: 90%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray);
  padding: 2.5rem;

  border-top: 1px solid var(--golden-hour);
  border-bottom: 1px solid var(--golden-hour);

}

footer .container .box_1 .conection {
  width: 50%;
  margin-bottom: 1.5rem;
}

footer .container .box_1 .conection h1 {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 50px;
  color: var(--golden-hour);
  margin-bottom: 1rem;
  display: flex;
}

footer .container .box_1 .conection p {
  color: var(--gray);
  margin-bottom: 1.5rem;
  font-size: 18px;
}

footer .container .box_1 .conection .search_box input {
  width: 18rem;
  padding: 8px 15px;
  font-size: 17px;
  font-weight: 300;
  background-color: transparent;
  color: var(--gray);
  border: 1px solid grey;
  border-radius: 4px;
  margin-right: 1px;
}

footer .container .box_1 .conection .search_box input:focus::placeholder {
color:var(--golden-hour);
}

footer .container .box_1 .conection .search_box input:focus{
  outline: none;
  border: 1px solid var(--golden-hour);
}

footer .container .box_1 .conection .search_box button {
  font-size: 18px;
  padding: 7px 20px;
  font-weight: 600;
  color: rgb(70, 68, 68);
  background-color: var(--golden-hour);
  border-radius: 5px;
  outline: none;
  border: none;
}

footer .container .box_1 .follow_box {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: end;
}

footer .container .box_1 .follow_box h3 {
  width: 16rem;
  margin-bottom: 2rem;
  text-align: center;
}

footer .container .box_1 .follow_box h3 span{
  color: var(--golden-hour);
  font-weight: 400;
  margin: .2rem;
}

footer .container .box_1 .follow_box .icon{
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  }
  
  footer .container .box_1 .follow_box .icon i{
    width: 45px;
    height: 45px;
    font-size: 25px;
    border-radius:50% ;
    align-content: center;
    background-color: #000;
    box-shadow: 0px 0px 5px 1px grey;
    border: 2px solid var(--golden-hour);
    transition: 0.3s;
    }
    
    footer .container .box_1 .follow_box .icon i:hover{
      color: var(--golden-hour);
      transform: scale(1.3);
}

footer .container .box_2{
  width: 100%;
  height: 60%;
  color: var(--gray);
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  padding-top: 1rem;
  border-top: 1px solid var(--golden-hour);
}

footer .container .box_2 .inner_box{
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--golden-hour);
}

footer .container .box_2 .inner_box h1{
  margin-bottom: 0.5rem;
}

footer .container .box_2 .inner_box h1:hover{
  color: var(--golden-hour);
}

footer .container .box_2 .inner_box ul{
  padding: 1.5rem 0 0 1rem;
  
  border-top: 2px solid var(--golden-hour);
}

footer .container .box_2 .inner_box li{
  line-height: 2.3rem;
  font-size: 18px;
  cursor: pointer;
}

footer .container .box_2 .inner_box li:hover{
  color: var(--golden-hour);
}

footer .container .box_2 .inner_box .contact li i{
  margin:0 0.5rem 0 0;
}
 `
}


// ==== Footer reuseble code ====

export const fooTer = () => {
  return `
    <video loop muted autoplay style="width: 100%; height: 95vh; object-fit: cover;">
    <source src="../Utils/Footer/Video_Generation_From_Images.mp4">
  </video>
    <div class="container">
      <div class="box_1">
        <div class="conection">
          <h1>Stay Connected</h1>
          <p>Subscribe to our newsletter for latest updates & offers.</p>
          <div class="search_box">
            <input type="text" placeholder="Enter your email" autocomplete="off">
            <button>Subscribe</button>
          </div>
        </div>
        <div class="follow_box">
          <h3> <span>______</span> Follows <span>______</span></h3>
          <div class="icon">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest-p"></i>
          </div>
        </div>
      </div>
      
      <div class="box_2">
        <div class="inner_box">
          <div class="service">
            <h1>Customer Service</h1>
            <ul>
              <li>Shipping & Returns</li>
              <li>Track Order</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div class="shop">
             <h1>Shop</h1>
            <ul>
              <li>Living Room</li>
              <li>Bedroom</li>
              <li>Dining</li>
              <li>Office</li>
            </ul>
          </div>

          <div class="about">
             <h1>About Us</h1>
            <ul>
              <li>Our Story</li>
              <li>Our stores</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div class="contact">
             <h1>Contact Us</h1>
            <ul>
              <li> <i class="fa-solid fa-location-dot"></i> 143 Furniture st.,City,State</li>
              <li> <i class="fa-solid fa-phone-volume"></i> +123-456-7890</li>
              <li> <i class="fa-solid fa-envelope"></i> info@example.com</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
`
};

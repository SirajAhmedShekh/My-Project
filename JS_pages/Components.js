
// ==== this is reuseble code ====

export const navBar = () => {

  return `
    <header class="navbar">
    <div class="logo">Furn<span>it<i class="fa-solid fa-couch"></i>re</span></div>

    <nav>
      <ul class="menu">                   
        <li><a href="#">Home</a></li>

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
        <li><a href="#">About</a></li>
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


export const navStyle = () => {

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
  z-index:2;
}

@keyframes scroll-transition {
  0%{
    background-color:transparent;
  }

  5%{
  background:var(--white);
  box-shadow:0 0 10px var(--black);
  }

  100%{
    background-color: var(--white);
     box-shadow:0 0 10px var(--black);
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
 `
}

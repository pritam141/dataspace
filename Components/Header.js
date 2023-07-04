import React ,{useEffect , useState} from "react"
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = (props) => {

return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container mx-auto">
    <a className="navbar-brand" href="#">Resturant</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
      </ul>
      <span className="navbar-text">
        <a href="http://"> <AiOutlineShoppingCart  size={22}/> </a>
      </span>
    </div>
  </div>
</nav>
 )
}
export default Header;






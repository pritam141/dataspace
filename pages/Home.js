import React ,{useEffect , useState} from "react"
import "../styles/index_style.css"
const Home = (props) => {
return (<>
    <div className="welcome ">
    <div className="container mx-auto d-flex justify-content-center align-items-cenetr flex-column  mt-5">
    <p className="text-white h3 mx-auto">WELCOME TO</p>
      <p className="text-white h3 mx-auto">Cafeteriya</p>
      <p className="text-white h3 mx-auto">Cafe and Resturant</p>
      <button className="btn">
        <a href="/service">Plase Your Order</a>
      </button>
    </div>
    
    </div>
</>)


}
export default Home;
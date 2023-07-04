import React ,{useEffect , useState} from "react"

const CategoryCard = (props) => {


return (<>
    <div className="card mx-2 mb-2" style={{
        width: '18rem'
    }}>
  <img src="/assets/image/5c5fc7482279344521d4b960_polao-website-thumbnail-_slxmmv.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <a href="#" className="btn btn-primary ms-3">Add to Cart</a>

  </div>
</div>
</>)


}
export default CategoryCard;
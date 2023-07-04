import React ,{useEffect , useState} from "react"
import CategoryCard from "../Components/Category_Card";

const Category = (props) => {


return (<>
<div className="d-flex flex-wrap container mx-auto justify-content-center p-5">
{ new Array(5).fill(5).map((item , index)=> (
    <CategoryCard/>
) )}
</div>
 
</>)


}
export default Category;
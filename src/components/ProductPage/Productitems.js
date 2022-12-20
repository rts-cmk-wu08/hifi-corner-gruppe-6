import axios from "axios"
import { useQuery } from "react-query"
import Productitem from "./Productitem"
import "../../components/ProductPage/Productitems.css"

const Productitems = () => {
    const productlist = new useQuery(["productlist"], () => {
        return axios("http://localhost:4000/products")
            .then( (res) =>{
                return res.data

            })
    })

    if (productlist.isError) {
        console.log("error")
    }

    if(productlist.isLoading) {
        console.log("loading")
    }
    
    if(productlist.isSuccess){
        console.log(productlist.data)
        return (
            
        <div className="container">
            
            {productlist.data.map((product, index) => {
                return <Productitem key={index} data={product}/>
            })}
        </div>
        
        )
        

    }
}

export default Productitems;
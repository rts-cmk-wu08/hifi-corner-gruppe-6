import axios from "axios"
import { useQuery } from "react-query"
import Productitem from "./Productitem"
import "../../components/ProductPage/Productitems.css"

const Productitems = () => {
    const productlist = new useQuery(["productlist"], () => {
        return axios("http://localhost:4000/category")
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
        return (
            
        <div className="container">
            
            {productlist.data.cd_player.map((product, index) => {
                return <Productitem key={index} data={product}/>
            })}
        </div>
        
        )
        

    }
}

export default Productitems;
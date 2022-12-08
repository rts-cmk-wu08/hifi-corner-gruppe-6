import React from 'react'
import "./PopularProducts.css"
import { useQuery } from 'react-query'
import axios from 'axios'
import Product from './Product'


export default function PopularProducts() {


    const popularP = new useQuery(["popular"], () => {
        return axios("http://localhost:4000/category")
                .then((res) => {
                    return res.data
                })
    })

    if (popularP.isError) {
        console.log("Error...")
    }
    if (popularP.isLoading) {
        console.log("Loading...")
    }
    
    console.log(popularP.data)

    return (
        <div className='popularProducts'>
            <div className="popularProducts__top">
                <div className="top__heading">
                    <h2>Popular Products</h2>
                </div>
                <div className="top__button">
                    <button>See all products</button>
                </div>
            </div>
            <div className="popularProducts__items">
                {popularP.isSuccess ? 
                    popularP.data.cd_player.map((product) => {
                        return <Product info={product} />
                    })
                : <h1>Error</h1>}
            </div>
        </div>
    )
}
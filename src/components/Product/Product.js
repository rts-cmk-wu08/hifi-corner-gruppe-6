import React from 'react'
import { useQuery } from 'react-query'

export default function Product() {


    const products = useQuery(["product"], () => {
        return fetch("http://10.160.206.116:4000/category")
                .then((res) => {
                    return res.json()
                })
    })

    if (products.isSuccess) {
        console.log(products.data)
    }

    return (
        <div className='product'>
            
        </div>
    )
}
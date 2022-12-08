import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'

export default function Product({ info }) {
    
    console.log(info)

    return (
        <Link to={`/productdetails:${info.id}`} className='product'>
            <div className="product__image">
                <img src={info.image.url} alt="" />
            </div>
            <div className="product__title">
                <p>{info.name}</p>
            </div>
            <div className="product__price">
                <p>{`£ ${info.price}`}</p>
            </div>
            <div className="product__btn">
                <button className='btn__button'>Read more</button>
            </div>
        </Link>
    )
}
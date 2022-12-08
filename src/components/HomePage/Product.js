import React from 'react'
import "./Product.css"

export default function Product({ info }) {
    
    console.log(info)

    return (
        <div className='product'>
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
                <div className="btn__button">
                    <p>Read more</p>
                </div>
            </div>
        </div>
    )
}
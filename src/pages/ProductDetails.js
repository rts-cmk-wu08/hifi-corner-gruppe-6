import React, { useState, useEffect, useContext } from "react"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css"
import { TbChartCandle } from "react-icons/tb"
// CONTEXT (Cart)
import { CartContext } from "../Contexts/CartContext"
// CONTEXT Compare
import { CompareContext } from "../Contexts/CompareContext";
import CompareBox from "../components/Compare/CompareBox";

const ProductDetails = () => {

  const { id } = useParams()
  const { cart, setCart } = useContext(CartContext)
  const { compareContext, setCompareContext } = useContext(CompareContext)

  
  const [counter, setCounter] = useState(0);
  const [itemColor, setItemColor] = useState();
  const [product, setProduct] = useState({
    color: "",
    count: 0
  });
  
  
  useEffect(() => {
    console.log(cart)
    console.log(compareContext)
  }, [cart, compareContext]);

  const dataDetails = new useQuery(["productdetail"], () => {
    return axios(`http://localhost:4000/products/${id}`)
            .then((res) => {
              return res.data
            })
  })
  

  const counterHandler = (e) => {
    const condition = e.currentTarget.getAttribute("counter-attribute") 
    
    if (condition === "plus") {
      setCounter(counter => counter + 1)
      console.log(counter)
    }
    if (condition === "minus") {
      if (counter === 0) {
        console.log("Reached Zero, cant go any lower!")
      }
      else {
        setCounter(counter => counter - 1)
        console.log(counter)
      }
    }
  }

  // COMPARE
  const compareHandler = () => {
    if (compareContext.length === 0) {
      setCompareContext([id])
    }
    else {
      const duplexCheck = compareContext.filter((product) => {
        return product === id
      })
      if (duplexCheck.length === 0) {
        setCompareContext(compareContext => [...compareContext, id])
      }
      else {
        alert("That item is already in the comparrison.")
      }
    }
  }

  // CART
  const cartHandler = () => {
    // console.log(itemColor)
    // console.log(counter)
    setCart((prevState) => {
      return {
        ...prevState,
        count: counter,
        color: itemColor,
        id: id
      }
    })
  }

  // COLORS
  const colorHandler = (e) => {
    const color = e.currentTarget.getAttribute("customcolor")
    console.log(color)
    setItemColor(color)
  }

  if (dataDetails.isError) {
    return <p>Error!</p>;
  }
  if (dataDetails.isLoading) {
    return <p>Loading...</p>
  }
  if (dataDetails.isSuccess)
    return (
      <main className="productDetails">
        {/* HEADER */}
        <div className="productDetails__header">
          <h1>PRODUCT</h1>
        </div>

        {/* COMPARE BUTTON */}
        <div className="productDetails__compareBtnBox">
          <div className="compareBtnBox__btn" onClick={compareHandler}>
            <p>Compare </p>
            <TbChartCandle className="compareBtn" />
          </div>
        </div>
        
        {/* PRODUCT INFO */}
        <div className="productDetails__product">
          {/* IMAGE */}
          <div className="product__image">
            <img src={dataDetails.data.image.url} alt="" />
          </div>
          <div className="product__details">
            {/* PRODUCT NAME */}
            <h2>{dataDetails.data.name}</h2>
            {/* DESCRIPTION */}
            <p>{dataDetails.data.description}</p>
            {/* COLORS */}
            <div className="details__colors">
              {dataDetails.data.general.colors.map((color, index) => {
                return (
                  <div key={index} onClick={colorHandler} customcolor={color.toLowerCase()} className="colors__color">
                    <div className="color__choice">
                      <div className={`color__circle ${color.toLowerCase()}`}> </div>
                    </div>
                    <p>{color}</p>
                  </div>
                )
              })}
            </div>
            <div className="product__retail">
              <div className="retail__pricestock">
                {/* PRICE */}
                <div className="pricestock__price">
                  <p>{dataDetails.data.price}</p>
                </div>
                {/* STOCK */}
                <div className="pricestock__stock">
                  <p>In stock: </p>
                  <div className={`stock__color ${dataDetails.data.general.stock > 0 ? "green" : "red"}`}> </div>
                </div>
              </div>
              <div className="retail__addToCard">
                <div className="addToCard__counter">
                  <div onClick={counterHandler} counter-attribute="minus" className="counter__minus">
                    <p>-</p>
                  </div>
                  <div className="counter__current">
                    <p>{counter}</p>
                  </div>
                  <div onClick={counterHandler} counter-attribute="plus" className="counter__plus">
                    <p>+</p>
                  </div>
                </div>
                <div className="addToCard__btn">
                  <button onClick={cartHandler}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCT SPECIFICATIONS */}
        <div className="product__spec">
            <div className="spec__header">
              <h2>Product Specifications</h2>
            </div>
            <div className="spec__info">
              <div className="info__attribute infoBox">
                <p>Power: </p>
                <p>Frequency: </p>
                <p>Distortion: </p>
                <p>Watt: </p>
                <p>Standby Watt: </p>
                <p>Dimensions: </p>
                <p>Weight: </p>
              </div>
              <div className="info__value infoBox">
                <p>{dataDetails.data.specifications.power}</p>
                <p>{dataDetails.data.specifications.frequency}</p>
                <p>{dataDetails.data.specifications.distortion}</p>
                <p>{dataDetails.data.general.watt}</p>
                <p>{dataDetails.data.general.standby_watt}</p>
                <p>{dataDetails.data.general.dimensions}</p>
                <p>{dataDetails.data.general.weight}</p>
              </div>
            </div>
        </div>

        {/* COMPARISSON */}
        <CompareBox idList={CompareContext} />
      </main>
    );
};

export default ProductDetails;

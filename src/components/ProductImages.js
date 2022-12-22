import {useState, useEffect} from "react"
import "./ProductImages.css"
const ProductImages = (props) => {
  const [imageNumber, setImageNumber] = useState(0)
    const [imageLink, setImageLink] = useState(props.product.image.url)
    console.log(imageLink)
    const imageLinks = [
        props.product.image.url,
        "https://www.pngrepo.com/png/74156/180/radio.png",
        "https://www.pngrepo.com/png/198264/180/car-radio.png"
    ]
  
    async function handleChange (e) {
      if (e.target.className === "slideButtonLeft") setImageNumber(0)
      if (e.target.className === "slideButtonMiddle") setImageNumber(1)
      if (e.target.className === "slideButtonRight") setImageNumber(2)
        console.log(e)
        setImageLink(imageLinks[imageNumber])
        console.log("handleChange:", imageNumber, imageLink)
    }
    const handleClick = (e) => {
      if (e.target.id === "slideLeft") setImageNumber((imageNumber + 4) % 3)
      if (e.target.id === "slideRight") setImageNumber((imageNumber + 1) % 3)
      console.log(e.target.id)
      console.log((imageNumber + 4) % 3,(imageNumber + 1) % 3)
      setImageLink(imageLinks[imageNumber])
      console.log("handleClick:", imageNumber, imageLink)
  }
  return (
    <div className="productImages">
    <span className="productImagesSlide" id="slideLeft" onClick={handleClick}>&lt;</span>
      <img src={imageLink} alt="" className="productImagesPicture" />
      <span className="productImagesSlide" id="slideRight" onClick={handleClick}>&gt;</span>
    <div className="productImagesRadio">
       {/*  <input type="radio" name="imageR" value="0"  checked onClick={handleChange}/>
        <input type="radio" name="imageR" value="1"  onChange={handleChange}/>
        <input type="radio" name="imageR" value="2"  onChange={handleChange}/> */}
        <div className="slideButtonLeft"  onClick={handleChange}></div>
        <div className="slideButtonMiddle"  onClick={handleChange}></div>
        <div className="slideButtonRight"  onClick={handleChange}></div>
    </div>
    </div>
  );
};

export default ProductImages;

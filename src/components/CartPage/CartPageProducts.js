
import ProductPic from "./images/1.png";
const CartPageProducts = () => {
    return ( <div className="CartPageContainer">
        <div className="CartPageContainerBox">
            <div className="CartPage--box">
                <div className="CartPage--product">
                    <img src={ProductPic} alt="1" />
                </div>
                <div className="CartPage--productText">
                    <p>Auralic Aries G2.1 Streamer</p>
                    <p><span class="dot"></span> In stock</p>
                </div>
                <div className="CartPageCounter">
            <button>-</button>
            <p>1</p>
            <button>+</button>
                </div>
                <div className="CartPagePrice">
                    <p>Price</p>
                </div>
            
            </div>

            <div className="SubTotalSection">
                 <p>Sub total <span className="orange"> £4,799.00 </span></p>
                 
            <button className="paymentButton">Go to payment</button>
            </div>
           
            
        </div>
        
    </div> );
}
 
export default CartPageProducts;
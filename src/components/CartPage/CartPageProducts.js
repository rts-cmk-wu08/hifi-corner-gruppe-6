
import ProductPic from "./images/1.png";
const CartPageProducts = () => {
    return ( <div className="CartPageContainer">
        <div className="CartPageContainerBox">
            <div className="CartPage--box">
                <div className="CartPage--product">
                    <img src={ProductPic} alt="1" />
                </div>
                <div className="CartPage--productText">
                    <p>ProductName</p>
                    <p>In stock</p>
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
                 <p>Sub total <span className="orange">Some price</span></p>
            <button className="paymentButton">Go to payment</button>
            </div>
           
            
        </div>
        
    </div> );
}
 
export default CartPageProducts;
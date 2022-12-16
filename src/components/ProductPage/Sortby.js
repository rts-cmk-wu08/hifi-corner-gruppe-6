import React,{useRef} from "react"
import "../../components/ProductPage/Sortby.css"
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

const Sortby = () => {
    const brandShowHide = useRef()
    const showHideFn = (e) =>{
        const accordion = brandShowHide.current
        console.log(e.currentTarget.classList)
        console.log(accordion.classList)
        accordion.classList.toggle("showHide")
        
        
    }
    const brandShowHide2 = useRef()
    const showHideFn2 = (e) =>{
        const accordion2 = brandShowHide2.current
        console.log(e.currentTarget.classList)
        console.log(accordion2.classList)
        accordion2.classList.toggle("showHide")
    }
    return ( 
        
        <div className="accordion">

            <h2>Sort By</h2>
            
            <div className="accordion-item">
                <div onClick={showHideFn} className="accordion-item-header">
                    <h3>Brand</h3>
                    <RiArrowDownSLine/>     
                </div>
                <div ref={brandShowHide} className="accordion-item-body showHide">
                    <div className="accordion-item-body-content">
                        <label htmlFor="steelseries">Steelseries</label>
                        <input className="check" type="checkbox" id="steelseries" name="steelseries"/>
                    </div>
                    <div className="accordion-item-body-content">
                        <label htmlFor="logitech">Logitech</label>
                        <input className="check" type="checkbox" id="logitech" name="logitech"/>
                    </div>
                    <div className="accordion-item-body-content">
                        <label htmlFor="apple">Apple</label>
                        <input className="check" type="checkbox" id="apple" name="apple"/>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div onClick={showHideFn2} className="accordion-item-header">
                    <h3>Color</h3>
                    <RiArrowDownSLine/>
                </div>
                <div ref={brandShowHide2} className="accordion-item-body showHide">
                    <div className="accordion-item-body-content">
                        <label htmlFor="white">White</label>
                        <input type="checkbox" id="white" name="white"/>
                    </div>
                    <div className="accordion-item-body-content">
                        <label htmlFor="black">Black</label>
                        <input type="checkbox" id="black" name="black"/>
                    </div>
                    <div className="accordion-item-body-content">
                        <label htmlFor="apple">Apple</label>
                        <input type="checkbox" id="apple" name="apple"/>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <div className="accordion-item-header">
                   <h3>Price</h3> 
                </div>
                <div className="accordion-item-body">
                    <div className="accordion-item-body-content">
 
                    </div>
                </div>
            </div> 
        </div> 

     );
}
 
export default Sortby;
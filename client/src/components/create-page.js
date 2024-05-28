import Navbar from "./Navbar"
import "./assets/css/create-page.css"
import Towel from "./assets/images/towel.jpg"
import WashingMachine from "./assets/images/washing-machine.png"
import Iron from "./assets/images/ironing.jpg"
import Bleach from "./assets/images/bleach.jpg"
import { useNavigate } from "react-router-dom"
import Shirts from "./assets/images/shirt.jpg"
import TShirts from "./assets/images/tshirt.jpg"
import Trousers from "./assets/images/trouser.jpg"
import Jeans from "./assets/images/jeans.jpg"
import Boxers from "./assets/images/boxers.jpg"
import Joggers from "./assets/images/joggers.jpg"
import Others from "./assets/images/others.jpg"
import { SideBar } from "./side-bar"
import { useState } from "react"
import { Footer } from "./footer"
import { useDispatch, useSelector } from "react-redux"
import{addValue,addName,addPrice,addWashType,confirmOrder} from "./laundry-slice/laundry-order"
export const Create=()=>{
    let item = ["Shirts", "TShirts", "Trousers", "Jeans", "Boxers", "Joggers", "Others"]
    let images=[Shirts, TShirts, Trousers, Jeans, Boxers, Joggers, Others]
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const obj =useSelector(state=>state.data.products)
    console.log(obj)
    return (
        <>
       <div className="container">
<Navbar/>
<div style={{display:"flex"}}>
<SideBar/>
<div className="order-detail">
    <div><b>Create Order</b></div>
<div className="order-description">
    <div>Product Types</div>
    <div>Qunatity</div>
    <div>Wash Type</div>
    <div></div>
</div>
{item.map((product,i)=>{
    return(
        <>
        <div className="order-items">
        <div style={{display:"flex",alignItems:"center"}}>
            <img src={images[i]} className="clothe-img" alt={`${product} image`}/>
            <span style={{color: " #1D2022",marginLeft:"10px",marginTop:"3px"}}>{product}</span>
        </div>
        <div className="qunatity-box">
            <input type="text" className="input-box" id={product} onChange={(e)=>{
                                        dispatch(addName(product));
                                        dispatch(addValue(e.target.value))
                                    }}/>
        </div>
        <div className="wash-type">
            <img src={WashingMachine} alt="Washing,"onClick={(e)=>{
                                            dispatch(addPrice(20))
                                            dispatch(addWashType(e.target.alt))
                                        }}/>
            <img src={Iron} alt="Ironing," onClick={(e)=>{
                                            dispatch(addPrice(10))
                                            dispatch(addWashType(e.target.alt))
                                        }}/>
            <img src={Towel} alt="Towel," onClick={(e)=>{
                                            dispatch(addPrice(30))
                                            dispatch(addWashType(e.target.alt))
                                        }}/>
            <img src={Bleach} alt="Chemical wash," onClick={(e)=>{
                                            dispatch(addPrice(40))
                                            dispatch(addWashType(e.target.alt))
                                        }}/>
        </div>
        <div><button className="confirm-button" onClick={()=>{dispatch(confirmOrder())}}>Confirm</button></div>
        </div>
        <hr></hr>
        </>
    )
})}
<div className="proceed-button">
    <button><b>Cancel</b></button>
    <button style={{backgroundColor:"#5861AE"}} onClick={()=>{navigate("/order-preview")}}><b>Proceed</b></button>
</div>
</div>

</div>
  
</div>
<Footer/> 
        
        </>
    )
}
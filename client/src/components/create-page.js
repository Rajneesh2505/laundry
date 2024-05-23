import Navbar from "./Navbar"
import "./assets/css/create-page.css"
import Towel from "./assets/images/towel.jpg"
import WashingMachine from "./assets/images/washing-machine.png"
import Iron from "./assets/images/ironing.jpg"
import Bleach from "./assets/images/bleach.jpg"

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
export const Create=()=>{
    let item = ["Shirts", "TShirts", "Trousers", "Jeans", "Boxers", "Joggers", "Others"]
    let images=[Shirts, TShirts, Trousers, Jeans, Boxers, Joggers, Others]
    const [quantity,setQuantity]=useState(0)
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
    <div>Price</div>
</div>
{item.map((product,i)=>{
    return(
        <>
        <div className="order-items">
        <div style={{display:"flex",alignItems:"center"}}>
            <img src={images[i]} className="clothe-img" alt={`${product} image`}/>
            <span style={{color: " #1D2022",marginLeft:"10px",marginTop:"3px"}}>{product}</span>
        </div>
        <div>
            <input type="text"/>
        </div>
        <div className="wash-type">
            <img src={WashingMachine} alt="washing-machine"/>
            <img src={Iron} alt="ironing"/>
            <img src={Towel} alt="Towel-image"/>
            <img src={Bleach} alt="bleaching"/>
        </div>
        <div>-</div>
        </div>
        <hr></hr>
        </>
    )
})}
<div className="proceed-button">
    <button><b>Cancel</b></button>
    <button style={{backgroundColor:"#5861AE"}}><b>Proceed</b></button>
</div>
</div>

</div>
  
</div>
<Footer/> 
        
        </>
    )
}
import "./assets/css/order.css"
import { useState } from "react"
import { useSelector } from "react-redux"
export const OrderDetail=()=>{
    let item = ["Shirts", "TShirts", "Trousers", "Jeans"]
    const products=useSelector(state=>state.data.products)
    const [store,setStore]=useState({location:"",storeaddress:"",phone:"",customerAddress:""})
    const pickUpPrice=90
   const storeAddress={
    "Vasant kunj":["No. 9 Kishangarh Vasant Kunj, Delhi","147896325"],
    "Khan market":["Shop Number 3A Khan Market, Delhi","159874632"],
    "Mayur vihar":["Chilla Village Mayur Vihar, Delhi","123654789"]
   }
   console.log(store)
    const total=products.reduce((a,b)=>{
return a+(b.price*b.quantity)
    },0)
    return (
        <>
        <div className="order-container">
<div className="order-header">
    <span>Summary</span>
    <span>X</span>
</div>
<div className="store-detail">
   <div>
    <span style={{opacity:".3"}}><b>Store Location</b></span>
    <select name="storeAddress" onChange={(e)=>{
        setStore(prev=>{return {
            ...prev,
            location:e.target.value,
            storeaddress:storeAddress[e.target.value][0],
            phone:storeAddress[e.target.value][1]
        }})
    }}>
        <option value=""></option>
        <option value="Vasant kunj">Vasant kunj</option>
        <option value="Khan market">Khan market</option>
        <option value="Mayur vihar">Mayur vihar</option>
    </select>
   </div>
    <div>
        <div>Store Address :</div>
       {store.location && <div>{storeAddress[store.location][0]}</div>}
    </div>
    <div>
    <div>Phone</div>
    {store.location && <div>{storeAddress[store.location][1]}</div>}
    </div>
</div>
<div className="Order-Detail">
    <span>Order detail</span>
    {
        products.map(Item=>{
            return (
                <>
                <div className="show-orders">
                <div>{Item.ProductName}</div>
                <div>{Item.washtype}</div>
                <div>{`${Item.quantity}x${Item.price}=`}</div>
                <div>{Item.price*Item.quantity}</div>
                </div>
                <hr style={{width:"800px",marginLeft:"5%"}}></hr>
                </>
            )
        })
    }
<div className="sub-total"><span>Sub Total:</span><span>{total}</span></div>
<hr className="last-hr"></hr>
<div className="pickup-charge"><span>Pickup Charges:</span><span>{pickUpPrice}</span></div>

</div>
<div className="order-header total">
<span>Total:</span>
<span className="total-amt">Rs {total+pickUpPrice}</span>
</div>
<div className="address">
    <span>Address</span>
</div>
<div className="confirmFooter">
    <button>Confirm</button>
</div>
        </div>
        </>
    )
}
import "./assets/css/order.css"
import { useNavigate } from "react-router-dom"
export const OrderCancel=()=>{
    let item = ["Shirts", "TShirts", "Trousers", "Jeans"]
    const navigate=useNavigate()
    return (
        <>
        <div className="order-container">
<div className="order-header">
    <span>Summary</span>
    <span onClick={()=>{navigate("/order-detail")}}>X</span>
</div>
<div className="store-detail">
   <div>
    <span style={{opacity:".3"}}><b>Store Location</b></span>
    <select>
        <option></option>
    </select>
   </div>
    <div>
        <div>Store Address :</div>
        <div>any address</div>
    </div>
    <div>
    <div>Phone</div>
    <div>123456789</div>
    </div>
</div>
<div className="order-track">
<div className="circle"></div>
<div className="track-text">Picked</div>
<hr style={{width:"150px",height:"0px",marginLeft:"10px"}}></hr>
<div className="circle"></div>
<div className="track-text">Washed</div>
<hr style={{width:"150px",height:"0px"}}></hr>
<div className="circle"></div>
<div className="track-text">Ironed</div>
<hr style={{width:"150px",height:"0px"}}></hr>
<div className="circle"></div>
<div className="track-text">Delivered</div>

</div>
<div className="Order-Detail">
    <span>Order detail</span>
    {
        item.map(ItemName=>{
            return (
                <>
                <div className="show-orders">
                <div>{ItemName}</div>
                <div>Washing,Ironing</div>
                <div>5X20=</div>
                <div>100</div>
                </div>
                <hr style={{width:"800px",marginLeft:"5%"}}></hr>
                </>
            )
        })
    }
<div className="sub-total"><span>Sub Total:</span><span>400</span></div>
<hr className="last-hr"></hr>
<div className="pickup-charge"><span>Pickup Charges:</span><span>90</span></div>

</div>
<div className="order-header total">
<span>Total:</span>
<span className="total-amt">Rs 490</span>
</div>
<div className="address">
    <span>Address</span>
</div>
<div className="cancel-order">
    <button onClick={()=>{navigate("/cancel-order")}}>Cancel Order</button>
</div>
        </div>
        </>
    )
}
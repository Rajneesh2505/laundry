import Navbar from "./Navbar"
import { Footer } from "./footer"
import { SideBar } from "./side-bar"
import { useNavigate } from "react-router-dom"
import "../components/assets/css/order-detail.css"
export const OrderDetail=()=>{
    const navigate=useNavigate()
    const detail=[{
        orderId:1,
        orderDate:new Date(),
        StoreLocation:"Jp Nagar",
        City:"Bangaluru",
        storePhone:"123456789",
        totalItem:5,
        price:200,
        status:"in washing",
    },
    {
        orderId:2,
        orderDate:new Date(),
        StoreLocation:"Jp Nagar",
        City:"Bangaluru",
        storePhone:"123456789",
        totalItem:5,
        price:200,
        status:"in washing",
    },
    {
        orderId:3,
        orderDate:new Date(),
        StoreLocation:"Jp Nagar",
        City:"Bangaluru",
        storePhone:"123456789",
        totalItem:5,
        price:200,
        status:"in washing",
    },
    {
        orderId:4,
        orderDate:new Date(),
        StoreLocation:"Jp Nagar",
        City:"Bangaluru",
        storePhone:"123456789",
        totalItem:5,
        price:200,
        status:"in washing",
    }]
    return (
        <>
     <div className="detail-container">
        <Navbar/>
        <div className="order-chart-container">
<SideBar/>
<div>
<div className="order-chart">
    <div>Order Id</div>
    <div>Order Date & Time</div>
    <div>Store Location</div>
    <div>City</div>
    <div>Store Phone</div>
    <div>Total Items</div>
    <div>Price</div>
    <div>Status</div>
    <div></div>
    <div>View</div>
    </div>
<div>
{detail.map(item=>{
    return (
        <>
        <div className="Orders-info">
<div>{item.orderId}</div>
<div>{item.orderDate.toString().slice(0,21)}</div>
<div>{item.StoreLocation}</div>
<div >{item.City}</div>
<div>{item.storePhone}</div>
<div>{item.totalItem}</div>
<div>{item.price}</div>
<div>{item.status}</div>
<div></div>
<div onClick={()=>{navigate("/order-cancel")}}>
    view
</div>
        </div>
        <hr style={{width:"1240px",height:"0px",marginLeft:"26px"}}></hr>
        </>
    )
})}
</div>
</div>
</div>
        <Footer/>
     </div>
        </>
    )
}
import "./assets/css/order-place.css"
export const OrderPlace=()=>{
return (
    <>
    <div className="order-place-container">
<div>
<span>&#10003;</span>
</div>
<div className="order-text">
Your order is successfully placed.
</div>
<div className="track-text">
You can track the delivery in the "Orders" section.
</div>
    <button className="track-button">Go to orders</button>

    </div>
    </>
)
}
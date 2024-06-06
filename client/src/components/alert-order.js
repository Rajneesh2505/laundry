import "./assets/css/alert-order.css"
import { useNavigate } from "react-router-dom"
export const CancelAlert=()=>{
    const navigate=useNavigate()
    return (
        <>
        <div className="alert-box">
            <div className="alert-header">
<span>Alert</span>
<span onClick={()=>{navigate("/order-cancel")}}>X</span>
            </div>
            <div className="alert-text">
                <img src="https://img.icons8.com/?size=100&id=Sb9rYobIrMId&format=png&color=000000"/>
           <p> Are you sure want to cancel the oreder No: OR1213</p>
            </div>
            <button onClick={()=>{navigate("/order-detail")}}>Proceed</button>
        </div>
        
        </>
    )
}
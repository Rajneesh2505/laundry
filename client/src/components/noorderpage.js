import Navbar from "./Navbar";
import { SideBar } from "./side-bar";
import "../components/assets/css/noorder.css"
import { useNavigate } from "react-router-dom";
import { Footer } from "./footer";
const Noorder = ()=>{
    const Navigate = useNavigate();
    const handleclick=()=>{
      
      Navigate('/create-order')
    }
    return(
        <div className="noorder">
          <Navbar/>
          <SideBar/>
          <span id="span">No Orders avaialble</span>
          <button id="createbutton" onClick={handleclick}>Create</button>
          <Footer/>
        </div>
    )
}
export default Noorder;
import "./assets/css/side-bar.css"
import Home from "./assets/images/home.jpg"
import List from "./assets/images/list.png"
import More from "./assets/images/more.jpg"
export const SideBar=()=>{
    return(
        <>
<div className="side-bar">
<img src={Home} className="home"/>

<span><img src={More} className="more"/></span>
<img src={List} className="list"/>
</div>
        </>
    )
}
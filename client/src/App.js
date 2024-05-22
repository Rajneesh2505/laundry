
import Navbar from './components/Navbar';
import './App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Create } from './components/create-page';
import { SideBar } from './components/side-bar';
function App() {
  return (
    <>
    {/* <Create/> */}
      
     <BrowserRouter>
       <Routes>
        <Route path='/register' element={<Register></Register>}/>
        <Route path="/home" element={<Signin/>}></Route>
        <Route path="/" element={<Create/>}></Route>
        {/* <Route path="/" element={<SideBar/>}></Route> */}
       </Routes>
     </BrowserRouter>
    </>
    
  )
}

export default App;

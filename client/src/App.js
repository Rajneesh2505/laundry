 import './components/assets/css/App.css'
import Main from './components/Main'
// import Navbar from './components/Navbar';
import './components/assets/css/App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Create } from './components/create-page';
import { OrderDetail } from './components/order-detail'
import { OrderCancell } from './components/order-cancel'
import { OrderPlace } from './components/order-place'
function App() {
  return (
    <>
  <Create/>
    {/* <BrowserRouter>
       <Routes>
        <Route path="/" element={<Signin/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
       </Routes>
      </BrowserRouter> */}
    </>
    
  )
}

export default App;

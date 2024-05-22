 import '../src/components/Assets/App.css'
// import Main from './components/Main'
// import Navbar from './components/Navbar';
import './components/assets/css/App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Create } from './components/create-page';
function App() {
  return (
    <>
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

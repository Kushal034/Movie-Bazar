// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homepage from "./constants/homepage";
import DrawerAppBar from "./components/header";
import Footer from "./components/common/footer";
import MediaCard from "./constants/homepage";
import Login from "./constants/loginpage";


function App() {
  return (
    <>
    <div className="App">
     <BrowserRouter>
     <DrawerAppBar/>
     <Routes>
     <Route path="/home" element={<Homepage/>}/>
     <Route path="/login" element={<Login/>}/>
     </Routes>
     <Footer/>
   
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;

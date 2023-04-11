import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './components/sideBar/sign';
import Home from './components/sideBar/alert'
import SignUp from './components/sideBar/signup';
import Product from './components/product';
import AddProduct from './components/addProduct';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sign" element={<SignIn/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/add" element={<AddProduct/>}></Route>
    </Routes>
  </BrowserRouter> 
  );
}
export default App;

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.css";
import { Navigate, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userlist from "./pages/userList/Userlist";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    <Navigate to="/" />
  }, [])

  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        
        <Routes>
          <Route path="/"  element= {<Home />} />
          <Route path="/users"  element={<Userlist />} />
          <Route path="/user/:userId"  element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

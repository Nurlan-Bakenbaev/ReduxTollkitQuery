import AllProducts from "./components/AllProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpecificItem from "./components/SpecificItem";
import AddNewProduct from "./components/AddNewProduct";
import "./index.css";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SpecificItem />} />
          <Route path="/product/addItem" element={<AddNewProduct />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

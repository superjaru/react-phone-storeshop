import { Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

// zabaaaaaaaaaaa
function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        {/* มี exact เพราะต้องการให้ path เป๊ะๆ ถ้าไม่ใส่ path="/" คือเอาทุกแบบ ดังนั้นมันจะ route ไปอันอื่นไม่ได้นอกจะย้ายบรรทัดมันไปอยู่ล่างสุด ซึ่งมันค่อนข้าง  brute force */}
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;

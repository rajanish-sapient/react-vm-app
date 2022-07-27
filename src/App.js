import "./App.css";
import Orders from "./orders/Orders";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;

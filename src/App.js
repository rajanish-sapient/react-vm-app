import './App.css';
import Orders from './orders/Orders';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="orders" element={<Orders />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </div>
  );
}

export default App;

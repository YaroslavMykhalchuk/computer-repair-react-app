import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import { Layout } from '../layout/Layout';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import LaptopRepair from '../pages/laptopRepair/LaptopRepair';
import Warranty from '../pages/warranty/Warranty';
import Price from '../pages/price/Price';
import Contact from '../pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="services" element={<LaptopRepair/>} />
            <Route path="warranty" element={<Warranty/>} />
            <Route path="price" element={<Price/>} />
            <Route path="contacts" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

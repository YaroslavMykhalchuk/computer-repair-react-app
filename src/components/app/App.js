import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import { Layout } from '../layout/Layout';

import Home from '../pages/home/Home';
import About from '../pages/about/About';
import LaptopRepair from '../pages/laptopRepair/LaptopRepair';
import Warranty from '../pages/warranty/Warranty';
import Price from '../pages/price/Price';
import Contact from '../pages/contact/Contact';
import ComputerRepair from '../pages/computerRepair/ComputerRepair';
import PhoneRepair from '../pages/phoneRepair/PhoneRepair';
import Error from '../pages/error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About/>} />
            <Route path="services/notebooks" element={<LaptopRepair/>} />
            <Route path="services/computers" element={<ComputerRepair/>} />
            <Route path="services/phones" element={<PhoneRepair/>} />
            <Route path="warranty" element={<Warranty/>} />
            <Route path="price" element={<Price/>} />
            <Route path="contacts" element={<Contact/>} />
            <Route path="*" element={<Error code="404" message="Сторінка не знайдена"/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from "../src/Components/navbar/Navbar"
import Home from './Components/home/Home';
import Product from './Components/Product/Product';
import Popular from './Components/popular_product/Popular';
import SpecialOffer from './Components/special-offer/SpecialOffer';
import Service from './Components/service/Service';
import Brands from './Components/brands/Brands';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Slider from './Components/slider/Slider';
import slides from "../src/demo.json";
// import slides from '../src/mock.json'
function App() {
  return (
   <div>
    <Navbar/>
    <Home />
    <Slider slides={slides}/>
    <Product />
    <SpecialOffer/>
    <Popular/>
    <Service/>
    <Brands/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;

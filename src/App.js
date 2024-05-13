import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from './Componenets/Navbarsection';
import Herosection from './Componenets/Herosection';
import Products from './Componenets/Products';
import Productinfo from './Componenets/Productinfo';
import Testomonials from './Componenets/Testomonials';
import Footersection1 from './Componenets/Footersection1';
import Footer from './Componenets/Footer';


function App() {
  return (
    <div>
      <Navbarsection />
      <Herosection/>
      <Products/>
      <Productinfo/>
      <Testomonials/>
      <Footersection1/>
      <Footer/>
    </div> 
  );
}

export default App;

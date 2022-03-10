
import './App.css';
import Cards from './Components/Cards/Cards';
import Topbar from './Components/Topbar/Topbar';
import About from './Components/About/About';
import OurMenu from './Components/OurMenu/OurMenu';
import Contact from './Components/Contact/Contact';
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"




function App() {
  return (
    <>
      <Cards/>
      <Topbar/>
      <About/>
      <OurMenu/>
      <Contact/>
    </>
      
      
    
  );
}

export default App;

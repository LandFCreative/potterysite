
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Design from './components/Design';
import Pottery from './components/Pottery';
import Contact from './components/Contact';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    
      <>
<Navbar />
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/design" element={<Design />} />
  <Route path="/pottery" element={<Pottery />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      </>
  
 
  );
}

export default App;
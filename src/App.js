import './App.css';
import HeroSection from './Components/Hero/Hero.js';
import Navbar from './Components/Nav/Nav.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <HeroSection/>
    </BrowserRouter>
  );
}

export default App;

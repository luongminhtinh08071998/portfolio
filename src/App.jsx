
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import ScrollActive from './ScrollActive';

function App() {

  return (
    <div>
      <ScrollActive />
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

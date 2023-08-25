import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import HeroSection from './Components/HeroSection/HeroSection';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
  
      <Navbar />
      <Carousel />
      <HeroSection  />
      <Main />
       <Footer />
       

    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle' ;
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import Jumbotron from './components/jumbotron/Jumbotron';
import Menue from './components/menue/Menue';


function App() {
  return (
    <div className="App">
   
    <Header />  
    <HeroSection />  
    <Jumbotron />
    <Menue />
    </div>


  );
}

export default App;

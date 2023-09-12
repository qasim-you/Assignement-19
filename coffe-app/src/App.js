import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle' ;
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';
import Jumbotron from './components/jumbotron/Jumbotron';
import Menue from './components/menue/Menue';
import Main from './components/main/Main';
import Client from './components/client/Client';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
   
    <Header />  
    <HeroSection />  
    <Jumbotron />
    <Menue />
    <Main />
    <Client />
    <Newsletter />
    <Footer />

    </div>


  );
}

export default App;

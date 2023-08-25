
import './App.css';
import Hr from './common/Hr';
import Footer from './components/footer/Footer';
import Frequently from './components/frequently/Frequently';
import Header from './components/header/Header';
import HeroSec from './components/heroSec/HeroSec';

function App() {
  return (
    <div className="App">
    <Header />
    <Hr />
    <HeroSec />
    <Frequently />
    <Footer />
    </div>
  );
}

export default App;

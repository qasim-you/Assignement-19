import './App.css';
import Clients from './components/clients/Clients';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Services from './components/service/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

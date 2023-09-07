
import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Mains from './components/main/Mains';
import Tournament from './components/tournamebt/Tournament';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">

  <Navbar />
  <Header />
  <Mains />
  <Tournament />
  <Form />
  <Footer />
    </div>
  );
}

export default App;


import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import MainPage from './Components/MainPage';
import Team from './Components/Team';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './Styles/App.css'


function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Team' element={<Team/>}/>
        <Route path='Contact' element={<Contact/>}/>
      </Routes>
    </div>
    <footer>
      <Footer />
    </footer>
  </>
  );
}

export default App;

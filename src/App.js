import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login'
import {MENUS, users} from './Utility/data'
import Header from './Components/Header'
import Footer from './Components/Footer';

function App() {
  const loginCheck = () => {
    
  } 
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={MENUS[0].url} element={<Home />} />
        <Route path={MENUS[1].url} element={<About />} />
        <Route path={MENUS[2].url} element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

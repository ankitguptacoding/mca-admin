import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/HomePage/HomePage';
import About from './containers/AboutPage/AboutPage';
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {
  const [isOpenBar, setIsOpenBar] = useState(true);
  const toggle = () => setIsOpenBar(!isOpenBar);
  return (
     <Navbar isOpenBar= {isOpenBar} toggle= {toggle} >
     <Sidebar isOpenBar= {isOpenBar}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </Sidebar>
    </Navbar>
    
  );
}

export default App;

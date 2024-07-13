import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Posts from './Posts';
import dog from './dog.png';
import dog1 from './dog1.png';
import { useState } from 'react';

function App() {
  // const [tab,settab] = useState["Home"];
  let Postdetails= [{dogimage : dog,dogname : "Lebrador",dogft : "This dog is known for its smartness"},
        {dogimage : dog1,dogname : "Rottweiler",dogft : "This dog is known for its Strength"}];
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className='navdiv'> 
      <Navbar></Navbar>
      <Posts Postdetail = {Postdetails[0]}></Posts>
      <Posts Postdetail = {Postdetails[1]}></Posts>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

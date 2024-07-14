import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import dog from './dog.png';
import dog1 from './dog1.png';
import { useState } from 'react';
import Form from './Form';
import PostList from './PostList';
import Postlistprovider from './Store';

function App() {
  const [tab,settab] = useState("");
  let Postdetails= [{dogimage : dog,dogname : "Lebrador",dogft : "This dog is known for its smartness"},
        {dogimage : dog1,dogname : "Rottweiler",dogft : "This dog is known for its Strength"}];
  return (
    <Postlistprovider>
    <div className="App">
      <Sidebar tab = {tab} settab= {settab}></Sidebar>
      <div className='navdiv'> 
      <Navbar></Navbar>
      {tab==="Home" ? 
      (<PostList Postdetails1 ={Postdetails}></PostList>
      ) : (<Form></Form>)}
      
      
      <Footer></Footer>
      </div>
    </div>
    </Postlistprovider>
  );
}

export default App;

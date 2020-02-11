import React from 'react';
import logo from './logo.svg';
import './App.css';
import { pOne, pTwo, pThree } from './Directions';
// import Directions from './Directions';
import Header from './Header';
import LeftList from './LeftList'
import RightList from './RightList'
import Footer from './Footer'






function App() {
  return (
    
    <div>
    <Header />
    <div>
    

      <section>
        <h1>Chocolate Pizza</h1>
        <h6>POSTED ON 15 DEC 2013 / DESSERTS</h6>
        <img src="print-icon.png"/>
      </section>
    </div>

    <div>
      <section className="pizzaPic">
        <img src="choco-pizza.png"/>
      </section>
    </div>

    <div id="directions">
      {pOne}
      {pTwo}
      {pThree}
    </div>
        
       

    <div id="ingredients">
      <LeftList  />
      <RightList />
      {/* <img src="list-bg.png"/> */}
    </div>

  
    <div id="footer">
      <Footer />
      <img id="face" src="van-pic.png"></img>
    </div>
    </div>
  );
}
export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Header from 'Header'
import Body from 'Body'
// import Footer from 'Footer'
function LeftL(props) {
    const content = (
    <ul>
        {props.leftLists.map((leftList) =>
        <li key={leftList.content}></li>
        )}
    </ul>
    );
    return (
        <div>
            {leftL}
        </div>
    );
  }
  const leftLists = [
  {id: 1, content:'1 1/2 cups milk'},
  {id: 2, content:'1/2 cup mascarpone'},
  {id: 3, content:'1/2 tps pink salt'},
  {id: 4, content:'1 lb Black Mission Figs'},
  {id: 5, content:'1/2 cup brown sugar'},
  {id: 6, content:'2-4 tbsp water'}
  ];
  
  ReactDOM.render(
    <LeftL leftLists={leftLists} />,
    document.getElementById('')
  );   


function App() {
  return (
  
    <div> 
      <header>
        <img src="small-logo.png"/>
        <h1>Delicious</h1>
        <h6>THE BEST FOOD BLOG ON THE WEB</h6>
        <img src="fb-icon.png"/>
        <img src="twit-icon.png"/>
        <img src="gp-icon.png"/>
        <img src="insta-icon.png"/>
        <img src="flic-icon.png"/>
        <img src="pint-icon.png"/>
        <img src="rss-icon.png"/>
        <img src="mail-icon.png"/>
      </header>
    </div>

    <div>
      <section>
        <h1>Chocolate Pizza</h1>
        <h6>POSTED ON 15 DEC 2013 / DESSERTS</h6>
        <img src="print-icon.png"/>
      </section>
    </div>

<body>
    <div className="">
      <section className="pizzaPic">
        <img src="choco-pizza.png"/>
      </section>
    </div>
<body/>

    <div className="paragraph-container">
      <section className="paragraph">
  <p>sentence1:{String(this.props.paragrapgh}</p>
        <p></p>
        <p></p>
      </section>
    </div>

    <div>
      <ul className="ingredients">
        <img src="list-bg.png"/>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div>
      <footer>
        <img src="van-pic.png"/>
        <h3>Vanessa Stevenson</h3>
        <p></p>
      </footer>
    </div>
  </div>
  );
}
export default App;
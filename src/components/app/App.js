import {useState, useEffect} from 'react';
import Photo from '../picture/picture.component'
import IMGS from '../images/images.component'
import logo from '../../icons/logo.svg'


import './App.css';

function App() {
  const [imgArray] = useState(IMGS)
    


  return (
    <div>
      <div className="nav-bar">
        <div className="heading"><img src={logo} alt="logo" /></div>
        <ul><li>get in touch!</li>
        <li>about</li></ul>
      </div> 
      <div className="container">
      <div className="content">
      {imgArray.map(({id, url,name}, index)=>
      <Photo key={index} id={id} url={url} name={name} />
      )}
      </div>
      </div>
    </div>
  );
}

export default App;

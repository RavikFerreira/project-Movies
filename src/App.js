import React from 'react';
import './App.css';
import Login from './components/Login/login';

function App() {
  return (
    <div className="App">
      <div className='banner'>
          <img id='imgTheMask' src="https://i.pinimg.com/564x/78/5f/c1/785fc1c7fb350cc57b7cabf06f7a9f8f.jpg" alt='imagem de um filme'/>
          <img id='imgLogan' src="https://i.pinimg.com/564x/39/a1/fb/39a1fb0be8e48a309f6881d84f720fac.jpg" alt='imagem de um filme'/>
          <img id='imgJoker' src="https://i.pinimg.com/564x/de/b7/72/deb772e3ac0173839f32f2b5f6c0b82d.jpg" alt='imagem de um filme'/>
          <img id='imgSmile' src="https://i.pinimg.com/564x/8c/35/f6/8c35f629a301409cb7d2f3d6cabb3350.jpg" alt='imagem de um filme'/>
          <img id='imgIT' src="https://i.pinimg.com/564x/10/b3/1a/10b31a9a883366134d430d0167a6ad8e.jpg" alt='imagem de um filme'/>
          <img id='imgPanico' src="https://i.pinimg.com/564x/9a/1c/26/9a1c26fb05eb2df4abf8e2f0683df7c4.jpg" alt='imagem de um filme'/>
          <img id='imgShazan' src="https://i.pinimg.com/564x/6e/5c/92/6e5c92f4a92a435adc1d8c77db39ecd8.jpg" alt='imagem de um filme'/>
          <img id='imgEstranho' src="https://i.pinimg.com/564x/c3/af/55/c3af55370cc325a7b273a3a3e1365e07.jpg" alt='imagem de um filme'/>
          <img id='imgGuardiao' src="https://i.pinimg.com/564x/11/32/55/113255356ba4345ba2733fdf7d2eaefb.jpg" alt='imagem de um filme'/>
        </div> 
        <Login/>
    </div>
    
)};

export default App;
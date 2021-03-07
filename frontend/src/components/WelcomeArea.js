import React from 'react'
import intro from '../images/Phone_Money.png'
import './components.css'
import './bootstrap-grid.css'

function WelcomeArea()
{
    return(

<body id="home" className="welcomeArea">
  
  <header id="header">
    <div className="container">
      <div className="row">
      <div className="col-sm" id="header">
          <h1>Welcome<br />Natasha!</h1>
           <p>
               _Gain cryptocurrency for using, trading, and purchasing renewable energy
               <br />
               _Experience the future of energy now!</p>
            </div>
            <div className="col-sm">
             <figure>
            <img src={intro} className="intro-img" alt=""/>
          </figure>
            </div>
        </div>
        </div>
        
  </header>
  </body>

  )
}

export default WelcomeArea
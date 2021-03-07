import React, { Component } from 'react';
import './components.css'
import './bootstrap-grid.css'

class Footer extends Component{
    render(){
    return(
<div>
 <footer id="contact">
     <div class="container">
          <div class="row">
          <div class="col-sm">
          
 <h2>Power Coin</h2>
 <p className="footerWhite">Gain cryptocurrency for using, trading, and purchasing renewable energy.</p>
 </div>
 <div class="col-sm">

 <h3 style={{fontSize:"20px"}}><a className="footerWhite" href="#home">Company</a></h3>
 <p><a href="#introduction">Introduction</a></p>
 <br/>
 <p><a href="marketplace">Marketplace</a></p>
 <br/>
 <p><a href="#sell">Sell your own</a></p>
 <br/>
 <p><a href="#account">Your account</a></p>
 </div>
 </div></div>
</footer>
</div>)
    }
}
export default Footer
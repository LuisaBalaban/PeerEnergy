import React, { Component } from 'react';
import key from '../images/Key.png'
import './components.css'
import './bootstrap-grid.css'

class UserProfile extends Component{
    render(){
    return(
     <div id="account">
         <h2 id="accountHeader">Your account</h2>
        <section className="account" id="sections">
            
        <div class="container">
            
          <div class="row">
              
            <div class="col-sm">
            
                <br/>
            <div classname="accountDetails">
               
                <div class="row">
            <p className="title">Your Coins</p>
            </div>
            <div class="row">
            <p className="value">100,123</p>
            </div>
            <br/>
            <div class="row">
            <p className="title">Your Energy Consumption</p>
            </div>
            <div class="row">
            <p className="value">958 kWh</p>
            </div>
            <br/>
            <div class="row">
            <p className="title">Coins Purchased this Week</p>
            </div>
            <div class="row">
            <p className="value">6,392</p>
            </div>
            <br/>
            <div class="row">
            <p className="title">Coins Traded this Week</p><br/>
            </div>
            <div class="row">
            <p className="value">190</p></div>
            <br/>
            <div class="row">
            <p className="title">User Name</p>
            </div>
            
             <div class="row">
            <p className="value">Natasha</p>
            <br/>
            </div>
            </div>
    </div>

              
            <div class="col-sm">
                
            <figure>
                <img className="keyImg" src={key} alt="key"></img>
              </figure>
            </div>
            </div>
            </div>
            </section>
            
        </div>
    )
    }
}
export default UserProfile
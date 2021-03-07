import React, { Component } from 'react';
import seat from '../images/Seat.png'
import './components.css'
import './bootstrap-grid.css'

class Introduction extends Component{
    render(){
    return(
     <div id="introduction">
        <section className="introduction" id="sections">
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <h2 style={{fontSize:"25px"}}>
              Introduction 
              </h2>
              <h3>How do we use blockchain?</h3>
              <p>Peer Energy uses a blockchain for assuring full-transparency and a decentralized market system for buying, trading and selling solar based renewable energy.
              </p>
              <p>
                We encourage our users to use Peer Energy by incetivizing the trade, selling or buying of renewable energy with our cryptooin, PowerCoin.
              </p>
              <p>
                PowerCoin can be saved and eventually be exchanged for giftcards and promotions at local marketplaces.
              </p>
            </div>
            <div class="col-sm">
            <figure>
                <img className="seatImg" src={seat} alt="seat"></img>
              </figure>
              
            </div>
            </div>
            </div>
            
            </section>
            
        </div>
    )
    }
}
export default Introduction
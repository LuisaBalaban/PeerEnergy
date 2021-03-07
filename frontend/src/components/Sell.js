import React, { Component } from 'react';
import chart from '../images/Chart.png'
import './components.css'
import './bootstrap-grid.css'

class Sell extends Component{
 
    render(){
    return(
     <div id="sell">
        <section className="introduction" id="sections">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h2 style={{fontSize:"25px"}}>Sell your own</h2>
              <p>
              Want to share the solar energy you produced with others from yout community?
              </p>
            </div>
            <div class="col-sm">
            <figure>
                <img className="chartImg" src={chart} alt="chart"></img>
              </figure>
              
            </div>
            </div>
            </div>
            
            </section>
            
        </div>
    )
    }
}
export default Sell
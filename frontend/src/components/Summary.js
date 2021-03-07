import React, { Component } from 'react';
import piechart from '../images/PieChart.png'
import './components.css'
import './bootstrap-grid.css'

class Summary extends Component{
    render(){
    return(
     <div>
        <section className="summary" id="sections">
        <div class="container">
          <div class="row">
            <div class="col-sm">
            <figure>
                <img className="pieChartImg" src={piechart} alt="piechart"></img>
              </figure>
            </div>
            <div class="col-sm">
           <h2>How it works</h2>
           <br/>
           <p style={{fontSize:"15px"}}>Explaining how it works here</p>
            </div>
            </div>
            </div>
            
            </section>
            
        </div>
    )
    }
}
export default Summary
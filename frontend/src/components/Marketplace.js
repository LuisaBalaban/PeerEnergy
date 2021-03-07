import React, { Component } from 'react';
import merchant from '../images/face4.png'
import './components.css'
import './bootstrap-grid.css'

class Marketplace extends Component{
  constructor(props)
    {
        super(props)
        this.state = {
          name:this.props.name}
          this.clickBuy = this.clickBuy.bind(this);
        }
        clickBuy(){
          this.setState({
            name:this.name}
        )
        window.alert("You just completed a transaction");
        }

    render(){
    return(
     <div id="marketplace">
        <section className="marketplace" id="sections">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <div class="row"></div>
            <h2 style={{fontSize:"40px",marginTop:"90px"}}>Get in touch with the locals!</h2>
           <br/>
           <p> 
             <ul style={{textAlign:"left"}}>
               <li>Trade with other local inverstors</li>
               <li>Get to see transparent records history</li>
               <li>Real time transaction feed</li>
               <li>Incetivized purchases</li>
             </ul>
           </p>
         
            </div>
            <div class="col-sm">
            <button onClick={this.clickBuy} class="merchantButtons"><img class="merchantImages" src={merchant} alt="merchant1"/><div className="btnText">
            <h2 style={{textAlign:'left'}}>{this.state.name}</h2>
            <p>Traded over 40,00kW
            <br/>
            Helped power over 120 houses
            <br/>
            A member since 2019</p>
            </div></button>
            {/* <button class="merchantButtons"><img class="merchantImages" src={merchant} alt="merchant1"/><div className="btnText">
            <h2>Ruth Hayes</h2>
            <p>Willing to negotiate an energy trade for 3,000 coins.</p>
            </div></button> */}
              </div>
            </div>
            </div>
            </section>
            
        </div>
    )
    }
}
export default Marketplace
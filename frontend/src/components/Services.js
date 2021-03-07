import React, { Component } from 'react';
import face4 from '../images/face4.png'
import face1 from '../images/face2.png'
import face2 from '../images/face3.png'
import face3 from '../images/face1.png'
import './components.css'
import './bootstrap-grid.css'

class Services extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
          name1:"Windel Family",
          name2:"Sarah&Marie",
          name3:"Laurie", 
          name4:"SunFarm",
          name5:"Locali",
          name6:"Sonea",
          name:"",
          price1:"100",
                }
                this.merchant1 = this.merchant1.bind(this)
          this.merchant2 = this.merchant2.bind(this)
          this.merchant3 = this.merchant3.bind(this)
          this.merchant4 = this.merchant4.bind(this)
          this.merchant5 = this.merchant5.bind(this)
          this.merchant6 = this.merchant6.bind(this)

            }

    merchant1()
        {       //TODO api call to get data for visualization
                this.setState({
                    name:this.name1}
                )
                    //  let path = `/#sell`;
                 }
                  merchant2()
        {       //TODO api call to get data for visualization
                this.setState({
                    name:this.name2}
                )
                    //  let path = `/#marketplace`;
                    }
                  merchant3()
        {       //TODO api call to get data for visualization
                this.setState({
                    name:this.name3}
                )
                    }
                  merchant4()
        {       //TODO api call to get data for visualization
                this.setState({
                    name:this.name4}
                )
                    }
                  merchant5()
        {       //TODO api call to get data for visualization
                this.setState({
                    name:this.name5}
                )
                    }
                  merchant6()
        {       //TODO api call to get data for visualization
                this.setState({
                    name:this.name6}
                )
                    }
                  
    render(){
    return(
        <div>
             <h2 id="servicesHeader">Marketplace</h2>
       
        <div className="centeredButtons"> 
         <div class="row">
        <button onClick={this.merchant1} class="serviceButtons"><img src={face4} alt="service"/><div>
        <h2 className="titleService">{this.state.name1}</h2>
        <p className="textService">SolarSUN is our most popular choice, as they not just are local, they support other small local businesses.</p>
        </div></button>
        <button onClick={this.merchant2} class="serviceButtons"><img src={face2} alt="service"/><div>
        <h2 className="titleService">{this.state.name2}</h2>
        <p className="textService">Waived is a local family company that has been around since 2007.</p>
        </div></button>
        <button  onClick={this.merchant3} class="serviceButtons"><img src={face1} alt="service"/><div>
        <h2 className="titleService">{this.state.name3}</h2>
        <p className="textService">Curo works with geothermal energy.</p>
        </div></button> 
           </div>
        <div class="row">
        <button onClick={this.merchant4} class="serviceButtons"><img src={face3} alt="service"/><div>
        <h2 className="titleService">{this.state.name4}</h2>
        <p className="textService">Rounding uses wind energy.</p>
        </div></button>
        <button onClick={this.merchant5} class="serviceButtons"><img src={face4} alt="service"/><div>
        <h2 className="titleService">{this.state.name5}</h2>
        <p className="textService"> Envo simply exists.</p>
        </div></button> <button onClick={this.merchant6} class="serviceButtons"><img src={face1} alt="service"/><div>
        <h2 className="titleService">{this.state.name6}</h2>
        <p className="textService">SunBulb uses solar renewable energy.</p>
        </div></button>
        </div></div>
        </div>
    //     <section className="services">
    //     <h2>Marketplace Services</h2>
       
    //         <div className="buttonsClass">
           
    //         </div>
    //   </section>
    )
    }
}
export default Services
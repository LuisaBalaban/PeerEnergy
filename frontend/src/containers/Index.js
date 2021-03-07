import React, { Component } from 'react';
import WelcomeArea from '../components/WelcomeArea';
import Introduction from '../components/Introduction'
import Summary from '../components/Summary'
import Marketplace from '../components/Marketplace';
import Services from '../components/Services';
import Sell from '../components/Sell'
import Footer from '../components/Footer';
import UserProfile from '../components/UserProfile';



class Index extends Component {
    render() {
      return (
        <div>
          <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#sell">Sell your own</a></li>
      <li><a href="#marketplace">Marketplace</a></li>
      <li><a href="#account">Your account</a></li>
      <li className="empty"></li>
    </ul>
  </nav>
         <WelcomeArea/>
         <Introduction/>
         <Summary/>
         <Services/>
         <Marketplace/>
         <Sell/>
         <UserProfile/>
         <Footer/>
        </div>)
    }
}

export default Index








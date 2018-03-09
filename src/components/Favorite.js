import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import '../css/styles.css';

class Header extends React.Component{
  render(){
    return(
        <header> 
          <div className="container">
            <Logo />
            <Nav />
            <div className="clearfix"></div>
          </div>
        </header>
      )
  }
}
export default Header
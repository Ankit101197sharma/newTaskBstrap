import React from 'react'
import classes from "./Topbar.module.css"

 function Topbar() {
  return (
      <>
      
    <div className='w3-top'>
        
    <div className="w3-bar w3-white w3-padding w3-card " style={{letterSpacing:'4px'}}>
    <a href="#home" className='navbar-brand' >Gourmet au Catering</a>
    
    <div className="w3-right w3-hide-small">
      <a  href="#about" className="w3-bar-item w3-button" >About</a>
      <a href="#menu" className="w3-bar-item w3-button"><span className={classes.menuIcon}>Menu</span></a>
      <a href="#contact" className="w3-bar-item w3-button">Contact</a>
    </div>
  </div>

        
</div>
<div className='w3-display-container w3-content w3-wide' style={{maxWidth:'1600px', minWidth:'500px'}}>
  <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"1600px", height:'800px'}} alt=" burger" />  
</div>
</>
  )
}
export default Topbar;
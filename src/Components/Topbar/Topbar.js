import React from 'react'
import classes from "./Topbar.module.css"

 function Topbar() {
  return (
      <>
      
    <div className='w3-top'>
        
    <div className="navbar navbar-light bg-light " style={{letterSpacing:'4px'}}>
    <a style={{marginLeft:'12px'}} href="#home" className='navbar-brand hover-overlay' >Gourmet au Catering</a>
    
    <div  className="d-flex justify-content-sm-end ">
      <a style={{border:'none', color:'black'}}  href="#about" className="btn btn-outline-secondary" >About</a>
      <a style={{border:'none', color:'black'}} href="#menu" className="btn btn-outline-secondary"><span className={classes.menuIcon}>Menu</span></a>
      <a style={{border:'none', color:'black'}} href="#contact" className="btn btn-outline-secondary">Contact</a>
    </div>
  </div>

        
</div>
<div style={{maxWidth:'1600px', minWidth:'500px'}}>
  <img src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{width:"1600px", height:'800px'}} alt=" burger" />  
</div>
</>
  )
}
export default Topbar;
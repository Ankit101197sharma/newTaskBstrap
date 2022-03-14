import React from 'react'
import classes from "./Topbar.module.css"

 function Topbar() {
  return (
      <>
      
    <div className='w3-top'>
        
    <div className="navbar navbar-light bg-white shadow p-2 " style={{letterSpacing:'4px'}}>
    <a style={{marginLeft:'12px',fontSize:'14px'}} href="#home" className='navbar-brand hover-overlay' >Gourmet au Catering</a>
    
    <div  className="d-flex justify-content-sm-end  m-1 ">
      <a  style={{border:'none'}} href="#about" className="btn btn-outline-light  text-dark  " >About</a>
      <a style={{border:'none'}} href="#menu" className="btn btn-outline-light text-dark"><span className={classes.menuIcon}>Menu</span></a>
      <a style={{border:'none'}} href="#contact" className="btn btn-outline-light text-dark">Contact</a>
    </div>
  </div>

        
</div>
<div style={{position:"relative"}}>
<div style={{maxWidth:'100%', minWidth:'500px'}}>
  <img className='img-fluid' src="https://www.w3schools.com/w3images/hamburger.jpg" style={{width:"1400px", height:'650px'}} alt=" burger" />  
  <div className={classes.sideText}>
  <h1 className='xxlarge'>Le Catering</h1>
</div>
</div>

</div>

</>
  )
}
export default Topbar;
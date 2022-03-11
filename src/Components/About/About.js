import React from 'react'
import {} from "./About.module.css"
 function About() {
     
  return (
    <>
    <div style={{padding:'70px'}}  className="row ">
        <div  className='col m-4  hide-small' >
            <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" className='w3-round w3-image w3-opacity-min' style={{width:'600px' ,height:"750px"}} alt="burgerking" />
        </div>
        <div   style={{marginTop:"16px"}} className='col m-6 padding-large' >
            <h1 className='text-center' >About Catering </h1><br />
            <h5 className='text-center'>Tradition since 1889</h5>
            <p className='text-large'>"The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use  "</p>
            <p style={{color:'grey'}} className='text-large  text-hide-medium '>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
           </div>
    
     </>
  )
}
export default About;
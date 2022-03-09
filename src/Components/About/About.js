import React from 'react'
import {} from "./About.module.css"
 function About() {
     
  return (
    <div style={{paddingTop:"64px", paddingBottom:"100px", backgroundColor:'aqua'}}  className="w3-row w-padding-64">
        <div className='w3-col m6 w3-padding-large w3-hide-small' >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCEn_tRLkVW2CYvSZqcL7myk-U2ECOeD4RIg&usqp=CAU" className='w3-round w3-image w3-opacity-min' style={{width:'600px' ,height:"750px"}} alt="burgerking" />
        </div>
        <div className='w3-col m6 w3-padding-large' >
            <h1 className='w3-center' >About Catering </h1><br />
            <h5 className='w3-center'>Tradition since 1889</h5>
            <p className='w3-large'>"The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use  "</p>
            <p className='w3-large w3-text-grey w3-hide-medium '>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
    </div>

  )
}
export default About;
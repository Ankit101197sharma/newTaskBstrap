import React from 'react'
import {} from "./Contact.module.css"

 function Contact() {
  return (
    <>
    <div  className='container'> 
        <div>
            <h1>Contact</h1>
            <p >We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p class="text-info text-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
            <p >You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

    <form  target="_blank">
      <p><input   class="form-control " type="text" placeholder="Name" required="" name="Name"/></p>
      <p><input class="form-control padding-16" type="number" placeholder="How many people" required="" name="People"/></p>
      <p><input class="form-control padding-16" type="datetime-local" placeholder="Date and time" required="" name="date" value="2020-11-16T20:00"/></p>
      <p><input class="form-control padding-16" type="text" placeholder="Message \ Special requirements" required="" name="Message"/></p>
      <p><button style={{backgroundColor:'#f1f1f1',color:'black', border:"0"}} class="btn btn-secondary " type="submit">SEND MESSAGE</button></p>
    </form>
        </div>
        
    </div>
    <div style={{padding:'44px', backgroundColor:'#f1f1f1', marginTop:'20px'}} className='text-center'>Powered By www.google.com</div>
    </>
  )
}
export default Contact;
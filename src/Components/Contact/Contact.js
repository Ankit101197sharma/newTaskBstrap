import React,{useState} from 'react'
import {} from "./Contact.module.css"

 function Contact() {
   const [Name , setName]= useState('');
   const [People, setPeople] = useState('');
   const [Date, setDate] = useState('');
   const [Text, setTextarea] = useState('');
   const submit = (e) => {
     e.preventDefault();
     const newEntry= {
       name:Name,
       people:People,
       date:Date,
       text:Text,

     };
     setName('');
     setPeople('');
     setDate('');
     setTextarea('');
     console.log(newEntry)
     alert( "form data : "  +  "name: "+ Name + ' ' +   People  + " " + Date  + " " + Text  );
   }
  return (
    <>
    <div  className='container'> 
        <div>
            <h1>Contact</h1>
            <p >We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="text-info text-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
            <p >You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

    <form  target="_blank" onSubmit={submit}>
      <p><input   className="form-control " type="text" placeholder="Name" required=""  value={Name} name="Name" onChange={(e) => setName(e.target.value)} /></p>
      <p><input className="form-control padding-16" type="number" value={People} placeholder="How many people" required="" people="People"  onChange={(e) => setPeople(e.target.value)} /></p>
      <p><input className="form-control padding-16" type="date" placeholder="Date " value={Date} required="" date="date"   onChange={(e) => setDate(e.target.value)}  /></p>
 
      <textarea className="form-control mb-2 w-9" rows="5" id="comment" text="text" value={Text} onChange={(e) => setTextarea(e.target.value)}></textarea>
      <p><button style={{backgroundColor:'#f1f1f1',color:'black', border:"0"}} class="btn btn-secondary " type="submit">SEND MESSAGE</button></p>
    </form>
        </div>
        
    </div>
    <div style={{padding:'44px', backgroundColor:'#f1f1f1', marginTop:'20px'}} className='text-center'>Powered By www.google.com</div>
    </>
  )
}
export default Contact;
import React,{useState} from 'react'
import {} from "./Contact.module.css"

 function Contact() {
  //  const initialValues = {name:"" , people:'' , date:'', text:""};
   const [formValues , setFormValues]= useState({
    Name:'',
    People:'',
    Date:'',
    Text:''
    
   });
   const [records, setRecords]= useState([]);
   
   const handleChange = (e) => {
     const name = e.target.name;
     const value= e.target.value;
    //  console.log(name, value)
     setFormValues({...formValues, [name]: value})
    }
   const handleSubmit = (e) => {
     e.preventDefault();
     
     const newReccord={...formValues}
     
     alert("form data :" + formValues.Name + " "+ formValues.People + " " + formValues.Date + " " + formValues.Text )
     setRecords([...records, newReccord]);
    //  setFormValues({name:" ", people:'', date:'', text:''})
    console.log(records)
   }
     
  return (
    <>
    <div  className='container'> 
        <div>
            <h1>Contact</h1>
            <p >We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className="text-info text-large"><b>Catering Service, 42nd Living St, 43043 New York, NY</b></p>
            <p >You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

    <form  target="_blank" onSubmit={handleSubmit}>
      <p><input   className="form-control " type="text" placeholder="Name" required=""  value={formValues.Name} name="Name" onChange={handleChange} /></p>
      <p><input className="form-control padding-16" type="number" value={formValues.People} placeholder="How many people" required=""  name="People"  onChange={handleChange} /></p>
      <p><input className="form-control padding-16" type="date" placeholder="Date " value={formValues.Date} required=""  name="Date"   onChange={handleChange} /></p>
 
      <textarea className="form-control mb-2 w-9" rows="5" id="comment" name="Text" value={formValues.Text} onChange={handleChange}></textarea>
      <p><button style={{backgroundColor:'#f1f1f1',color:'black', border:"0"}} class="btn btn-secondary " type="submit">SEND MESSAGE</button></p>
    </form>
        </div>
        
    </div>
    <div style={{padding:'44px', backgroundColor:'#f1f1f1', marginTop:'20px'}} className='text-center'>Powered By www.google.com</div>
    </>
  )
}
export default Contact;
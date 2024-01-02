import React from 'react'

function Contact() {
  return (
    <div className='main'>
       <div className='contact'>
         <h1 className='heading'>Contact</h1>
                <div className='form-inner'>
                <input type="text" name="name" placeholder="Your Name"/><br/>
                <input type="email" name="email" required placeholder="Your Email"/><br/>
                <input type="number" name="number" placeholder="Your Number"/><br/>
                <textarea placeholder='Message...' rows={4} cols={7}  > </textarea>
                <button type="submit" className="c-btn">Submit</button>
                </div>
          
            <div class="contact-content" >
                <div className='c-c'>
                    <h3>Call Us On</h3>
                    <i className="fa fa-phone"></i>
                    <p class="para">+91 8302459017</p>
                </div>
                <div  className='c-c'>
                    <h3>Email</h3>
                 <i class="fa fa-envelope"></i>
                    <p class="para">bgulnaz009@gmail.com</p>
                </div>
                <div  className='c-c'>
                    <h3>Location</h3>
                   <i class="fa fa-map-marker-alt"></i>
                    <p class="para">Jalmahal, Jaipur, Rajasthan</p>
                </div>
             </div>

        
       </div>
    </div>
  )
}

export default Contact

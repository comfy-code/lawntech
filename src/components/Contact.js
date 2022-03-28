export default function Contact(){
    return (
        <div>
            
        <div id="contact-section" className="contact-background">
            <div className="contact-form-background">
             <div className="row">
                    <div className=" column left">
                        <h1> Send Us a Message </h1>
                        <form>
                            <input type="text" placeholder="First Name"/>
                            <input type="text" placeholder="Last Name"/>
                            <input type="email" placeholder="Email Address" />
                            <input type="text" placeholder="Phone Number"/>
                            <textarea type="text" placeholder="Message" /> <br/>
                            <input type="submit" value="Send"/>
                        </form>
                    </div>

                    <div className=" column right" >
                         <h2> Info </h2>
                         <p> 5555 Statesville Rd, <br/>
                            Charlotte, NC,        55555 <br/>
                            704 - 555 - 5555 <br/>
                            info@LTL.com
                         </p>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    )
}
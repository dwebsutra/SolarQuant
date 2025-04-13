import React from "react";

function Contact(){

    return(
        <div>
            <h1>This is the Contact Page</h1>
                <form action="https://script.google.com/macros/s/AKfycbzihp5VVPCLs2V82l0dRHvEack638KA144SK0GM_ozwB8bqd1-SVqE9L0qL45JuKlkS/exec" method="POST" target="_blank" >
                    <label>
                        Name:<input name="name" type="text" required />
                    </label>
                    <br />
                    <label>
                        Contact Number:<input name="phone" type="text" required />
                    </label>
                    <br />
                    <label>
                        Email:<input name="email" type="email" required />
                    </label>
                    <br />
                    <label>Query:
                        <textarea name="message" required />
                    </label>
                    <br />
                    <button type="submit">Submit Form</button>
                </form>
        </div>
    )
}

export default Contact;
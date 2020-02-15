import React from 'react';
import './Contactus.scss';

class Contactus extends React.Component {

    render() {
        return (
            <div>
                <h3>Contact Form</h3>
                <div className="container">
                    <form>
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                        <label>Country</label>
                        <select id="country" name="country">
                            <option value="australia">Australia</option>
                            <option value="canada">Canada</option>
                            <option value="usa">USA</option>
                        </select>

                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Contactus;
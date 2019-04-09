import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <section id={"contact"}>
                <div className={"grid"}>
                    <form id={"contact-form"}>
                    <fieldset>
                        <div>
                            <label>Name *</label>
                            <input type={"text"} placeholder={"name required"} name={"name"} required/>
                        </div>
                        <div>
                            <label>Email Address *</label>
                            <input type={"text"} placeholder={"email required"} name={"email"} required/>
                        </div>
                        <div>
                            <label>Subject</label>
                            <input type={"text"} placeholder={"subject required"} name={"subject"} />
                        </div>
                        <div>
                            <label>Name *</label>
                            <textarea cols={"35"} rows={"10"} type={"text"} placeholder={"name required"} name={"name"} required/>
                        </div>
                    </fieldset>
                </form>

                </div>
            </section>
        );
    }
}

export default Contact;
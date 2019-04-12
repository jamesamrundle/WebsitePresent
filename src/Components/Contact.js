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
                            <input type={"text"} placeholder={"name required"} name={"name"} required
                                            onChange={this.props.onChange}/>
                        </div>
                        <div>
                            <label>Email Address *</label>
                            <input type={"text"} placeholder={"email required"} name={"email"} required
                                   onChange={this.props.onChange}/>
                        </div>
                        <div>
                            <label>Subject</label>
                            <input type={"text"} placeholder={"subject required"} name={"subject"}
                                   onChange={this.props.onChange}/>
                        </div>
                        <div>
                            <label>Message*</label>
                            <textarea cols={"35"} rows={"10"} type={"text"} placeholder={"message"} name={"name"}
                                      onChange={this.props.onChange}/>
                        </div>
                    </fieldset>
                        <button type={"submit"} className={"submit"} onClick={this.props.handleSubmit}> submit</button>
                </form>

                </div>
            </section>
        );
    }
}

export default Contact;
import React, { Component } from 'react';

class About extends Component {
   constructor(props){
       super(props)

       this.state= {me:{name: "James Rundle",
               bio:"Hi I am James I. I like eating bread. I like writing code. I like making money. Hire me.",
           phone:"816-777-8998",
           email:"jamesamrundle@gmail.com"},
                address:{street: "666 Gumdrop Lane",
                        city: "Charleston",
                        state: "South Carolina",
                        zip:"29411"}
                    }
       }


    render() {
        let {me,address} = this.state;
        return (


            <section id={"about"}>
                <div>
                    <div className={"pic"}>
                        <img className={"profile-pic"} src={require("../images/hiamjamz.jpg")} alt={"my handsome visage"}/>
                    </div>

                    <div className={"main-col"}>
                        <h3>About Me</h3>
                        <p>{me.bio}</p>

                        <div className={"contact-details"}>
                            <h3>Contact Details</h3>
                            <p>
                                <span>{me.name}</span> <br/>
                                <span>{address.street}</span> <br/>
                                <span>{address.city}, {address.state} {address.zip}</span> <br/>
                            </p>
                        </div>
                            <a style={{ float:"right"}} className={"button"} href={process.env.PUBLIC_URL+"/resume.pdf"} >Download Resume</a>

                            <p>
                                <span>{me.phone}</span> <br/>
                                <span>{me.email}</span> <br />
                            </p>


                    </div>
                </div>

            </section>
        );
    }
}

export default About;

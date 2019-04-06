import React, { Component } from 'react';

class About extends Component {
   constructor(props){
       super(props)

       this.state= {me:{name: "James Rundle",
               bio:"Hi I am James I. I like eating bread. I like writing code. I like making money. Hire me."},

                    }
       }


    render() {
        let {state} = this;
        return (


            <section id={"about"}>
                <div>
                    <div className={"main-col"}>
                        <h4>About Me</h4>
                        <p>{this.state.me.bio}</p>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;

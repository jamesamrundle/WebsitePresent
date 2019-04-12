import React, { Component } from 'react';
import About from "./Components/About"
import Header from"./Components/Header"
import Resume from "./Components/Resume"
import Footer from "./Components/Footer"
import Contact from "./Components/Contact"
import {data} from "./resumedata"
class App extends Component {

    constructor(props){
        super(props)
    this.state = {email: "",
                name: "",
                subject: "",
                message: ""
                }
    }       //remember to change path in About

    onChange = event => {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }


    handleSubmit = (event) =>{
        event.preventDefault()

        // if( this.validateEmail()) {

            const {
                REACT_APP_EMAILJS_RECEIVER: receiverEmail,
                REACT_APP_EMAILJS_TEMPLATEID: template
            } = process.env

            this.sendFeedback(
                template,
                receiverEmail,
                this.state.email,
                this.state.name,
                this.state.subject,
                this.state.feedback)

            this.setState({
                formSubmitted: true
            })
        // }
    }

    sendFeedback (templateId, receiverEmail,  email, name, subject, message) {
        window.emailjs.send(
            receiverEmail,
            templateId,
            {
                email,
                name,
                subject,
                message
            })
            .then(res => {
                this.setState({ formEmailSent: true })
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Failed to send feedback. Error: ', err))
    }

  render() {
        console.log(process.env)
    return (

        <div>
            <Header data={{me:data.me,address :data.address}}/>
            <About data={{me:data.me,address :data.address}}/>
            <Resume data={data.resume} />
            <Contact onChange={this.onChange} handleSubmit={this.handleSubmit}/>
            <Footer/>
        </div>
    );
  }
}

export default App;

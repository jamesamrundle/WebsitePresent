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

    }       //remember to change path in About
  render() {
    return (

        <div>
            <Header data={{me:data.me,address :data.address}}/>
            <About data={{me:data.me,address :data.address}}/>
            <Resume data={data.resume} />
            <Contact/>
            <Footer/>
        </div>
    );
  }
}

export default App;

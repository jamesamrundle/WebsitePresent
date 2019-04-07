import React, { Component } from 'react';
import About from "./Components/About"
import Header from"./Components/Header"
import Resume from "./Components/Resume"

class App extends Component {

    constructor(props){
        super(props)
        this.state= {me:{name: "James Rundle",
                bio:"Hi I am James I. I like eating bread. I like writing code. I like making money. Hire me.",
                phone:"816-777-8998",
                email:"jamesamrundle@gmail.com",
                occupation:"Computer Science Student",
                objective:"searching for intership opportunities where I work with and expand my React capabilities"},
            address:{street: "666 Gumdrop Lane",
                city: "Charleston",
                state: "South Carolina",
                zip:"29411"}
        }
    }       //remember to change path in About
  render() {
    return (

        <div>
            <Header data={this.state}/>
            <About data={this.state}/>
            <Resume/>
        </div>
    );
  }
}

export default App;

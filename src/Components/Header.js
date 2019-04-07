import React, { Component } from 'react';


class Header extends Component {


    render() {
        let {me , address} = this.props.data;
        return (

            <header id={"home"}>
                <nav id={"nav-wrap"}>
                    <ul id={"nav"} className={"nav"}>
                        <li><a className={"smoothscroll"} href="#home">home</a></li>
                        <li><a className={"smoothscroll"} href="#about">about</a></li>
                    </ul>
                </nav>
                {/*look into simplifiying following div name*/}
                <div className={"row banner banner-text"}>
                    <h1>{me.name}</h1>
                    <h3> I am a {address.city}, {address.state} <span>{me.occupation}</span> who is {me.objective} </h3>
                </div>
                <p className={"scrolldown"}>
                <a className={"smoothscroll"} href={"#about"   }><i className={"icon-down-circle"}></i></a>
                </p>
            </header>
    );
    }
}

export default Header;

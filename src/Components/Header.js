import React, { Component } from 'react';


class Header extends Component {
    render() {
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
                    <h1></h1>
                    <h3> <span></span> </h3>
                </div>
                <p className={"scrolldown"}>
                <a className={"smoothscroll"} href={"#about"}><i className={"icon-down-circle"}></i></a>
                </p>
            </header>
    );
    }
}

export default Header;

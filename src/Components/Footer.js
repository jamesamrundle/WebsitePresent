import React from 'react';
// import'../css/layout.css'


const Footer = () =>{


        return (
            <footer>
                <div className="row">
                    <ul className="copyright">
                        <li>&copy; Copyright 2019 *UR NAME*</li>
                        <li>Design by <a  href="https://www.linkedin.com/in/letuscode/">Jason Williams</a></li>
                    </ul>

                    <div id="go-top">
                        <a title="back to top" className="smoothscroll" href="#home">
                            <i className="icon-up-open"/>
                         </a>
                    </div>
                </div>
            </footer>
        );
    }


export default Footer
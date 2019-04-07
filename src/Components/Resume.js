import React, {Component} from 'react';

class Resume extends Component {
    render() {
        return (
            <section id={"resume"}>
            <div className={"education"}>
                <h1 className={"header-col"} > <span>Education</span></h1>

                <div className={"main-col"}>

                <h3>College of Charleston</h3>
                    <p>B.S in Computer Science GPA : 3.5</p>
                    <p>Expected Graduation : 2021</p>
                    <p>Lead development on M^3 project in Dr. Bowring's Cirdle Lab, Active in leadership in Department Clubs,
                        tutor in walk-in Labs, and participated in mentorship/ outreach opportunities</p>
                </div>
            </div>

            <div className={"work"}>
                <h1 className={"header-col"} > <span>Employment</span></h1>

                <div className={"main-col"}>

                <h3> Boeing </h3>
                    <p> Programmer Analyst Intern</p>
                    <p> May 2018 - August 2018</p>
                    <p> Fully participated in Agile environment. Analyzed and implimented bugfixes for Java codebase and
                        lead implementation of App Dynamics to gather performance metrics on software product</p>
                </div>
            </div>

            <div className={"skill"}>
                <h1 className={"header-col"} > <span>Skills</span></h1> <br/>
                <div className="main-col">
                    <div className="bars">

                        <list className="skills">
                            <li  >
                                <span style={{width:"95%"}} className={"bar-expand"}></span><em>being really cool</em>
                            </li>
                            <li >
                                <span style={{width:"86%"}} className={"bar-expand"}></span><em>being really hungry</em>
                            </li>
                        </list>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}

export default Resume;
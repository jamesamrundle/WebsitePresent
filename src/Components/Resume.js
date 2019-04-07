import React, {Component} from 'react';

class Resume extends Component {
    render() {
        return (
            <section id={"resume"}>
            <div className={"education"}>
                <h1 className={"header-col"} > <span>Education</span></h1>

                <div className={"main-col"}>

                <h3>School</h3>
                    <p>Degree and GPA</p>
                    <p>Date of Graduation</p>
                    <p>info and accomplishments</p>
                </div>
            </div>

            <div className={"work"}>
                <h1 className={"header-col"} > <span>Employment</span></h1>

                <div className={"main-col"}>

                <h3> Company </h3>
                    <p> Position</p>
                    <p> Dates Worked</p>
                    <p> Info and Accomplishments</p>
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
export let data = {
    me: {
        name: "James Rundle",
        bio:"Hi I am James I. I like eating bread. I like writing code. I like making money. Hire me.",
        phone:"816-777-8998",
        email:"jamesamrundle@gmail.com",
        occupation:"Computer Science Student",
        objective:"searching for intership opportunities where I work with and expand my React capabilities"
    },

    address:{
        street: "666 Gumdrop Lane",
        city: "Charleston",
        state: "South Carolina",
        zip:"29411"
    },
    resume:{
        //        **Notice brackets for mapping over field
        education: [{
            name: "College of Charleston",
            degreeAndGpa: "Bachelors of Computer Science,  3.5 GPA  ",
            year: "2021",
            description: "As a non traditional student I secured a multiple Summer internship at Boeing during my first semester. In consequent semester I maintained active involvment and leadership in department clubs and was lead developer on the M^3 project in Dr. Bowrings research lab.  "
        }
        ],
        jobs: [
            {
                company: "Boeing",
                date: "May 2018 - August 2018",
                title: "Programmer Analyst Intern",
                description: "Programmed and Analyzed and Set up App Dynamics "
            },
            {
                company: "Custom Home Sound",
                date: "May 2017- May 2018",
                title: "Systems Integrator",
                description: "Wired houses for, installed and maintained High End Audio Visual Equipment"
            }
        ],
        skills:[
            {name:"Java Brewing",level:"60%"},
            {name: "Python Charming", level:"55%"},
            {name: "PHPhuck dat", level:"-70%"},
            {name: "Spelling words comprised of the letter 'C'",level:"23%"},
            {name: "Confections and Sweet-craft", level:"80%"}
        ]
    }

}
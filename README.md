Create App
Npm create-react-app
Npm start
Remove index and app css. Clean up imports from app.js and index.js
Remove the html in the app.js render and replace with a simple <section></section>
Create a components folder, and a new javascript file About.
Copy the app.js code, making sure to correctly change the class name and export.
Id section “about”. Nest an internal div and a “main-col” div with an <h4> About Me </h4>
Constructor, super(props) this.state{me: {name: , bio: }
Check it out, were done!
Jk upload to github https://kbroman.org/github_tutorial/pages/init.html
**DEAR GOD MAKE SURE TO ADD **/.idea to GITIGNORE**

Finish about
<div “pic”> <img “profile-pic” > </div>
Create img folder in src
<div “contact-details”> <h3> Contact Details</h3>
Add address:{} to state
<p> name, address</p>
<a style:{{float:”right”}} className={“button”} href={process.env.PUBLIC_URL+"/resume.pdf"}> <span>Download Resume</span> </a> <br/>
<p> phone, email </p
Check it out
Get public css font and js files. Either pull merge conflicts or dl from teamdrive
Add css and jquery scripts in index.html

 <!-- Javascript jquery scripts-->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')</script>
    <script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
    <script src="js/jquery.flexslider.js"></script>
    <script src="js/waypoints.js"></script>
    <script src="js/jquery.fittext.js"></script>
    <script src="js/magnific-popup.js"></script>

    <script src="js/init.js"></script>

Header component
create new component
import into App.js
<header id=“home“>
    <nav id=“nav-wrap“>
        <ul id=“nav“ className=“nav“>
        <li><a className=“smoothscroll“ href=“#home“ > SECTION_NAME
            ..
            ..
        </nav>
    </header
4.  <div className=“rwo banner banner-text“ >
    <h1> Name
    <h2> Im a {city} based <span>{occupation}</span> who is looking to {objective}</h2>
       <p className="scrolldown">
          <a className="smoothscroll" href="#about">
    <i className="icon-down-circle"></i>
    </a>
     </p>
5. refactor state and introduce props

Resume Component

skeleton of component
Identify key components of resume
Education
Work History
Skills
If we want to maintain convention and make it easy to expand it would be a good idea to keep this information in objects
Further refactoring into a resumedata.js
Remember to pass the prop labeled with its entry so as to prevent component level change
create functions for injecting fields into jsx
REMEMBER TO ADD OPTION TO NAV
import footer
add jquery scripts to body of index.html
        <!-- Javascript jquery scripts-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>-->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery-1.10.2.min.js"><\/script>')</script>
<script type="text/javascript" src="js/jquery-migrate-1.2.1.min.js"></script>
<script src="js/jquery.flexslider.js"></script>
<script src="js/waypoints.js"></script>
<script src="js/jquery.fittext.js"></script>
<script src="js/magnific-popup.js"></script>
Contact Form:
create the component
create the outer most <section id =“contact“> with a <div className=“grid“> because im terrible at CSS .
Then we will have a <form id=“contact-form“>  element. The form wrapper provides some extra functionality that we dont have to program in. So its nice for these purposes.
The header of the form in <p> Some nice greeting.
Create a a <fieldset> inside the form that will contain the input elements for the fields we will need, Name, Email Address, Subject, Message
message email and name are required *
<div> <label>FIELD_NAME *</label>
<input type="text" placeholder="FIELD_NAME required" name="FIELD_NAME" required/>
</div>

message will be a <textarea> instead of input. It takes properties cols=“40 and rows=“15“
dont forget a button
<button type="submit" className="submit" onClick={props.submitData} >Submit</button>
so they put the info in, how to do we
access that info so we can do things with it
send it to us
here is the fun part about react / javascript stuff in general. Callback functions!

//////4.5 branch
onChange fctn in App.js
email.js why we need to use this, and what our other options are
handlesubmit and submitfeedback fctns
If you want to do some kind of validation, there is the email validation file. COPY AND PASTE FUNCTION into app.js
remember to add the bit in the nav bar.

Now- for hosting it we need travis CI and github


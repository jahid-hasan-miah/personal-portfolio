import React, { Component } from 'react'
import header from './pic.jpg'

class About extends Component
{
    render()
    {
        return(
            <section id="about">
                <div className="container">
                <div className="container profile-image">
                     <img src={header}></img>
                </div>
                <div className="name container">
                    <h2><b>Md Jahid Hasan Miah</b></h2>
                    <p >
                    I am a Software Engineer with hands on experienced in Web application development with Asp dotnet core mvc, 
                    Android App Development, firebase, SQL and MySQL database and also experienced with google API.
                    All things i do is,
                    And I am good and fast learner and very much interested on learn new and different Technologies.<br></br>
                    <b style={{fontSize:26}}>I am expert on:</b><br></br>
                    ✅ Asp.net core mvc <br></br>
                    ✅ HTML, CSS, Bootstrap<br></br>
                    ✅ Android Development with Java <br></br>
                    ✅ Google API Integration<br></br>
                    ✅ Database Management<br></br>
                    ✅ Firebase<br></br>
                    </p>
                </div>
            </div> 
            </section>    
        );
    }
}
export default About;
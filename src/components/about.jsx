import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import '../components/about.css';
import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const [status, setStatus] = useState(false);

   
    function hellothere(event) {
        const data = parseInt(event.target.value, 10);
        if (data === 4) {
            setStatus(true);
        }
    }

    return (
        <Container fluid className="about">
            {!status && (
                <>
                    <h1> Wanna know <span style={{color:"#77E4C8", marginRight:"20px"}}>About Me</span> Answer this</h1>
                    <div className="qcon">
                        <input type="number" className="inp" placeholder="2 X 2 =" onChange={hellothere}></input>
                    </div>
                </>
            )}

            {status && (
               <div className="content">
               <h1 style={{marginTop: "-50px"}}>About Me</h1>
               <div className="about-me-container">
                   <img className="about-me-img" src="09.jpg" alt="About Me" />
                   <div className="about-me-text">
                       <p>
                           I am <span>Avinash</span>, and I love coding. Public speaking is another passion of mine, as it allows me to share my ideas and knowledge with others. <span>Java</span> is my favorite programming language.
I am a 2023 graduate in Electronics and Communication Engineering, currently looking for a job to enhance my skills and gain practical experience.
                       </p>
                   </div>
               </div>
           </div>
           
            )}
        </Container>
    );
}

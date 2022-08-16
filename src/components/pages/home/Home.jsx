import React from 'react';
import "../home/Home.css";
// import Typed from 'react-typed';

//npm
import Button from 'react-bootstrap/Button';
import AboutMe from '../about/AboutMe';
import Works from "../works/Works";

const Home = () => {



    return (
        <>
            <div className="home-container">
                <div className="main-info">

                    <h1 className="highlight">Hello, I’m Yeshi.</h1>
                    <h2 className="highlight">I’M a UI Designer based in Paris. </h2>
                    <h3 className="highlight">with a web development background</h3>

                    <p>I am Determined to create something meaningful & powerful that people love to use. </p>

                    <div className='icons-box'>

                        <a href="https://www.linkedin.com/in/gangchen-yeshi-tsering-62b8031ba/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i class="fab fa-linkedin icons"></i>
                            </Button>
                        </a>
                        <a href="https://medium.com/@yestsering" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i class="fa fa-medium" aria-hidden="true"></i>
                            </Button>
                        </a>
                        <a href="https://github.com/gangchenyeshi" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i class="fab fa-github-square icons"></i>
                            </Button>
                        </a>
                        <a href="https://drive.google.com/file/d/1Dbx2Te0DNH0GtlnBaGF-uHuzy1XkNKnM/view" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark">
                                <i class="fa fa-address-card" aria-hidden="true"></i>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
            <Works />
            <AboutMe />

        </>
    )
}

export default Home
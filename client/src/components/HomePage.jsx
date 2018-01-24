import React, { Component } from "react";
import Carousel from "./carousel";
import Contactme from "./contactme";
import Projects from "./projects";

import styled from "styled-components";

const ProjectSection1Div = styled.div`

img {
  display:flex;
  justify
}



`
const NavbarDiv = styled.div`
  background-color: green;

  .navbar-brand {
    border: inset;
  }

  

  .navbar {
    background: black;
    background-image: url(https://i.imgur.com/xVhHp95.jpg);
  }

  ul {
    text-align: right;
    display: flex;
    justify-content: space-evenly;
    text-decoration-color: white;
    color: floralwhite;
  }

  h1 {
    color: white;

  }
`;

class HomePage extends Component {
  render() {
    return (
      <div>


        {/* ///////////////
        //Navbar
        /////////////// */}
        <div>
          <NavbarDiv>
            <div className="Navbar">
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/HomePage">
                      <img
                        alt="Brand"
                        src="https://i.imgur.com/psQ80KZ.png?1"
                      />
                    </a>
                  </div>
                  <h1>Tory Redner </h1>
                  <ul>
                    <ol>Projects</ol>
                    <ol>Resume</ol>
                    <ol>About </ol>
                  </ul>
                </div>
              </nav>
            </div>
          </NavbarDiv>
        </div>





{/* ///////////////
//Projects 
/////////////// */}


        <section className="projects">
          <Carousel />
        </section>
        <section>
          <div>
          <ProjectSection1Div>
            <Projects />
          </ProjectSection1Div>

          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;

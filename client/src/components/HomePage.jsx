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
  
  .navbar-brand {

    // background-image: url(https://i.imgur.com/xVhHp95.jpg);
  }

  img {
        background-image: url(https://i.imgur.com/xVhHp95.jpg);
        display:flex;
        justify-content:space-around;

  }

  .navbar {
    background: black;
    color:white;
    
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
 
h4 {
  white-space: nowrap;
  animation: type 15s steps(180, end);
  overflow: hidden;
  width: 160em;
  

}
@keyframes type{
  word-break: keep-all;

  from {width: 0;}
}

`

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
                  <div className="navbar-header ">
                  <img src="https://i.imgur.com/2hK7jsVt.jpg" alt="BrandLogo"/>
                    <a className="navbar-brand" href="/HomePage"/>

                     
                  
                  </div>
                  <h1>Tory Redner </h1>
                  <ul>
                    <ol>Projects</ol>
                    <ol>Resume</ol>
                    <ol>About </ol>
                  </ul>
                  <h4>"The average person puts only 25% of his energy into his work.
The world takes off its hat to those who put in more than 50% of their capacity,
and stands on its head for those few and far between souls who devote 100%. —Andrew Carnegie"</h4>
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

{/* ///////////////
//Contactme 
/////////////// */}

<Contactme/>


      </div>
    );
  }
}

export default HomePage;

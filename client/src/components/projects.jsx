import React, { Component } from "react";
import styled from "styled-components";


const ProjectSection = styled.div`

img {
  width: 728px;
  height: 528px;
}


`






const Project1Section = styled.div`
 




img {
    width: 728px;
    height: 528px;
  }





`;

class projects extends Component {









  render() {


    return (



<div>
<ProjectSection>
      <div>
                  <Project1Section>

          <section className="projects1">

            <img
              src="https://i.imgur.com/a4m9H96.png"
              alt="Vagabond Travel Project"
            />
            <p>Vagabond Travel - Group Project</p>
            <h6>Mern Stack </h6>
            <h5>Project Length: 4 days</h5>
            <h5>
              This was our first group project, The groups consisted of 4
              people. We worked in mob & pair programming. The{" "}
            </h5>
            <h4>Github: https://github.com/tch180/vagabond-project</h4>

          </section>
          </Project1Section>


          <section className="projects2">
          <img
            src="https://i.imgur.com/vbBa1ps.png"
            alt="BigStar Chores"
            
          />
          <p>BigStar Chores </p>
          <h6>React On Rails </h6>
          <h5>Project Length: 7 days</h5>
          <h5>
           One of my favorite projects, This allows parents to add children and Assign chores that are equated an point value. In version 2 the child will be able to turn those points in for rewards.
          </h5>
          <h4>Github: https://github.com/tch180/bigstar-chores</h4>
        </section>
        <section className="projects3">
            <img
              src="https://i.imgur.com/w5qsdesm.jpg?1"
              alt="Best Chef "/>
            <p>Best Chef</p>
            <h6>Stack: Mean Stack </h6>
            <h5>Project Length: 4 days</h5>
            <h5>
              This was our first group project, The groups consisted of 4
              people. We worked in mob & pair programming
            </h5>
            <h4>Github: https://github.com/tch180/-BestChef-Project2</h4>
          </section>

        
      </div>
      </ProjectSection>
      </div>
    );
  }
}

export default projects;

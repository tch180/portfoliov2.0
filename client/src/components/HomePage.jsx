import React, { Component } from 'react';

class HomePage extends Component {
 
 

  
 

    render() {
  
        return (





            <div>
                <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <img alt="Brand" src="https://i.imgur.com/psQ80KZ.png?1"/>
      </a>
    </div>
    <h1>Tory Redner </h1>

  </div>
</nav>

<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
 {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    <li data-target="#carousel-example-generic" data-slide-to="4"></li>
    <li data-target="#carousel-example-generic" data-slide-to="5"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="https://i.imgur.com/NCTOjV4.jpg" alt="..."/>
      <div class="carousel-caption">
        <h1>first project</h1>
      </div>
    </div>
    <div class="item">
      <img src="https://i.imgur.com/vbBa1ps.png" alt="..."/>
      <div class="carousel-caption">
       <h4> BigStar Chores</h4>
      </div>
    </div>
    <div class="item">
      <img src="https://i.imgur.com/YlQD5vN.png" alt="..."/>
      <div class="carousel-caption">
       <h4> 2nd Chef</h4>
      </div>
    </div>
    
  </div>

  {/* <!-- Controls --> */}
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
            </div>
        );
    }
}

export default HomePage;
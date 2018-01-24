import React, { Component } from 'react';


class carousel extends Component {
    render() {
        return (
            <div>
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="false"  >
 {/* <!-- Indicators --> */}
  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    <li data-target="#carousel-example-generic" data-slide-to="4"></li>
    <li data-target="#carousel-example-generic" data-slide-to="5"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  <div className="carousel-inner" role="listbox">
    <div className="item">
      <img src="https://i.imgur.com/NCTOjV4.jpg" alt="..."/>
      <div className="carousel-caption">
        <h1>first project</h1>
      </div>
    </div>
    <div className="item active">
      <img src="https://i.imgur.com/vbBa1ps.png" alt="..."/>
      <div className="carousel-caption">
       <h4> BigStar Chores</h4>
      </div>
    </div>
    <div className="item">
      <img src="https://i.imgur.com/YlQD5vN.png" alt="..."/>
      <div className="carousel-caption">
       <h4> 2nd Chef</h4>
      </div>
    </div>
    <div className="item">
      <img src="https://i.imgur.com/a4m9H96.png" alt="..."/>
      <div className="carousel-caption">
       <h4> VagaBond travel </h4>
      </div>
    </div>

    


  </div>

  {/* <!-- Controls --> */}
  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
            </div>
        );
    }
}

export default carousel;
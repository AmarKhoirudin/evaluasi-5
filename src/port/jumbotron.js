import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import "../Components/components.css";

class Jumbo extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbocss" id="home">
          <div className="container text-center">
            <img
              src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
              className="jumgam  img-thumbnail"
            ></img>
            <h1 className="display-4">{this.props.poto}</h1>
            <p></p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbo;

import React, { Component } from "react";
import "./App.css";
import Navbar from "./port/navbar";
import Jumbo from "./port/jumbotron";
import About from "./port/about";
import Contact from "./port/contact"
import Footer from './port/footer'
// import Carousel from "./port/carousel"

class app extends Component {
  state = {
    poto: "Hello My Name Amar!"
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbo poto={this.state.poto} />
        <About />
        {/* <Carousel /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default app;

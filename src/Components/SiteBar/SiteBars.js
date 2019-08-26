import React, { Component } from "react";
import SiteBar from "./SiteBar";

class SiteBars extends Component {
  state = {
    data: [
      { id: 1, value: "Amar" },
      { id: 2, value: "Khoirudin" },
      { id: 3, value: "Nadira" },
      { id: 4, value: "Rahmadita" }
    ]
  };
  render() {
    return this.state.data.map(bars => (
      <div>
        <SiteBar name ={bars.value} />
      </div>
    ));
  }
}

export default SiteBars;

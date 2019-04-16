import React, { Component } from 'react'
import Body from './Contains/Body';
import BikiniTop from './Contains/Bikinitop';
import Binikibottom from './Contains/Binikibottom';
import Feet from './Contains/Feet';
import Model from './Contains/Model';
//import components

class Contain extends Component {
  render() {
    const styles = {
        // .contain
        containClass: {
            width: "460px",
            height: "590px",
            margin: "0 auto",
            background: 'url("./images/background/background_998.jpg")',
            position: "relative"
      }
    }
    return (
      <div className="contain" style = {styles.containClass}>
        <Body/>
        <BikiniTop/>
        <Binikibottom/>
        <Feet/>
        <Model/>
      </div>
    )
  }
}
export default Contain;
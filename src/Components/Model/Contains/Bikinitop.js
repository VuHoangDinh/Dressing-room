import React, { Component } from 'react';

class Bikinitop extends Component {
    render() {
        const styles = {
            // .bikinitop
            bikinitopClass: {
              width: "250px",
              height: "500px",
              background: 'url("./images/allbody/bikini_branew.png")',
              position: "absolute",
              top: "12%",
              left: "22%",
              zIndex: "1"
            }
        }
        return (
            <div className="bikinitop" style={styles.bikinitopClass}>
                
            </div>
        );
    }
}

export default Bikinitop;
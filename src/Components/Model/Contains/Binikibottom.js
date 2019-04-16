import React, { Component } from 'react';

class Binikibottom extends Component {
    render() {
        const styles = {
            // .bikinibottom
            bikinibottomClass: {
              width: "250px",
              height: "500px",
              background: 'url("./images/allbody/bikini_pantsnew.png")',
              position: "absolute",
              top: "12%",
              left: "22%",
              zIndex: "1"
            }
          }
        return (
            <div className="bikinibottom" style={styles.bikinibottomClass}>
                
            </div>
        );
    }
}

export default Binikibottom;
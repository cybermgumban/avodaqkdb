var React = require("react");

class Disclaimer extends React.Component {

    render() {
        return (
            <div style={{textAlign:"center", marginTop:"100px"}}>
            <h2>
                This avodaq Knowledge Database purpose is to have a central database for all ASC guides that will greatly help new and existing ASC engineers.                
            </h2>
            <p style={{marginTop:"120px"}}>Developed by: Marlon Gumban</p>
            </div>
        );
    }
}

module.exports = Disclaimer;
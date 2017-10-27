var React = require("react");

class Disclaimer extends React.Component {

    render() {
        return (
            <div style={{textAlign:"center"}}>
            <h1 style={{paddingTop: "100px"}}>
                This avodaq Knowledge Database purpose is to have a central database for all ASC guides that will greatly help new and existing ASC engineers.                
            </h1>
            <br /><br/> <br />
            <h3 style={{textAlign:"left"}}>Future updates / improvements:</h3>
            <li style={{textAlign:"left"}}>Fix Edit bug</li>
            <li style={{textAlign:"left"}}>Able to add and show images</li>
            <li style={{textAlign:"left"}}>Create admin account and user account</li>
            <li style={{textAlign:"left"}}>Add Network, Security and Server</li>
            <p style={{marginTop:"120px", fontSize: "20px"}}>Coded by: Marlon Gumban</p>
            </div>
        );
    }
}

module.exports = Disclaimer;
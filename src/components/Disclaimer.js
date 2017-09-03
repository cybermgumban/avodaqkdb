var React = require("react");

class Disclaimer extends React.Component {

    render() {
        return (
            <div style={{textAlign:"center"}}>
            <h1 style={{paddingTop: "100px"}}>
                This avodaq Knowledge Database purpose is to have a central database for all ASC guides that will greatly help new and existing ASC engineers.                
            </h1>
            <br /><br/> <br />
            <h3 style={{textAlign:"left"}}>Future updates / improvement:</h3>
            <li style={{textAlign:"left"}}>Addition of ticket tagging (e.g. OTRS, TAC, Webex tickets)</li>
            <li style={{textAlign:"left"}}>Able to show images and numbered lists</li>
            <li style={{textAlign:"left"}}>Able to Add, Edit and Delete into the database itself</li>
            <p style={{marginTop:"120px", fontSize: "20px"}}>Coded by: Marlon Gumban</p>
            </div>
        );
    }
}

module.exports = Disclaimer;
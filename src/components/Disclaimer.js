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
            <li style={{textAlign:"left"}}>Able to add and show images in workaround and resolution</li>
            <li style={{textAlign:"left"}}>Fix a bug, duplicating inputs</li>
            <li style={{textAlign:"left"}}>After delete, should route to homepage to refresh what's shown on Showall</li>
            <li style={{textAlign:"left"}}>Create documentations on using the KDB and maintenance</li>
            <li style={{textAlign:"left"}}>Automatic Backup of MongoDB to NAS</li>
            <li style={{textAlign:"left"}}>Improve Edit Function to be more user friendly</li>
            <li style={{textAlign:"left"}}>Add Network, Security and Server Guide/Information</li>
            <li style={{textAlign:"left"}}>Create admin account and user account</li>
            <p style={{marginTop:"120px", fontSize: "20px"}}>Coded by: Marlon Gumban</p>
            </div>
        );
    }
}

module.exports = Disclaimer;
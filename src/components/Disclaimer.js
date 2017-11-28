var React = require("react");

class Disclaimer extends React.Component {

    render() {
        return (
            <div style={{textAlign:"center"}}>
            {/* <h3 style={{paddingTop: "100px"}}>
                This avodaq Knowledge Database purpose is to have a central database for all ASC guides that will greatly help new and existing ASC engineers.                
            </h3>
            <br /><br/> <br /> */}
            <br /> <br/>
            <h3 style={{textAlign:"left"}}>Finished Improvements:</h3>
            <li style={{textAlign:"left"}}>Updated Top 5 customers in both GUI and Database</li>
            <li style={{textAlign:"left"}}>Added "Top 5 Customer" in Edit Function</li>

            <br />

            <h3 style={{textAlign:"left"}}>Future updates / improvements:</h3>
            <li style={{textAlign:"left"}}>Able to add and show images in workaround and resolution</li>
            <li style={{textAlign:"left"}}>Fix a bug where duplicating inputs when adding new</li>
            <li style={{textAlign:"left"}}>Create admin documentations on using the KDB and maintenance</li>
            <li style={{textAlign:"left"}}>Automatic Backup of MongoDB to NAS</li>
            <li style={{textAlign:"left"}}>Improve Edit Function to be more user friendly</li>
            <li style={{textAlign:"left"}}>Add Network, Security and Server Guide/Information</li>
            <li style={{textAlign:"left"}}>Create admin account and user account</li>
            </div>
        );
    }
}

module.exports = Disclaimer;
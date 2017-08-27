var React = require("react");

var dbjabber = require("../db/dbjabber");
var dbcucm = require("../db/dbcucm");

class ShowAll extends React.Component {
    render() {
        return (
            <div>
                <h2>Jabber</h2>
                {dbjabber.map((dbjabber, index) => (
                    <li key={index}> {dbjabber.title} </li>
                ))}
                <h2>CUCM</h2>
                {dbcucm.map((dbcucm, index) => (
                    <li key={index}>{dbcucm.title} </li>
                ))}
            </div>
        );
    }
}

module.exports = ShowAll;
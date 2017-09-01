var React = require("react");
var {Link} = require("react-router");

var dbjabber = require("../db/dbjabber");
var dbcucm = require("../db/dbcucm");

var li = {
    textIndent: "40px"
}

class ShowAll extends React.Component {
    render() {
        return (
            <div>
                <h2>Jabber</h2>
                {dbjabber.map((dbjabber, index) => (
                    <li style={li} key={index}>
                        <Link 
                        to={{ pathname: `/function/showone/${dbjabber.title}`, 
                        state: {description: dbjabber.description, 
                                workaround: dbjabber.workaround} }} >
                        {dbjabber.title}
                        </Link>
                    </li>
                ))}
                <h2>Cisco Unified Communications Manager</h2>
                {dbcucm.map((dbcucm, index) => (
                    <li style={li} key={index}>
                        <Link 
                        to={{ pathname: `/function/showone/${dbcucm.title}`,
                        state: {description: dbcucm.description,
                                workaround: dbcucm.workaround} }}>
                        {dbcucm.title}
                        </Link>
                    </li>
                ))}
            </div>
        );
    }
}

module.exports = ShowAll;
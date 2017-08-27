var React = require("react");
var {Link} = require("react-router");

var dbjabber = require("../db/dbjabber");
var dbcucm = require("../db/dbcucm");

class ShowAll extends React.Component {
    render() {
        return (
            <div>
                <h2>Jabber</h2>
                {dbjabber.map((dbjabber, index) => (
                    <li key={index}>
                        <Link to={`/function/showone/${dbjabber.title}`} query={{description: dbjabber.description, workaround: dbjabber.workaround}} >
                        {dbjabber.title}
                        </Link>
                    </li>
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
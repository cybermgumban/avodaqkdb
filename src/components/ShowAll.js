var React = require("react");
var {Link} = require("react-router");
var axios = require("axios");

var dbjabber = require("../db/dbjabber");
var dbcucm = require("../db/dbcucm");

var li = {
    textIndent: "40px"
}

class ShowAll extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = ({
            result: [],
        })

    }

    componentWillMount() {
        return (axios({
            method: 'get',
            url: 'http://localhost:3050/avodaqkdb'
        }).then((res) => {
            this.setState({
                result: res.data,
            })
        }))
    }

    render() {
        var jabber = this.state.result.filter((db) => {
            return db.category === "jabber"
            })
        var cucm = this.state.result.filter((db) => {
            return db.category === "cucm"
            })

        return (
            <div>
                <h2>Jabber</h2>
                {jabber.map((db, index) => {
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description,
                                }}} >
                                {db.title}
                            </Link>
                        </li>
                    )
                })}

                <h2>CUCM</h2>
                {cucm.map((db, index) => {
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description,
                                }}} >
                                {db.title}
                            </Link>
                        </li>
                    )
                })}
                </div>
        );
    }
}

module.exports = ShowAll;
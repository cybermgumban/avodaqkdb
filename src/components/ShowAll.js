var React = require("react");
var {Link} = require("react-router");
var axios = require("axios");

var serverIp = require("./ServerIp");

var li = {
    textIndent: "40px"
}

class ShowAll extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = ({
            result: [],
            id: ""
        })

    }

    componentWillMount() {
        return (axios({
            method: 'get',
            url: `http://${serverIp}/avodaqkdb`
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
        var imp = this.state.result.filter((db) => {
            return db.category === "imp"
            })
        var cuc = this.state.result.filter((db) => {
            return db.category === "cuc"
            })
        var vg = this.state.result.filter((db) => {
            return db.category === "vg"
            })

        return (
            <div>
                <h2>Jabber</h2>
                {jabber.map((db, index) => {                                      
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description, category: db.category, id: db._id, ticket_tag: db.ticket_tag, workaround: db.workarounds[0].workaround_list, resolution: db.resolutions[0].resolution_list
                                }}} >
                                {db.title}
                            </Link>
                        </li>
                    )
                })}

                <h2>Cisco Unified Communications Manager</h2>
                {cucm.map((db, index) => {
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description, category: db.category, id: db._id, ticket_tag: db.ticket_tag, workaround: db.workarounds[0].workaround_list, resolution: db.resolutions[0].resolution_list
                                }}} >
                                {db.title}
                            </Link>
                        </li>
                    )
                })}

                <h2>Cisco Instant Messaging and Presence</h2>
                {imp.map((db, index) => {                                      
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description, category: db.category, id: db._id, ticket_tag: db.ticket_tag, workaround: db.workarounds[0].workaround_list, resolution: db.resolutions[0].resolution_list
                                }}} >
                                {db.title}
                            </Link>
                        </li>
                    )
                })}

                <h2>Cisco Unity Connection</h2>
                {cuc.map((db, index) => {                                      
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description, category: db.category, id: db._id, ticket_tag: db.ticket_tag, workaround: db.workarounds[0].workaround_list, resolution: db.resolutions[0].resolution_list
                                }}} >
                                {db.title}
                            </Link>
                        </li>
                    )
                })}

                <h2>Voice Gateway</h2>
                {vg.map((db, index) => {                                      
                    return (
                        <li key={index} style={li}>
                            <Link to={{ 
                                pathname: `/function/showone/${db.title}`,
                                state: { description: db.description, category: db.category, id: db._id, ticket_tag: db.ticket_tag, workaround: db.workarounds[0].workaround_list, resolution: db.resolutions[0].resolution_list
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
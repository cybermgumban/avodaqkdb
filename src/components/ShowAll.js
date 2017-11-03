var React = require("react");
var {Link} = require("react-router");
var axios = require("axios");

var serverIp = require("./ServerIp");

var li = {
    textIndent: "40px",
    fontSize: "15px",
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
        var exp = this.state.result.filter((db) => {
            return db.category === "exp"
            })
        var spark = this.state.result.filter((db) => {
            return db.category === "spark"
            })
        var gen = this.state.result.filter((db) => {
            return db.category === "gen"
            })
        var andtek = this.state.result.filter((db) => {
            return db.category === "andtek"
            })

        return (
            <div>

                <h3>Jabber</h3>
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

                <h3>Cisco Unified Communications Manager</h3>
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

                <h3>Cisco Instant Messaging and Presence</h3>
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

                <h3>Cisco Unity Connection</h3>
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

                <h3>Voice Gateway</h3>
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

                <h3>Expressway</h3>
                {exp.map((db, index) => {                                      
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

                <h3>Spark</h3>
                {spark.map((db, index) => {                                      
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

                <h3>General</h3>
                {gen.map((db, index) => {                                      
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

                <h3>Andtek</h3>
                {andtek.map((db, index) => {                                      
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
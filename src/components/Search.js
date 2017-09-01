var React = require("react");
var {Link} = require("react-router");

var dbjabber = require("../db/dbjabber");
var dbcucm = require("../db/dbcucm");


var searchStyle = {
    marginRight: "-10px",
    marginLeft: "-10px",
    height: "5px",
    width: "auto",
    textAlign: "right",
}

var li = {
    textIndent: "40px"
}

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            type: "Jabber",
            keyword: "",
            searchResult: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    handleSubmit() {
            if(this.state.type==="Jabber") {
                var searchResult = [];
                searchResult = (
                    dbjabber.map((db, index) => ((db.title.match(this.state.keyword)? 
                        (<li  style={li} key={index}>
                            <Link to={{ pathname: `function/showone/${db.title}`, 
                            state:{ description: db.description, workaround: db.workaround } }}>
                            {db.title}
                            </Link>
                        </li>) : 

                            (db.description.match(this.state.keyword)?
                                (<li  style={li} key={index}>
                                    <Link to={{ pathname: `function/showone/${db.title}`, 
                                    state:{ description: db.description, workaround: db.workaround } }}>
                                    {db.title}
                                    </Link>
                                </li>) : 

                                (db.workaround.match(this.state.keyword)?
                                    (<li  style={li} key={index}>
                                        <Link to={{ pathname: `function/showone/${db.title}`, 
                                        state:{ description: db.description, workaround: db.workaround } }}>
                                        {db.title}
                                        </Link>
                                    </li>) : null
                                )
                            )
                    )))
                )

                function allIsNull(element, index, array) {
                    return element === null;
                }

                if (searchResult.every(allIsNull) === true) {
                    this.setState ({
                    searchResult: <h3>We did not find any results... Please try again using another keyword.</h3>
                    })
                } else {
                    this.setState ({
                    searchResult: searchResult
                    })
                }

            }

            else if(this.state.type==="CUCM") {
                searchResult = (
                    dbcucm.map((db, index) => ((db.title.match(this.state.keyword)? 
                        (<li style={li} key={index}>
                            <Link to={{ pathname: `function/showone/${db.title}`, 
                            state:{ description: db.description, workaround: db.workaround } }}>
                            {db.title}
                            </Link>
                        </li>) : 

                            (db.description.match(this.state.keyword)?
                                (<li style={li} key={index}>
                                    <Link to={{ pathname: `function/showone/${db.title}`, 
                                    state:{ description: db.description, workaround: db.workaround } }}>
                                    {db.title}
                                    </Link>
                                </li>) : 

                                (db.workaround.match(this.state.keyword)?
                                    (<li style={li} key={index}>
                                        <Link to={{ pathname: `function/showone/${db.title}`, 
                                        state:{ description: db.description, workaround: db.workaround } }}>
                                        {db.title}
                                        </Link>
                                    </li>) : null
                                )
                            )
                    )))
                )

                function allIsNull(element, index, array) {
                    return element === null;
                }

                if (searchResult.every(allIsNull) === true) {
                    this.setState ({
                    searchResult: <h3>We did not find any results... Please try again using another keyword.</h3>
                    })
                } else {
                    this.setState ({
                    searchResult: searchResult
                    })
                }

            }

        }

    render() {
            console.log(this.state.type);
            console.log(this.state.keyword);
        return (
            <div>
                    <label>Type: 
                    <select 
                        value={this.state.type} 
                        name="type" 
                        onChange={this.handleChange}>
                        <option defaultValue value="Jabber">Jabber</option>
                        <option value="CUCM">CUCM</option>
                    </select>
                    </label>
                        <br /> <br />
                    <label>Keyword: 
                        <input 
                            value={this.state.keyword}
                            type="text" 
                            name="keyword" 
                            onChange={this.handleChange}/>
                    </label>
                    <br /> <br />
                    <button onClick={this.handleSubmit}>Search</button>
                    <br/> <br />
                <div style={searchStyle}>
                </div>
                    <h2>Search Result:</h2>
                    {this.state.searchResult}
            </div>
        );
    }
}

module.exports = Search;
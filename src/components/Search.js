var React = require("react");
var {Link} = require("react-router");
var axios = require("axios");

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
            category: "jabber",
            keyword: "",
            result: [],
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

/*
    searchWA(db, index, keyword, title, description) {
        var workaround = [];
        for(var i=0; i<db.length; i++) {
            workaround.push(
                                    (db[i].match(keyword)?
                                    (<li  style={li} key={index}>
                                        <Link to={{ pathname: `function/showone/${title}`, 
                                        state:{ description: description, workaround: db } }}>
                                        {title}
                                        </Link>
                                    </li>) : null
                                    )
            )
            return workaround;
        }
        
    }


    handleSubmit() {
            if(this.state.type==="Jabber") {
                var searchResult = [];
                searchResult = (
                    dbjabber.map((db, index) => ((db.title.match(this.state.keyword)? 
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
                                    this.searchWA(db.workaround, index, this.state.keyword, db.title, db.description)
                                )
                            )
                    ))
                    
                )

                function allIsNull(element, index, array) {
                    for(var i=0;i<array.length;i++){
                    return element[i] === null;
                    }
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
                                    this.searchWA(db.workaround, index, this.state.keyword, db.title, db.description)
                                )
                            )
                    ))
                    
                )

                function allIsNull(element, index, array) {
                    for(var i=0;i<array.length;i++){
                    return element[i] === null;
                    }
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
*/



    componentWillMount() {
        return(
            axios({
                method: 'get',
                url: 'http://10.96.128.49:3050/avodaqkdb',
                data: {
                    category: this.state.category,
                    keyword: this.state.keyword
                }
            }).then((res) => {
                this.setState = ({
                    result: res
                })
            })
        )
    }


    handleSubmit() {
        var jabber = this.state.result.filter((db) => {
            return db.category === "jabber"
            })
        var cucm = this.state.result.filter((db) => {
            return db.category === "cucm"
            })

            console.log(cucm);

            if(this.state.category === "jabber") {
            }
        
    }


    render() {
        return (
            <div>
                    <label>Type:
                    <select
                        style={{marginLeft: "40px", width: "160px", textAlignLast: "center"}} 
                        value={this.state.type} 
                        name="category" 
                        onChange={this.handleChange}>
                        <option defaultValue value="jabber">Jabber</option>
                        <option value="cucm">CUCM</option>
                    </select>
                    </label>
                        <br /> <br />
                    <label>Keyword: 
                        <input 
                            style={{marginLeft: "13px", textAlign: "center"}} 
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
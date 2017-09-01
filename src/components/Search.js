var React = require("react");
var {Link} = require("react-router");

var dbjabber = require("../db/dbjabber");

var searchStyle = {
    marginRight: "-10px",
    marginLeft: "-10px",
    height: "5px",
    width: "auto",
    textAlign: "right",
};

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
                    dbjabber.map((dbjabber, index) => ((dbjabber.title.match(this.state.keyword)? 
                        (<li key={index}>
                            <Link to={{ pathname: `function/showone/${dbjabber.title}`, 
                            state:{ description: dbjabber.description, workaround: dbjabber.workaround } }}>
                            {dbjabber.title}
                            </Link>
                        </li>) : 

                            (dbjabber.description.match(this.state.keyword)?
                                (<li key={index}>
                                    <Link to={{ pathname: `function/showone/${dbjabber.title}`, 
                                    state:{ description: dbjabber.description, workaround: dbjabber.workaround } }}>
                                    {dbjabber.title}
                                    </Link>
                                </li>) : 

                                (dbjabber.workaround.match(this.state.keyword)?
                                    (<li key={index}>
                                        <Link to={{ pathname: `function/showone/${dbjabber.title}`, 
                                        state:{ description: dbjabber.description, workaround: dbjabber.workaround } }}>
                                        {dbjabber.title}
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
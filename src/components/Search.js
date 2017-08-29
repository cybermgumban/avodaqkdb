var React = require("react");
var {Link} = require("react-router");

var dbjabber = require("../db/dbjabber");

var searchStyle = {
    borderStyle: "dashed",
    borderColor: "#bfbfbf",
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
                    dbjabber.map((dbjabber, index) => ((dbjabber.title.match(this.state.keyword)? console.log("a") : console.log("b")),
                        <li key={index}>
                            <Link to={{ pathname: `function/showone/${dbjabber.title}`, 
                            state:{ description: dbjabber.description, workaround: dbjabber.workaround } }}>
                            {dbjabber.title}
                            </Link>
                        </li>
                    )))
                this.setState ({
                    searchResult: searchResult
                })
            }
        }

    render() {
            console.log(this.state.type);
            console.log(this.state.keyword);
        return (
            <div>
                <form>
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
                </form>
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
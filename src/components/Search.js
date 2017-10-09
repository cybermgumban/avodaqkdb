var React = require("react");
var {Link} = require("react-router");
var axios = require("axios");

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
            newArr: []
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
        this.setState ({
            newArr: []
        })

        axios({
            method: 'get',
            url: 'http://localhost:3050/avodaqkdb',
            params: {
                category: this.state.category,
            }
        }).then((res) => {{
            res.data.map((db,index) => {
                return db.title.match(this.state.keyword) ? 
                    this.state.newArr.push(db) : 
                    db.description.match(this.state.keyword) ?
                        this.state.newArr.push(db) : 
                        null
            });
        }})
    }

    componentDidMount() {
        this.setState ({
            result: this.state.newArr.map((db,index) => {
                <li key={index} style={li}>
                    <Link to={{ 
                        pathname: `/function/showone/${db.title}`,
                        state: { description: db.description,
                        }}} >
                        {db.title}
                    </Link>
                </li>
            })
        })
        console.log(this.state.result)
    }
    
    render() {
        return (
            <div>
                    <label>Type:
                    <select
                        style={{marginLeft: "40px", width: "160px", textAlignLast: "center"}} 
                        value={this.state.category} 
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
                    {this.state.result}
            </div>
        );
    }
}

module.exports = Search;
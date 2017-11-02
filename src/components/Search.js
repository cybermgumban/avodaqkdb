var React = require("react");
var {Link} = require("react-router");
var axios = require("axios");

var serverIp = require("./ServerIp");

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
            newArr: [],
            searchResult: [],
            id: "",
            ticket_tag: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchResult = this.searchResult.bind(this);
    }

    componentWillMount() {
        axios({
            method: 'get',
            url: `http://${serverIp}/avodaqkdb`,
        }).then((resultArr) => {
            this.setState ({
                newArr: resultArr.data
            })
        })
    }

    searchResult(arr) {

        const newArr = arr.filter((arr) => {
            return arr.category === this.state.category;
        })

        const searchResult = (
            newArr.map((db,index) => {
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
                })
            )

        if(searchResult[0] === undefined) {
            this.setState({
                searchResult: <h3>We did not find any results... Please try again using another keyword.</h3>
            })
        } else {
            this.setState({
                searchResult: searchResult
            })
        }
    }

    handleSubmit() {
        const arr = [];
        console.log(this.state.newArr[0].workarounds);
        this.state.newArr.map((db,index) => {
            return (
            db.title.match(this.state.keyword) ? 
                arr.push(db) : 
                db.description.match(this.state.keyword) ?
                    arr.push(db) : 
                    db.ticket_tag.match(this.state.keyword) ?
                        arr.push(db) : 
                            null
            )
        })
        
        this.searchResult(arr)
    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
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
                        <option value="cucm">Cisco Unified Communications Manager</option>
                        <option value="imp">Cisco Instant Messaging and Presence</option>
                        <option value="cuc">Cisco Unity Connection</option>
                        <option value="vg">Voice Gateway</option>
                        <option value="exp">Expressway</option>

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
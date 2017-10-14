var React = require("react");
var axios = require("axios");

//Aed means Add Edit Delete

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "jabber",
            title: "",
            description: "",
            ticket_tag: "",
            workaround: [],
            resolution: [],
        }
        this.addBtnClick = this.addBtnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addBtnClick() {
        axios({
            method: 'post',
            url: 'http://localhost:3050/avodaqkdb',
            data: {
                category: this.state.category,
                title: this.state.title,
                description: this.state.description
            },
        }).then((res) => {
            console.log(res);
            alert("Successfully Added!");;
        });
    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
        console.log(this.state.category);
        console.log(this.state.title);
        console.log(this.state.description);
    }

    render() {
        return (
            <div>
                <h1>Let's Add some data!</h1>

                <label>Category: 
                    <select
                        style={{marginLeft: "50px", textAlignLast: "center", width: "800px"}}  
                        value={this.state.category} 
                        name="category" 
                        onChange={this.handleChange}>
                        <option defaultValue value="jabber">Jabber</option>
                        <option value="cucm">CUCM</option>
                    </select>
                </label> <br/>
                <label>Title: 
                    <input 
                        style={{marginLeft: "83px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}/>
                </label> <br />
                <label>Description: 
                    <input 
                        style={{marginLeft: "34px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Related Tickets: 
                    <input 
                        style={{marginLeft: "9px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="ticket_tag" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Workaround: 
                    <input 
                        style={{marginLeft: "29px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="workaround" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Resolution: 
                    <input 
                        style={{marginLeft: "40px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="resolution" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <button onClick={this.addBtnClick}>Add!
                </button>
            </div>
        );
    }
}

module.exports = Add;
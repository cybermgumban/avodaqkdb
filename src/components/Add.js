var React = require("react");
var axios = require("axios");

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "jabber",
            title: "",
            description: "",
            ticket_tag: "",
            workarounds: [],
            resolutions: [],
        }
        this.addBtnClick = this.addBtnClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addBtnClick() {
        const workaround = this.state.workarounds.split("\n");
        const resolution = this.state.resolutions.split("\n");
        
        axios({
            method: 'post',
            url: 'http://localhost:3050/avodaqkdb',
            data: {
                category: this.state.category,
                title: this.state.title,
                description: this.state.description,
                ticket_tag: this.state.ticket_tag,
            },
            params: {
                workaround_list: workaround,
                resolution_list: resolution, 
                }
        })
        
        alert("Successfully Added!");
    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
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
                        <option value="cucm">Cisco Unified Communications Manager</option>
                        <option value="imp">Cisco Instant Messaging and Presence</option>
                        <option value="cuc">Cisco Unity Connection</option>
                        <option value="vg">Voice Gateway</option>
                    </select>
                </label> <br/>
                <label>Title: 
                    <input 
                        style={{marginLeft: "83px", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}/>
                </label> <br />
                <label>Description: 
                    <input 
                        style={{marginLeft: "34px", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Related Tickets: 
                    <input 
                        style={{marginLeft: "9px", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="ticket_tag" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />
                <label>Workaround: 
                    <textarea 
                        style={{marginLeft: "29px", width: "800px", height: "100px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="workarounds" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />
                <label>Resolution: 
                    <textarea 
                        style={{marginLeft: "40px", width: "800px", height: "100px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="resolutions" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />
                <button onClick={this.addBtnClick}>Add!
                </button>
            </div>
        );
    }
}

module.exports = Add;
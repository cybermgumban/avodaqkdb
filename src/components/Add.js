var React = require("react");
var axios = require("axios");

var serverIp = require("./ServerIp");

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "jabber",
            customer: "",
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
            url: `http://${serverIp}/avodaqkdb`,
            data: {
                category: this.state.category,
                customer: this.state.customer,
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
                        style={{marginLeft: "55px", textAlignLast: "center", width: "800px"}}  
                        value={this.state.category} 
                        name="category" 
                        onChange={this.handleChange}>
                        <option defaultValue value="jabber">Jabber</option>
                        <option value="cucm">Cisco Unified Communications Manager</option>
                        <option value="imp">Cisco Instant Messaging and Presence</option>
                        <option value="cuc">Cisco Unity Connection</option>
                        <option value="vg">Voice Gateway</option>
                        <option value="exp">Expressway</option>
                        <option value="spark">Spark</option>
                        <option value="gen">General</option>
                        <option value="andtek">Andtek</option>

                    </select>
                </label> <br/>
                <label>Top 5 Customer?: 
                    <select
                        style={{marginLeft: "5px", textAlignLast: "center", width: "800px"}}  
                        value={this.state.customer} 
                        name="customer" 
                        onChange={this.handleChange}>
                        <option defaultValue value="na">N/A</option>
                        <option value="Mediacorp">Mediacorp</option>
                        <option value="SAS">SAS</option>
                        <option value="Dulwich College">Dulwich College</option>
                        <option value="RHTLaw">RHTLaw</option>
                        <option value="ABS">ABS</option>

                    </select>
                </label> <br/>
                <label>Title: 
                    <input 
                        style={{marginLeft: "88px", width: "800px"}} 
                        value={this.state.title}
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}/>
                </label> <br />
                <label>Description: 
                    <input 
                        style={{marginLeft: "39px", width: "800px"}} 
                        value={this.state.description}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Related Tickets: 
                    <input 
                        style={{marginLeft: "14px", width: "800px"}} 
                        value={this.state.ticket_tag}
                        type="text" 
                        name="ticket_tag" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />
                <label>Workaround: 
                    <textarea 
                        style={{marginLeft: "34px", width: "800px", height: "100px"}} 
                        value={this.state.workarounds}
                        type="text" 
                        name="workarounds" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />
                <label>Resolution: 
                    <textarea 
                        style={{marginLeft: "45px", width: "800px", height: "100px"}} 
                        value={this.state.resolutions}
                        type="text" 
                        name="resolutions" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />

                    <p>================================</p>
                    <p>To add images, please save the image(s) first in this path in NAS: PATH</p>
                    <label> Please select file format: 
                        <select
                            style={{marginLeft: "5px", textAlignLast: "center"}}
                            value={this.format} 
                            name="format" 
                            onChange={this.handleChange}>
                            <option defaultValue value="jpg">JPEG</option>
                            <option value="png">PNG</option>

                        </select>
                    </label> <br/>
                    <label>Input filename as saved in the NAS folder: 
                        <input 
                            style={{marginLeft: "14px"}} 
                            value={this.filename}
                            type="text" 
                            name="filename" 
                            onChange={this.handleChange}/>
                    </label> <br/>

                    <button>Generate now!</button> <br/>
                    <label>Result: 
                        <input 
                            style={{marginLeft: "14px"}} 
                            value={`<img src={C:/Users/Marlon Gumban/Documents/pictures/${this.filename}.${this.format}} alt=${this.filename} />`}
                            type="text" 
                            name="result" 
                            onChange={this.handleChange}/>
                    </label>
                    <p>================================</p>
                    <br/>

                <button onClick={this.addBtnClick}>Add!
                </button>
            </div>
        );
    }
}

module.exports = Add;
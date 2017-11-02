var React = require("react");
var axios = require("axios");

var serverIp = require("./ServerIp");

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            title: "",
            ticket_tag: "",
            description: "",
            workaround: [],
            resolution: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.editBtnClick = this.editBtnClick.bind(this);
        // this.updateAndConvertToArray = this.updateAndConvertToArray.bind(this);
    }

    handleChange(event) {

        var name = event.target.name;

        console.log(this.state.title)

        this.setState({
            [name]: event.target.value,
        });

    }

    // updateAndConvertToArray() {

    //     this.setState({
    //         workaround: this.state.workaround.split("\n"),
    //         resolution: this.state.resolution.split("\n")
    //     })

    // }

    editBtnClick() {
        // this.updateAndConvertToArray();

        axios({
            method: 'put',
            url: `http://${serverIp}/avodaqkdb/update/${this.props.location.state.id}`,
            data: {
                title: this.state.title,
                description: this.state.description,
                ticket_tag: this.state.ticket_tag,
            },
            params: {
                workaround_list: this.state.workaround.split("\n"),
                resolution_list: this.state.resolution.split("\n"), 
                }
        }).then(() => alert("Edit Successful!"));
    }

    render() { 

        // let workaround = this.props.location.state.workaround
        // let resolution = this.props.location.state.resolution

        // workaround = workaround.join("\n");
        // resolution = resolution.join("\n");

        return (
            <div>
                <h1>Let's Edit some data!</h1>

                <p style={{color: "gray"}}><b>Title:</b> {this.props.params.title}</p>
                <label><b>Title:</b>
                    <input 
                        style={{marginLeft: "83px", width: "800px"}} 
                        defaultValue={this.state.title}
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}/>
                </label> <br /> <br />

                <p style={{color: "gray"}}><b>Description:</b> {this.props.location.state.description}</p>
                <label><b>Description:</b>
                    <input 
                        style={{marginLeft: "34px", width: "800px"}} 
                        defaultValue={this.state.description}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />

                <p style={{color: "gray"}}><b>Related Tickets:</b> {this.props.location.state.ticket_tag}</p>
                <label><b>Related Tickets:</b>
                    <input 
                        style={{marginLeft: "9px", width: "800px"}} 
                        defaultValue={this.state.ticket_tag}
                        type="text" 
                        name="ticket_tag" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />

                <b style={{color: "gray"}}>Workaround:</b>
                    {this.props.location.state.workaround.map((db,index) => {
                    return <p key={index} style={{margin: "-3px", color: "gray"}}>{db}</p>
                    })}
                <label><b>Workaround:</b>
                    <textarea 
                        style={{marginLeft: "29px", marginTop: "10px", width: "800px", height: "100px"}} 
                        defaultValue={this.state.workaround}
                        type="text" 
                        name="workaround" 
                        onChange={this.handleChange}/>
                </label> <br/> <br />

                <b style={{color: "gray"}}>Resolution:</b>
                    {this.props.location.state.resolution.map((db,index) => {
                    return <p key={index} style={{margin: "-3px", color: "gray"}}>{db}</p>
                    })}
                <label><b>Resolution:</b>
                    <textarea 
                        style={{marginLeft: "40px", marginTop: "10px", width: "800px", height: "100px"}} 
                        defaultValue={this.state.resolution}
                        type="text" 
                        name="resolution" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <button onClick={this.editBtnClick}>Edit!</button>
            </div>
        );
    }
}

module.exports = Edit;
var React = require("react");
var axios = require("axios");

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            title: "",
            description: "",
            workaround: [],
            resolution: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.editBtnClick = this.editBtnClick.bind(this);
        this.updateAndConvertToArray = this.updateAndConvertToArray.bind(this);
    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    updateAndConvertToArray() {

        if(this.state.title = "") {
            this.setState({
                title: this.props.params.title
            })
        }else
            this.setState({
                workaround: this.state.workaround.split("\n"),
                resolution: this.state.resolution.split("\n")
            })
        }

    editBtnClick() {
        this.updateAndConvertToArray();

        axios({
            method: 'put',
            url: `http://localhost:3050/avodaqkdb/update/${this.props.location.state.id}`,
            data: {
                title: this.state.title,
                description: this.state.description,
                ticket_tag: this.state.ticket_tag,
            },
            params: {
                workaround_list: this.state.workaround,
                resolution_list: this.state.resolution, 
                }
        }).then(() => alert("Edit Successful!"));
    }

    render() {
        let workaround = this.props.location.state.workaround
        let resolution = this.props.location.state.resolution

        workaround = workaround.join("\n");
        resolution = resolution.join("\n");

        return (
            <div>
                <h1>Let's Edit some data!</h1>

                <label>Title: 
                    <input 
                        style={{marginLeft: "83px", width: "800px"}} 
                        defaultValue={this.props.params.title}
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}/>
                </label> <br />
                <label>Description: 
                    <input 
                        style={{marginLeft: "34px", width: "800px"}} 
                        defaultValue={this.props.location.state.description}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Related Tickets: 
                    <input 
                        style={{marginLeft: "9px", width: "800px"}} 
                        defaultValue={this.props.location.state.ticket_tag}
                        type="text" 
                        name="ticket_tag" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Workaround: 
                    <textarea 
                        style={{marginLeft: "29px", width: "800px", height: "100px"}} 
                        defaultValue={workaround}
                        type="text" 
                        name="workaround" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Resolution: 
                    <textarea 
                        style={{marginLeft: "40px", width: "800px", height: "100px"}} 
                        defaultValue={resolution}
                        type="text" 
                        name="resolution" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <button onClick={this.editBtnClick}>Edit!
                </button>
            </div>
        );
    }
}

module.exports = Edit;
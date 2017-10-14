var React = require("react");
var axios = require("axios");

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            title: "",
            description: "",
            id: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.editBtnClick = this.editBtnClick.bind(this);
    }

    editBtnClick() {
        console.log("pinindot ang edit")
        axios({
            method: 'put',
            url: `http://localhost:3050/avodaqkdb/update/${this.props.location.state.id}`,
            data: {
                title: this.state.title,
                description: this.state.description,
            }
        }).then(() => alert("Edit Successful!"));
    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });

        console.log(this.state.title)
    }

    render() {
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
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Workaround: 
                    <input 
                        style={{marginLeft: "29px", width: "800px"}} 
                        defaultValue={this.props.location.state.workaround}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Resolution: 
                    <input 
                        style={{marginLeft: "40px", width: "800px"}} 
                        defaultValue={this.props.location.state.resolution}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <button onClick={this.editBtnClick}>Edit!
                </button>
            </div>
        );
    }
}

module.exports = Edit;
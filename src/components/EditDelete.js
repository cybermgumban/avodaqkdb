var React = require("react");
var axios = require("axios");

class EditDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            title: "",
            description: "",
        }
    }

    render() {
        return (
            <div>
                <h1>Let's {this.props.params.func} some data!</h1>

                <label>Category: 
                    <input 
                        style={{marginLeft: "42px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="category" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <label>Title: 
                    <input 
                        style={{marginLeft: "75px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}/>
                </label> <br />
                <label>Description: 
                    <input 
                        style={{marginLeft: "26px", textAlign: "center", width: "800px"}} 
                        value={this.state.keyword}
                        type="text" 
                        name="description" 
                        onChange={this.handleChange}/>
                </label> <br/>
                <button onClick={this.addBtnClick}>{this.props.params.func}!
                </button>
            </div>
        );
    }

}

module.exports = EditDelete;
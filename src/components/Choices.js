var React = require("react");

var choicesStyle = {
    backgroundColor: "#00004c",
    color: "white",
    marginRight: "-10px",
    marginLeft: "-10px",
    height: "32px",
    width: "auto",
    textAlign: "right",
};

var btnStyle = {
    marginTop: "5px",
    marginBottom: "10px",
    marginRight: "10px"
};

class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.props.onBtnClick = this.props.onBtnClick.bind(this);
    }

    render() {
        return (
            <div style={choicesStyle}>
                <button 
                    style={btnStyle}
                    value = "homepage"
                    onClick={this.props.onBtnClick}>
                    Homepage
                </button>
                <button 
                    style={btnStyle} 
                    value="search"
                    onClick={this.props.onBtnClick}>
                    Search
                </button>
                <button 
                    style={btnStyle} 
                    value="add"
                    onClick={this.props.onBtnClick}>
                    Add
                </button>
                <button 
                    style={btnStyle} 
                    value="edit"
                    onClick={this.props.onBtnClick}>
                    Edit
                </button>
                <button 
                    style={btnStyle} 
                    value="delete"
                    onClick={this.props.onBtnClick}>
                    Delete
                </button>
            </div>
        );
    }
}

module.exports = Choices;
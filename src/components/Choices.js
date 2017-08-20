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
    render() {
        return (
            <div style={choicesStyle}>
                <button style={btnStyle}>Homepage</button>
                <button style={btnStyle}>Search</button>
                <button style={btnStyle}>Add</button>
                <button style={btnStyle}>Edit</button>
                <button style={btnStyle}>Delete</button>
            </div>
        );
    }
}

module.exports = Choices;
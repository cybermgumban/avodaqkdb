var React = require("react");

var li = {
    textIndent: "40px"
}

class ShowOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.params.title
        }
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign:"center"}}>Title: {this.props.params.title}</h3>
                <p><b>Description:</b> {this.props.location.state.description}</p>
                <p><b>Troubleshooting:</b> {
                    this.props.location.state.workaround.map((db, index) => (
                        <li style={li} key={index}>
                            {db}
                        </li>
                    ))}</p>
            </div>
        );
    }
}

module.exports = ShowOne;
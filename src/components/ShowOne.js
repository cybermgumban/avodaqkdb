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
        console.log(this.state.title)
        return (
            <div>
                <p>Title: {this.props.params.title}</p>
                <p>Description: {this.props.location.state.description}</p>
                <p>Workaround: {
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
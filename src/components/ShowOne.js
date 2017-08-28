var React = require("react");

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
                <p>Workaround: {this.props.location.state.workaround}</p>
            </div>
        );
    }
}

module.exports = ShowOne;
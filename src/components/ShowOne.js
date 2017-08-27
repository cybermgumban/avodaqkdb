var React = require("react");
var dbjabber = require("../db/dbjabber");

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
                <p>Description: {this.props.location.query.description}</p>
                <p>Workaround: {this.props.location.query.workaround}</p>
            </div>
        );
    }
}

module.exports = ShowOne;
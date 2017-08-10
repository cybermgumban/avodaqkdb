var React = require("react");

class Type extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <h1>Type: {this.props.showType}</h1>
        );
    }
}

class Show extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Type showType={this.props.show.type} />
        );
    }
}

module.exports = Show;
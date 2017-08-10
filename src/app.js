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
    static defaultProps = {
        showIndex: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            showIndex: this.props.showIndex
        };
    }

    handleBtnClick() {
        var totalShows = this.props.show.length;
        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    }

    render() {
        return (
            <div>
            <Type showType={this.props.show[this.state.showIndex].type} />
            <button onClick={this.handleBtnCLick}>Next</button>
            </div>
        );
    }
}

module.exports = Show;
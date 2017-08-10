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
        var totalShows = this.props.db.length;
        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    }

    render() {
        var show = this.props.db[this.state.showIndex]; 
        console.log(this.props.db);
        return (
            <div>
            <Type showType={show.type} />
            <button onClick={this.handleBtnClick.bind(this)}>Next</button>
            </div>
        );
    }
}

module.exports = Show;
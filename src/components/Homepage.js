var React = require("react");
var db = require("../db");

/*
class Type extends React.Component {
    render() {
        return (
            <h3>Type: {this.props.showType}</h3>
        );
    }
}

class Title extends React.Component {
    render() {
        return (
            <h3>Title: {this.props.showTitle}</h3>
        );
    }
}

class Description extends React.Component {
    render() {
        return (
            <h3>Description: {this.props.showDescription}</h3>
        );
    }
}

class Workaround extends React.Component {
    render() {
        return (
            <h3>Workaround: {this.props.showWorkaround}</h3>
        );
    }
}
*/

class Show extends React.Component {
    static defaultProps = {
        showIndex: 0
    };

    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.state = {
            showIndex: this.props.showIndex
        };
    }

    handleBtnClick() {
        var totalShows = db.length;
        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    }

/*
var show = db[this.state.showIndex];
<Type showType={show.type} />
<Title showTitle={show.title} />
<Description showDescription={show.description} />
<Workaround showWorkaround={show.workaround} />
*/

    render() {
        var result = null;

        if (this.props.result === "homepage") {
            result = (
                <div>
                <h3>Type: {db[this.state.showIndex].type}</h3>
                <h3>Title: {db[this.state.showIndex].title}</h3>
                <h3>Description: {db[this.state.showIndex].description}</h3>
                <h3>Workaround: {db[this.state.showIndex].workaround}</h3>
                <button onClick={this.handleBtnClick}>Next</button>
                </div>
            );
        }

        return (
            <div>
            {result}
            </div>
        );
    }
}

module.exports = Show;
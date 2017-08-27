var React = require("react");

var db = require("../db/db");

class TitleDescription extends React.Component {
    render() {
        return (
        <div>
        <li>Title: {this.props.showDbJabberTitle} </li>
        <li>Description: {this.props.showDbJabberDescription} </li>
        <li>Workaround: {this.props.showDbJabberWorkaround}</li>
        </div>
        );
    }
}

class All extends React.Component {
    static defaultProps = {
        showIndex: 0,
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

    render() {
        var resultJabber = null;

        if (this.props.result === "showall") {
            resultJabber = (
                <div>
                    <h3>Jabber</h3>
                </div>
            )
        }

        return (
            <div>
                {console.dir(db)}
            {resultJabber}
            </div>
        );

    }
}

module.exports = All;
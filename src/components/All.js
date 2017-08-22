var React = require("react");
var dbjabber = require("../db/dbjabber");
var dbipphone = require("../db/dbipphone");
var dbcucm = require("../db/dbcucm");

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
        var totalShows = dbjabber.length;
        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    }

    render() {
        var resultJabber = null;
        var jabber = [];
 
        for (var i = 0 ; i<dbjabber.length; i++) {
            jabber.push(<TitleDescription showDbJabberTitle={dbjabber[i].title} showDbJabberDescription={dbjabber[i].description} showDbJabberWorkaround={dbjabber[i].workaround}/>, <br />)
        }

        if (this.props.result === "showall") {
            resultJabber = (
                <div>
                    <h3>Jabber</h3>
                    {jabber}
                </div>
            )
        }

        return (
            <div>
            {resultJabber}
            </div>
        );

    }
}

module.exports = All;
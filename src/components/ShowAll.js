var React = require("react");
var Choices = require("./Banner");
var All = require("./All");
var Search = require("./Search");
var Aed = require("./Aed");

class ShowAll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: ""
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick(event) {
        var e = event.target.value;
        var btnClicked = this.state.btnClicked;
        if (e === "showall") {
            console.log("showall");
            btnClicked = "showall";
        } else if (e === "search") {
            console.log("search");
            btnClicked = "search";
        } else if (e === "add") {
            btnClicked = "add";
        } else if (e === "edit") {
            btnClicked = "edit";
        } else if (e === "delete") {
            btnClicked = "delete";
        }

        this.setState ({
            btnClicked: btnClicked
        });
    }

    render() {
        return (
            <div>
            <Choices onBtnClick={this.handleBtnClick}/> <br />
            <All result={this.state.btnClicked}/>
            <Search result={this.state.btnClicked} />
            <Aed result={this.state.btnClicked} />
            </div>
        );
    }
}

module.exports = ShowAll;
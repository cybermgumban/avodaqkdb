var React = require("react");
var Banner = require("./Banner");
var Homepage = require("./Homepage");
var Choices = require("./Choices");
var Search = require("./Search");

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
        if (e === "homepage") {
            console.log("homepage");
            btnClicked = "homepage";
        } else if ( e === "search") {
            console.log("search");
            btnClicked = "search";
        }

        this.setState ({
            btnClicked: btnClicked
        });
    }

    render() {
        return (
            <div>
            <Banner /> <br />
            <Choices onBtnClick={this.handleBtnClick}/> <br />
            <Homepage result={this.state.btnClicked}/>
            <Search result={this.state.btnClicked} />
            </div>
        );
    }
}

module.exports = ShowAll;
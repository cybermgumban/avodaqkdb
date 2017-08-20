var React = require("react");
var Banner = require("./Banner");
var App = require("./App");
var Choices = require("./Choices");

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
            btnClicked = "homepage";
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
            <App result={this.state.btnClicked}/>
            </div>
        );
    }
}

module.exports = ShowAll;
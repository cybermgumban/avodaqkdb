var React = require("react");
var Banner = require("./Banner");
var App = require("./App");
var Choices = require("./Choices");

class ShowAll extends React.Component {
    constructor(props) {
        super(props);
        this.HomepageBtnClick = this.HomepageBtnClick.bind(this);
    }

    HomepageBtnClick() {

    }

    render() {
        return (
            <div>
            <Banner /> <br />
            <Choices /> <br />
            <App onHomepageBtnClick = {this.HomepageBtnClick}/>
            </div>
        );
    }
}

module.exports = ShowAll;
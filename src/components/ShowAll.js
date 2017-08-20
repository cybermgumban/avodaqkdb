var React = require("react");
var Banner = require("./Banner");
var App = require("./App");
var Choices = require("./Choices");

class ShowAll extends React.Component {
    render() {
        return (
            <div>
            <Banner /> <br />
            <Choices /> <br />
            <App />
            </div>
        );
    }
}

module.exports = ShowAll;
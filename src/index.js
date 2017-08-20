var React = require("react");
var ReactDOM = require("react-dom");
var Banner = require("./components/Banner");
var App = require("./components/App");
var Choices = require("./components/Choices");

ReactDOM.render (
    <div>
    <Banner /> <br />
    <Choices /> <br />
    <App />
    </div>,
    document.getElementById("root")
)
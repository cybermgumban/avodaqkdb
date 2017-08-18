var React = require("react");
var ReactDOM = require("react-dom");
var db = require("./db");
var Show = require("./app");
var HomePage = require("./components/HomePage");

ReactDOM.render (
    <HomePage />,
    document.getElementById("root")
)
var React = require("react");
var ReactDOM = require("react-dom");
var db = require("./db");
var Show = require("./app");

ReactDOM.render (
    <Show db={db} />,
    document.getElementById("root")
)
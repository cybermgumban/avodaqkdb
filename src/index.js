var React = require("react");
var ReactDOM = require("react-dom");
var Show = require("./app");
var db = require("./db");

ReactDOM.render (
    <Show db={db} />,
    document.getElementById("root")
);

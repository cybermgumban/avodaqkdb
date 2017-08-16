var React = require("react");
var ReactDOM = require("react-dom");
var db = require("./db");
var Show = require("./app");
var HomePage = require("./HomePage");

ReactDOM.render (
    <div>
    <HomePage />
    <Show db={db} />
    </div>,
    document.getElementById("root")
)
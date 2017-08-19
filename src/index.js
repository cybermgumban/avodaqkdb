var React = require("react");
var ReactDOM = require("react-dom");
var HomePage = require("./components/HomePage");
var Search = require("./components/Search");
var App = require("./components/App");

ReactDOM.render (
    <div>
    <HomePage /> <br />
    <Search /> <br />
    <App />
    </div>,
    document.getElementById("root")
)
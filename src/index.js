var React = require("react");
var ReactDOM = require("react-dom");
var {Router, Route, useRouterHistory,IndexRoute} = require("react-router");
var {createHashHistory} = require("history");

var Choices = require("./components/Banner");
var ShowAll = require("./components/ShowAll");
var Disclaimer = require("./components/Disclaimer");
var Search = require("./components/Search");

var appHistory = useRouterHistory(createHashHistory)({ queryKey:false})

ReactDOM.render (
    <Router history={appHistory} onUpdate={()=>window.scrollTo(0,0)}>
        <Route path="/" component={Choices} >
            <IndexRoute component={Disclaimer} />
            <Route path="showall" component={ShowAll} />
            <Route path="function/search" component={Search} />
        </Route>
    </Router>,
    document.getElementById("root")
)
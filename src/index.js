var React = require("react");
var ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, browserHistory} = require("react-router");
//var {createHashHistory} = require("history");

var Choices = require("./components/Banner");
var ShowAll = require("./components/ShowAll");
var Disclaimer = require("./components/Disclaimer");
var Search = require("./components/Search");
var ShowOne = require("./components/ShowOne");
var Add = require("./components/Add");
var EditDelete = require("./components/EditDelete");

//var appHistory = useRouterHistory(createHashHistory)({ queryKey:false})

/* const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/avodaqkdb');
mongoose.connection
    .once('open', (done) => done())
    .on('error', (err) => {
        console.log('Warning', err)
    });
*/

ReactDOM.render (
    <Router history={browserHistory} onUpdate={()=>window.scrollTo(0,0)}>
        <Route path="/" component={Choices} >
            <IndexRoute component={Disclaimer} />
            <Route path="function/showall" component={ShowAll} />
            <Route path="function/search" component={Search} />
            <Route path="function/showone/:title" component={ShowOne} />
            <Route path="function/Add" component={Add} />
            <Route path="function/edit/:title" component={EditDelete} />
        </Route>
    </Router>,
    document.getElementById("root")
)
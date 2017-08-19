var React = require("react");

class Search extends React.Component {
    render() {
        return (
            <form style={{float:"right"}}>
                <label>Search:  </label>
                <input name="search" id="search"/>
            </form>
        );
    }
}

module.exports = Search;
var React = require("react");

//Aed means Add Edit Delete

class Aed extends React.Component {
    render() {

        var result = "";

        if (this.props.result === "add" || this.props.result === "edit" || this.props.result === "delete") {
            console.log(this.props.result);
            result = <h1>This function is still under development...</h1>;
        } 

        return (
            <div>
            {result}
            </div>
        );
    }
}

module.exports = Aed;
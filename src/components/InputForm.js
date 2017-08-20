var React = require("react");

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
        return (
        <div>
            <form>
            <input type="text" name="inputtitle"/><br />
            <textarea type="text" name="inputworkaround" rows="7" cols="30" onChange={this.inputworkaround}></textarea><br />
            <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        );
    }
}

module.exports = InputForm;
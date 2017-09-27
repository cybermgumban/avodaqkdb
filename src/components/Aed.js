var React = require("react");
var axios = require("axios");

//Aed means Add Edit Delete

class Aed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        }
        this.getBtnClick = this.getBtnClick.bind(this);
        this.postBtnClick = this.postBtnClick.bind(this);
        this.putBtnClick = this.putBtnClick.bind(this);
        this.deleteBtnClick = this.deleteBtnClick.bind(this);
    }

    getBtnClick() {
        axios({
            method: 'get',
            url: 'http://localhost:3050/avodaqkdb',
        }).then((res) => {
            console.log(res.data[0].category);
            this.setState({
                category: res.data[0].category
            });
        });
    }

    postBtnClick() {

    }

    putBtnClick() {

    }

    deleteBtnClick() {

    }

    render() {
        return (
            <div>
                <h1>This function {this.props.params.func} is under development... :)</h1>
                <button onClick={this.getBtnClick}>Get data!</button>
                <h2>{this.state.category}</h2>
            </div>
        );   
    }
}

module.exports = Aed;
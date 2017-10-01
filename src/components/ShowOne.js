var React = require("react");
var axios = require("axios");

var li = {
    textIndent: "40px"
}

class ShowOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.params.title
        }
        this.deleteBtnClick = this.deleteBtnClick.bind(this);
    }


    deleteBtnClick() {
        var theAnswer = window.confirm("are you sure");
        if(theAnswer){
            axios({
                method: 'delete',
                url: 'http://localhost:3050/avodaqkdb',
                data: {
                    title: this.props.params.title
                }
            })
            alert("Successfully Deleted");
        } else {
            alert("Delete Cancelled");
        }
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.deleteBtnClick}
                    style={{
                        float: "right", 
                        marginLeft: "5px" , 
                        marginRight: "5px"}}
                        >Delete?
                </button>
                <button 
                    style={{
                        float: "right", 
                        marginLeft: "5px" , 
                        marginRight: "5px"}}
                        >Edit?
                </button>
                <br />
                
                <h3 style={{textAlign:"center"}}>Title: {this.props.params.title}</h3>
                <p><b>Description:</b> {this.props.location.state.description}</p>

            </div>
        );
    }
}

/*
                <p><b>Troubleshooting:</b> {
                    this.props.location.state.workaround.map((db, index) => (
                        <li style={li} key={index}>
                            {db}
                        </li>
                    ))}</p>
*/

module.exports = ShowOne;
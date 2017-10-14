var React = require("react");
var axios = require("axios");
var {Link} = require("react-router");

class ShowOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.params.title,
            id: ""
        }
        this.deleteBtnClick = this.deleteBtnClick.bind(this);
    }


    deleteBtnClick() {
        var theAnswer = window.confirm("Are you sure?");
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
                        >
                            <Link to={{
                                pathname: `/function/edit/${this.props.params.title}`,
                                state: {
                                    category: this.props.location.state.category,
                                    description: this.props.location.state.description,
                                    id: this.props.location.state.id
                                }}} >
                                Edit?
                            </Link>
                </button>
                <br />
                
                <h3 style={{textAlign:"center"}}>Title: {this.props.params.title}</h3>
                <p><b>Description:</b> {this.props.location.state.description}</p>
                <p><b>Related Tickets:</b> {this.props.location.state.ticket_tag}</p>
                <p><b>Workaround:</b> {this.props.location.state.workaround}</p>
                <p><b>Resolution:</b> {this.props.location.state.resolution}</p>

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
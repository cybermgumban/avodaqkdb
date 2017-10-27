var React = require("react");
var axios = require("axios");
var {Link} = require("react-router");

var serverIp = require("./ServerIp");


var li = {
    textIndent: "40px"
}

class ShowOne extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.params.title,
            id: "",
            workaroundlist: [],
        }
        this.deleteBtnClick = this.deleteBtnClick.bind(this);
    }


    deleteBtnClick() {
        var theAnswer = window.confirm("Are you sure?");
        if(theAnswer){
            axios({
                method: 'delete',
                url: `http://${serverIp}/avodaqkdb`,
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
        let workaround = [];
        let resolution = [];
        workaround = this.props.location.state.workaround;
        resolution = this.props.location.state.resolution;
        

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
                                    id: this.props.location.state.id,
                                    ticket_tag: this.props.location.state.ticket_tag,
                                    workaround: workaround,
                                    resolution: resolution,
                                }}} >
                                Edit?
                            </Link>
                </button>
                <br />
              
                <h3 style={{textAlign:"center"}}>Title: {this.props.params.title}</h3>
                <p><b>Description:</b> {this.props.location.state.description}</p>
                <b>Workaround:</b>
                    {workaround.map((db,index) => {
                    return <li key={index} style={li}>{db}</li>
                    })}
                <b>Resolution:</b>
                    {resolution.map((db,index) => {
                    return <li key={index} style={li}>{db}</li>
                    })}
                <p style={{fontSize: "10px", color: "gray"}}><b>Related Tickets:</b> {this.props.location.state.ticket_tag}</p>

        </div>
        );
    }
}

module.exports = ShowOne;
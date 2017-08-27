var React = require("react");

//    backgroundImage: "url(" + TestBanner + ")",

var bannerStyle = {
    backgroundColor: "#00004c",
    marginTop: "-20px",
    marginRight: "-10px",
    marginBottom: "0px",
    marginLeft: "-10px",
    textAlign: "center",
    height: "80px",
    width: "auto",
    fontSize: "20px",
    color: "white"
};

var choicesStyle = {
    backgroundColor: "#00004c",
    color: "white",
    marginRight: "-10px",
    marginLeft: "-10px",
    height: "32px",
    width: "auto",
    textAlign: "right",
};

var btnStyle = {
    marginTop: "5px",
    marginBottom: "10px",
    marginRight: "10px"
};


class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.props.onBtnClick = this.props.onBtnClick.bind(this);
    }

    render() {
        return (
            <div>
            <div style={bannerStyle}>
            <span style={{float:"left"}}>
                <img 
                    src="https://s3-media3.fl.yelpcdn.com/bphoto/yhZoBIKYqfNuj70AdfTT7A/o.jpg"                    
                    style={{height:"90px", widht:"80px"}}
                    alt="avodaq-icon" />
                </span>
            <h2 style={{paddingTop:"20px"}}>Avodaq Pte Ltd Knowledge Database</h2>
            </div> 
                <br />
            <div style={choicesStyle}>
                <button 
                    style={btnStyle}
                    value = "showall"
                    onClick={this.props.onBtnClick}>
                    Show All
                </button>
                <button 
                    style={btnStyle} 
                    value="search"
                    onClick={this.props.onBtnClick}>
                    Search
                </button>
                <button 
                    style={btnStyle} 
                    value="add"
                    onClick={this.props.onBtnClick}>
                    Add
                </button>
                <button 
                    style={btnStyle} 
                    value="edit"
                    onClick={this.props.onBtnClick}>
                    Edit
                </button>
                <button 
                    style={btnStyle} 
                    value="delete"
                    onClick={this.props.onBtnClick}>
                    Delete
                </button>
            </div>
            </div>
        );
    }
}

module.exports = Choices;
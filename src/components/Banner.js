var React = require("react");
var {Link} = require("react-router");

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
    borderStyle: "solid",
    marginRight: "-10px",
    marginLeft: "-10px",
    height: "32px",
    width: "auto",
    textAlign: "right",
};

var anchorStyle = {
    float: "left",
    marginTop:"8px",
    marginLeft:"10px"
};

class Choices extends React.Component {
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
            <h2 style={{paddingTop:"20px"}}>avodaq Pte Ltd Knowledge Database</h2>
            </div> 
                <br />
            <div style={choicesStyle}>
                <p style={anchorStyle}>
                    <Link to="/function/showall">
                        Show All
                    </Link>
                </p>
                <p style={anchorStyle}>
                    <Link to="/function/search">
                        Search
                    </Link>
                </p>
                <p style={anchorStyle}>
                    <Link to="/function/add">
                        Add
                    </Link>
                </p>
                <p style={anchorStyle}>
                    <Link to="/function/edit">
                        Edit
                    </Link>
                </p>
                <p style={anchorStyle}>
                    <Link to="/function/delete">
                        Delete
                    </Link>
                </p>
            </div> <br />
                {this.props.children}
            </div>
        );
    }
}

module.exports = Choices;
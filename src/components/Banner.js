var React = require("react");
var {Link} = require("react-router");

//    backgroundImage: "url(" + TestBanner + ")",

//show all icon - http://icons.iconarchive.com/icons/icons8/windows-8/512/Programming-Show-Property-icon.png
//seach icon - http://icons.iconarchive.com/icons/rafiqul-hassan/blogger/512/Search-icon.png
//add icon - http://icons.iconarchive.com/icons/iconsmind/outline/512/Add-icon.png
//edit icon - http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/edit-icon.png
//delete icon - https://maxcdn.icons8.com/Share/icon/Editing//delete1600.png

var bannerStyle = {
    backgroundColor: "#00004c",
    marginTop: "-25px",
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
    height: "95px",
    width: "auto",
    textAlign: "right",
    margin: "0 auto"
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
                <div style={{verticalAlign:"top", marginLeft:"50px"}}>
                <p style={anchorStyle}>
                    <Link to="/function/showall">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Programming-Show-Property-icon.png" alt="show all icon"/>
                        <span style={{display:"block"}}>Show All</span>
                    </Link>
                </p>
                </div>
                <div style={{verticalAlign:"top", marginLeft:"150px"}}>
                <p style={anchorStyle}>
                    <Link to="/function/search">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/rafiqul-hassan/blogger/512/Search-icon.png" alt="search icon"/>
                        <span style={{display:"block"}}>Search</span>
                    </Link>
                </p>
                </div>
                <div style={{verticalAlign:"top", marginLeft:"250px"}}>
                <p style={anchorStyle}>
                    <Link to="/function/add">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Add-icon.png" alt="add icon"/>
                        <span style={{display:"block"}}>Add</span>
                    </Link>
                </p>
                </div>
                <div style={{verticalAlign:"top", marginLeft:"350px"}}>
                <p style={anchorStyle}>
                    <Link to="/function/edit">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/edit-icon.png" alt="edit icon"/>
                        <span style={{display:"block"}}>Edit</span>
                    </Link>
                </p>
                </div>
                <div style={{verticalAlign:"top", marginLeft:"450px"}}>
                <p style={anchorStyle}>
                    <Link to="/function/delete">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="https://maxcdn.icons8.com/Share/icon/Editing//delete1600.png" alt="delete icon"/>
                        <span style={{display:"block"}}>Delete</span>
                    </Link>
                </p>
                </div>
            </div> <br />
                {this.props.children}
            </div>
        );
    }
}

module.exports = Choices;
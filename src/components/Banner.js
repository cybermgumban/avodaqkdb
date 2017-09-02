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
    height: "80px",
    width: "100%",
    position: "fixed",
    fontSize: "20px",
    color: "white",
    marginTop: "-10px",
    marginRight: "-10px",
    marginLeft: "-10px",
    display: "inline-block",
    textAlign: "center",
    verticalAlign: "center"
};

var choicesStyle = {
    textAlign: "center",
    float: "left",
    borderRight: "solid",
    width: "80px",
    height: "100%",
    position: "fixed"
};

class Choices extends React.Component {
    render() {
        return (
            <div>
            <div style={bannerStyle}>
            <span style={{float:"left"}}>
                <img 
                    src="https://s3-media3.fl.yelpcdn.com/bphoto/yhZoBIKYqfNuj70AdfTT7A/o.jpg"                    
                    style={{height:"90px", widht:"80px", marginTop:"0px"}}
                    alt="avodaq-icon" />
                </span>
            <h2>avodaq Pte Ltd Knowledge Database</h2>
            </div>
                <br /> <br />
            <div style={{marginTop: "50px"}}>
            <div style={choicesStyle}>
                <br /> <br />
                <div>
                    <Link to="/function/showall">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/icons8/windows-8/512/Programming-Show-Property-icon.png" alt="show all icon"/>
                        <span style={{display:"block"}}>Show All</span>
                    </Link>
                </div>
                    <br />
                <div>
                    <Link to="/function/search">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/rafiqul-hassan/blogger/512/Search-icon.png" alt="search icon"/>
                        <span style={{display:"block"}}>Search</span>
                    </Link>
                </div>
                    <br />
                <div>
                    <Link to="/function/add">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/iconsmind/outline/512/Add-icon.png" alt="add icon"/>
                        <span style={{display:"block"}}>Add</span>
                    </Link>
                </div>
                    <br />
                <div>
                    <Link to="/function/edit">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="http://icons.iconarchive.com/icons/custom-icon-design/mono-general-2/512/edit-icon.png" alt="edit icon"/>
                        <span style={{display:"block"}}>Edit</span>
                    </Link>
                </div>
                    <br />
                <div>
                    <Link to="/function/delete">
                        <img 
                        style={{height:"50px", width:"50px"}}
                        src="https://maxcdn.icons8.com/Share/icon/Editing//delete1600.png" alt="delete icon"/>
                        <span style={{display:"block"}}>Delete</span>
                    </Link>
                </div>
            </div>
            <div style={{marginLeft:"120px", marginRight:"40px"}}>
                {this.props.children}
            </div>
            </div>
            </div>
        );
    }
}

module.exports = Choices;
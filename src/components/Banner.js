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

var Banner = function () {
        return (
        <div style={bannerStyle}>
            <span style={{float:"left"}}>
                <img 
                    src="https://s3-media3.fl.yelpcdn.com/bphoto/yhZoBIKYqfNuj70AdfTT7A/o.jpg"                    
                    style={{height:"90px", widht:"80px"}}
                    alt="avodaq-icon" />
                </span>
            <h2 style={{paddingTop:"20px"}}>Avodaq Knowledge Database</h2>
        </div>
        );
}

module.exports = Banner;
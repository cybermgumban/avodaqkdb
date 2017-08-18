var React = require("react");

//    backgroundImage: "url(" + TestBanner + ")",

var bannerStyle = {
    backgroundColor: "blue",
    backgroundSize: "100%",
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
            <span style={{float:"left"}}><img src="../avod.jpg" alt="avodaq-icon" /></span>
            <h2 style={{paddingTop:"20px"}}>Avodaq Knowledge Database</h2>
        </div>
        );
}

module.exports = Banner;
var React = require("react");
var TestBanner = require("./testbanner.png");

var bannerStyle = {
    backgroundImage: "url(" + TestBanner + ")",
    backgroundSize: "100%",
    marginTop: "0px",
    marginRight: "0px",
    marginBottom: "0px",
    marginLeft: "0px",
    backgroundRepeat: "no-repeat center fixed",
    align: "center",
    height: "180px"
};

var Banner = function () {
        return (
        <div style={bannerStyle}>
            <h2>Avodaq Knowledge Database
                <span>
                    <img src="./avodaq.jpg" alt="avodaq-icon"/>
                </span>
            </h2>
        </div>
        );
}

module.exports = Banner;
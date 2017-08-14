var React = require("react");
var $ = require("jquery");
var dbjson = require("./db");
var fs = require("fs");

//npm install --save jsonfile
//npm install jquery
//npm install appendjson

class Type extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <h3>Type: {this.props.showType}</h3>
        );
    }
}

class Title extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <h3>Title: {this.props.showTitle}</h3>
        );
    }
}

class Description extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <h3>Description: {this.props.showDescription}</h3>
        );
    }
}

class Workaround extends React.Component {
    constructor(props)  {
        super(props);
    }
    render() {
        return (
            <h3>Workaround: {this.props.showWorkaround}</h3>
        );
    }
}

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

    }

    render() {
/*           var data = {"type":"A"};
                
            $.ajax ({
                type: "Post",
                dataType: "json",
                asyn: "false",
                url: "C:/My_Programming_Folder/React_and_Redux/avodaqkdb/src/db.json",
                data: JSON.stringify(data)
            })


            var json = JSON.stringify(data);
            fs.writeFileSync("./db.json",json);             
*/
        return (
        <div>
            <form>
            <input type="text" name="inputtitle"/><br />
            <textarea type="text" name="inputworkaround" rows="7" cols="30" onChange={this.inputworkaround}></textarea><br />
            <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
        );
    }
}

class Show extends React.Component {
    static defaultProps = {
        showIndex: 0
    };

    constructor(props) {
        super(props);
        this.state = {
            showIndex: this.props.showIndex
        };
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        var totalShows = this.props.db.length;
        this.setState(function(prevState) {
            return {
                showIndex: (prevState.showIndex + 1) % totalShows
            };
        });
    }

    render() {
        var show = this.props.db[this.state.showIndex]; 
        return (
            <div>
            <Type showType={show.type} />
            <Title showTitle={show.title} />
            <Description showDescription={show.description} />
            <Workaround showWorkaround={show.workaround} />
            <button onClick={this.handleBtnClick}>Next</button>
            <InputForm />
            </div>
        );
    }
}




module.exports = Show;
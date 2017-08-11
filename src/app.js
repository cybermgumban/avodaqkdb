var React = require("react");

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
    }
    render() {
        return (
        <div>
            <input id="inputtitle" type="text" name="inputtitle" onChange={this.inputtitle}/><br />
            <textarea id="inputworkaround" type="text" name="inputworkaround" rows="7" cols="30" onChange={this.inputworkaround}></textarea>
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
        console.log(this.props.db);
        return (
            <div>
            <div>
            <Type showType={show.type} />
            <Title showTitle={show.title} />
            <Description showDescription={show.description} />
            <Workaround showWorkaround={show.workaround} />
            <button onClick={this.handleBtnClick.bind(this)}>Next</button><br />
            </div>
            <div>
            <InputForm />
            </div>
            </div>
        );
    }
}




module.exports = Show;
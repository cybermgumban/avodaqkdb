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

    handleSubmit() {

        var title = this.state.title;

        this.props.onHandleSubmit({title: title});

        this.setState({
            title: ""
    });
    }

    setValue(field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="inputtitle" value={this.state.showTitle.title} onChange={this.setValue.bind(this, "title")}/><br />
            <textarea type="text" name="inputworkaround" rows="7" cols="30" onChange={this.inputworkaround}></textarea><br />
            <input type="submit" value="submit" />
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
            <Type showType={show.type} />
            <Title showTitle={show.title} />
            <Description showDescription={show.description} />
            <Workaround showWorkaround={show.workaround} />
            <button onClick={this.handleBtnClick.bind(this)}>Next</button>
            <InputForm />
            </div>
        );
    }
}




module.exports = Show;
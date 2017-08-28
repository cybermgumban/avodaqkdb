var React = require("react");

class Search extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            type: "Jabber",
            keyword: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        var name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
    }

    handleSubmit(event) {
        alert(event.target.value);
    }

    render() {
            console.log(this.state.type);
            console.log(this.state.keyword);
        return (
            <div>
                <form>
                    <label>Type: 
                    <select 
                        value={this.state.type} 
                        name="type" 
                        onChange={this.handleChange}>
                        <option defaultValue value="Jabber">Jabber</option>
                        <option value="CUCM">CUCM</option>
                    </select>
                    </label>
                        <br /> <br />
                    <label>Keyword: 
                        <input 
                            value={this.state.keyword}
                            type="text" 
                            name="keyword" 
                            onChange={this.handleChange}/>
                    </label>
                        <br /> <br />
                    <label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/>
                    </label>
                </form>
            </div>
        );
    }
}

module.exports = Search;
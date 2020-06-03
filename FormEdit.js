import React, { Component } from 'react'

export class FormEdit extends Component {
    constructor(){
        super();
        this.state = {
            first: "",
            last: "",
            OS: "", 
            edit: false
        }; 
        
        this.baseState = this.state; 
    }

    edit =  () =>{
        this.setState({edit: true})
    };

    save = () => {
        this.setState({edit: false});
    };

    cancel = () => {
        this.setState({ ...this.baseState, edit: false });
      };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        let visible = 
            this.state.edit === false ? (
                <div>
                    <div className = "firstname">First name: {this.state.first}</div>
                    <br />
                    <div className = "lastname">Last name: {this.state.last}</div>
                    <br/>
                    <div className = "comType">OS: {this.state.OS}</div>
                    <button onClick={this.edit}>Edit</button>
                </div>
            ) : (
                <div>
                    <p>First: </p>
                    <input 
                    className = "initFirst"
                    type = "text"
                    name = "first"
                    onChange = {this.handleChange}
                    placeholder = {this.state.first}
                    />
                    <br/>
                    <p>Last: </p>
                    <input 
                    className = "initLast"
                    type = "text"
                    name = "last"
                    onChange = {this.handleChange}
                    placeholder = {this.state.last}
                    />
                    <br/>
                    <p>Favorite OS:</p>
                    <input
                    className = "initPlatform"
                    type = "text"
                    name = "OS"
                    onChange = {this.handleChange}
                    placeholder = {this.state.compType}
                    />
                    <br/>

                    <button className="save" onClick={this.save}>
                        Save
                    </button>
                    <button className="cancel" onClick = {this.cancel}>
                        Cancel
                    </button>
                </div>
            );

            return <div className="displayDiv">{visible}</div>
    }
}

export default FormEdit
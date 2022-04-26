import React from "react";
import ShowError from "./showmsg";

function ValidUser(length, min, max){
    return length < min || length > max ? true : false;
}

class UserName extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input: '',
            msgError: '',
            color: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){

        const input = event.target.value.trimEnd();

        const matches = input.match(/\s+/g);

        const min = 6;
        const max = 25;
        setTimeout(() => {
            
            if(event.target.value === ''){
                this.setState({ msgError: 'Input an username.' });
                this.setState({ color: 'border-red' });
                this.props.OnSubmitChange('');
            } else if(matches){
                this.setState({ msgError: 'Username cannot have blank spaces.' });
                this.setState({ color: 'border-red' });
                this.props.OnSubmitChange('');
            } else if(ValidUser(event.target.value.length, min, max)){
                this.setState({ msgError: `Username must be between ${min} and ${max} characters.` });
                this.setState({ color: 'border-red' });
                this.props.OnSubmitChange('');
            } else{
                this.setState({ msgError: '' });
                this.setState({ color: 'border-green' });
                this.setState({ input: input });
                this.props.OnSubmitChange(input);
            }
        }, 500);
    }

    render(){

        const color = this.state.color === 'border-green' ? 'border-green' : this.state.color === '' ? '' : 'border-red';

        return(
            <div className="form-field">
                <label htmlFor="username" className="label">Username:</label>
                <input 
                    type='text'
                    id='username'
                    onChange={this.handleChange}
                    className={color}
                />
                <ShowError 
                    msgError={this.state.msgError}
                />
            </div>
        );
    }
}

export default UserName;
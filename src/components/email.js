import React from "react";
import ShowError from "./showmsg";

function ValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

class Email extends React.Component{

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

        setTimeout(() => {
            
            if(event.target.value === ''){
                this.setState({ msgError: 'Input an email.' });
                this.setState({ color: 'border-red' });
                this.props.OnSubmitChange('');
            } else if(matches){
                this.setState({ msgError: 'Email cannot have blank spaces.' });
                this.setState({ color: 'border-red' });
                this.props.OnSubmitChange('');
            } else if(!ValidEmail(input)){
                this.setState({ msgError: 'Email is not valid' });
                this.setState({ color: 'border-red' });
                this.props.OnSubmitChange('');
            } else {
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
                <label htmlFor="email">Email:</label>
                <input 
                    type='email'
                    id='email'
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

export default Email;
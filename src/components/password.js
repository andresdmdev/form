import React from "react";
import ShowError from "./showmsg";

function ValidPassword(password){
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");    
    return re.test(password);
}

class Password extends React.Component{

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
            
            if(event.target.value == ''){
                this.setState({ msgError: 'Input a password.' });
                this.setState({ color: 'border-red' });
                this.props.onPasswordConfirm('');    
            } else if(matches){
                this.setState({ msgError: 'Password cannot have blank spaces.' });
                this.setState({ color: 'border-red' });
                this.props.onPasswordConfirm('');   
            } else if(!ValidPassword(input)){
                this.setState({ msgError: 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)' });
                this.setState({ color: 'border-red' });
                this.props.onPasswordConfirm('');
            } else {
                this.setState({ msgError: '' });
                this.setState({ color: 'border-green' });
                this.setState({ input: input });
                this.props.onPasswordConfirm(input);
            }
        }, 500);
    }


    render(){

        const color = this.state.color == 'border-green' ? 'border-green' : this.state.color == '' ? '' : 'border-red';

        return(
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input 
                    type='password'
                    id='password'
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

export default Password;
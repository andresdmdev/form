import React from 'react';
import ConfirPassword from './confirmPassword';
import Email from './email';
import Password from './password';
import UserName from './username';


function ValidPassword(password){
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");    
    return re.test(password);
}

class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPasword: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlerUserName = this.handlerUserName.bind(this);
        this.handlerEmail = this.handlerEmail.bind(this);
        this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        if (this.state.username === '' || this.state.email === '' || 
            this.state.password === '' || this.state.confirmPasword !== this.state.password
            || this.state.password === '' || this.state.confirmPasword === '' || 
            !ValidPassword(this.state.password) || !ValidPassword(this.state.confirmPasword)){

            alert('Error, you have to complete all the fields');

        } else {
            const SignUp = `
            Username: ${this.state.username}
            Email: ${this.state.email}
            Password: ${this.state.password}`;

            alert(SignUp);
        }
    }

    handlerUserName(username){
        this.setState({ username: username });
    }

    handlerEmail(email){
        this.setState({ email: email });
    }

    handlePasswordConfirm(password){
        this.setState({ password: password });
    }

    handleConfirm(confirm){
        this.setState({ confirmPasword: confirm });
    }

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <UserName OnSubmitChange={this.handlerUserName} />
                <Email OnSubmitChange={this.handlerEmail} />
                <Password onPasswordConfirm={this.handlePasswordConfirm} />
                <ConfirPassword onPasswordConfirm={this.state.password} onConfirm={this.handleConfirm} />
                <button className='btn'>Go</button>
            </form>
        );
    }
}

export default Form;
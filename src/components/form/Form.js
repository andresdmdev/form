import React, { useState } from 'react';
import './styles/form.css'
import ConfirmPassword from './password/ConfirmPassword';
import Email from './email/Email';
import Password from './password/Password';
import FirstName from './name/FirstName';
import LastName from './name/LastName';
import Gender from './gender/Gender';
import Occupation from './occupation/Ocuppation';
import Address from './address/Address';

/* class Form extends React.Component{

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

export default Form; */

export default function Form(){

    const [user, setUser] = useState({ 
        firstName: '', 
        lastName: '', 
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        occupation: '',
        address: ''
    })

    console.log(user)

    function handleUserData(event){
        const { name, value } = event.target

        setUser(prevState => ({ 
            ...prevState, 
            [name]: value 
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log('click')
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h1 className='title'>Sign up</h1>
            <FirstName 
                handleName={handleUserData} 
            />
            <LastName
                handleName={handleUserData} 
            />
            <Email
                handleEmail={handleUserData} 
            />
            <Password 
                handlePassword={handleUserData}
            />
            <ConfirmPassword
                handleConfirmPassword={handleUserData}
                password={user.password}
             />
            <Gender 
                gender={user.gender}
                handleGender={handleUserData} 
            />
            <Occupation 
                occupation={user.occupation}
                handleOccupation={handleUserData}
            />
            <Address 
                address={user.address}
                handleAddress={handleUserData}
            />
            <button className='btn'>Sign up</button>
        </form>
    )
}
import React from "react";
import ShowError from "./showmsg";

class ConfirPassword extends React.Component{

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
                this.setState({ msgError: 'Confirm your password.' });
                this.setState({ color: 'border-red' });
                this.props.onConfirm('');
            } else if(matches){
                this.setState({ msgError: 'Cannot have blank spaces.' });
                this.setState({ color: 'border-red' });
                this.props.onConfirm('');
            } else if(this.props.onPasswordConfirm !== input){
                this.setState({ msgError: `Password doesn't match.` });
                this.setState({ color: 'border-red' });
                this.props.onConfirm('');
            } else {
                this.setState({ msgError: '' });
                this.setState({ color: 'border-green' });
                this.setState({ input: input });
                this.props.onConfirm(input);
            }
        }, 500);
    } 


    render(){

        const color = this.state.color == 'border-green' ? 'border-green' : this.state.color == '' ? '' : 'border-red';

        return(
            <div className="form-field">
                <label htmlFor="confirmP">Confirm password:</label>
                <input 
                    type='password'
                    id='confirmP'
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

export default ConfirPassword;
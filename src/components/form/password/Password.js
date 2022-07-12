import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function Password(props){
    
    const [details, setDetails] = useState({ password: '', msgError: '', color: '' })

    function validPassword(password){
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");    
        return re.test(password);
    }

    function handleChange(event){

        const { value } = event.target

        const matches = value.match(/\s+/g);
            
        if(value === ''){

            setDetails(prevState => ({
                ...prevState,
                password: value,
                msgError: 'Input a password.',
                color: 'border-red'
            }))

        } else if(matches){
            
            setDetails(prevState => ({
                ...prevState,
                password: value,
                msgError: 'Password cannot have blank spaces.',
                color: 'border-red'
            }))

        } else if(!validPassword(value)){

            setDetails(prevState => ({
                ...prevState,
                password: value,
                msgError: 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)',
                color: 'border-red'
            }))

        } else {

            setDetails(prevState => ({
                ...prevState,
                password: value,
                msgError: '',
                color: 'border-green'
            }))

            props.handlePassword(event)
        }
    }

    return (
        <div className="form_field">
            <label htmlFor="password" className="form_field_label">Password *</label>
            <div>
                <input 
                    type='password'
                    id='password'
                    name="password"
                    value={details.password}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    details.msgError ? 
                    <CheckIcon check={false} /> : 
                    details.password.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                details.msgError && <ShowError msgError={details.msgError} />
            }
        </div>
    )
}
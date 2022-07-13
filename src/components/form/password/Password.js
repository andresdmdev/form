import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function Password(){

    const { password } = useSelector(state => state.userSlice)

    const dispatch = useDispatch()

    const [passwordDetails, setPasswordDetails] = useState({ 
        input: password, 
        msgError: '' 
    })

    function validPassword(password){
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");    
        return re.test(password);
    }

    function handleChange(event){

        const { name, value } = event.target

        const matches = value.match(/\s+/g);
            
        if(value === ''){

            setPasswordDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Input a password.'
            }))

        } else if(matches){
            
            setPasswordDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Password cannot have blank spaces.'
            }))

            dispatch(setUser({ name, value: '' }))

        } else if(!validPassword(value)){

            setPasswordDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'
            }))

            dispatch(setUser({ name, value: '' }))

        } else {

            setPasswordDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: ''
            }))

            dispatch(setUser({ name, value }))
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
                    value={passwordDetails.input}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    passwordDetails.msgError ? 
                    <CheckIcon check={false} /> : 
                    passwordDetails.input.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                passwordDetails.msgError && <ShowError msgError={passwordDetails.msgError} />
            }
        </div>
    )
}
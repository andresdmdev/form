import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function Email() {

    const { email } = useSelector(state => state.userSlice)

    const dispatch = useDispatch()

    const [emailDetails, setEmailDetails] = useState({ 
        input: email, 
        msgError: '' 
    })

    function validEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function handleChange(event){

        const { name, value } = event.target

        const matches = value.match(/\s+/g);

            
        if(value === ''){

            setEmailDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Input an email.'
            }))

        } else if(matches){

            setEmailDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Email cannot have blank spaces.'
            }))

            dispatch(setUser({ name, value: '' }))

        } else if(!validEmail(value)){

            setEmailDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Email is not valid'
            }))

            dispatch(setUser({ name, value: '' }))

        } else {

            setEmailDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: ''
            }))

            dispatch(setUser({ name, value }))
        }

    }

    return (
        <div className="form_field">
            <label htmlFor="email" className="form_field_label">Email *</label>
            <div>
                <input 
                    type='email'
                    id='email'
                    name="email"
                    value={emailDetails.input}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    emailDetails.msgError ? 
                    <CheckIcon check={false} /> : 
                    emailDetails.input.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                emailDetails.msgError && <ShowError msgError={emailDetails.msgError} />
            }
        </div>
    )
}

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function LastName(){

    const { lastName } = useSelector(state => state.userSlice)

    const dispatch = useDispatch()

    const [lastNameDetails, setLastNameDetails] = useState({ 
        input: lastName, 
        msgError: '' 
    })

    function validUser(length, min = 3, max = 25){
        return length < min || length > max ? true : false;
    }

    function handleChange(event){

        const { name, value } = event.target

        const matches = value.match(/\s+/g);
            
        if(value === ''){

            setLastNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Input your last name.'
            }))

        } else if(matches){

            setLastNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Last name cannot have blank spaces.'
            }))

            dispatch(setUser({ name, value: '' }))

        } else if(validUser(value.length)){

            setLastNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: `Last name must be between 3 and 25 characters.`
            }))

            dispatch(setUser({ name, value: '' }))

        } else{

            setLastNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: ''
            }))
            
            dispatch(setUser({ name, value }))
        }
    }

    return (
        <div className="form_field">
            <label htmlFor="lastName" className="form_field_label">Last name *</label>
            <div>
                <input 
                    type='text'
                    id='lastName'
                    name="lastName"
                    value={lastNameDetails.input}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    lastNameDetails.msgError ? 
                    <CheckIcon check={false} /> : 
                    lastNameDetails.input.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                lastNameDetails.msgError && <ShowError msgError={lastNameDetails.msgError} />
            }
        </div>
    )
}
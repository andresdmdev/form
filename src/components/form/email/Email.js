import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function Email(props) {

    const [details, setDetails] = useState({ email: '', msgError: '', color: '' })

    function validEmail(email){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function handleChange(event){

        const { value } = event.target

        const matches = value.match(/\s+/g);

            
        if(value === ''){

            setDetails(prevState => ({
                ...prevState,
                email: value,
                msgError: 'Input an email.',
                color: 'border-red'
            }))

        } else if(matches){

            setDetails(prevState => ({
                ...prevState,
                email: value,
                msgError: 'Email cannot have blank spaces.',
                color: 'border-red'
            }))

        } else if(!validEmail(value)){

            setDetails(prevState => ({
                ...prevState,
                email: value,
                msgError: 'Email is not valid',
                color: 'border-red'
            }))

        } else {

            setDetails(prevState => ({
                ...prevState,
                email: value,
                msgError: '',
                color: 'border-green'
            }))

            props.handleEmail(event)
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
                    value={details.email}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    details.msgError ? 
                    <CheckIcon check={false} /> : 
                    details.email.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                details.msgError && <ShowError msgError={details.msgError} />
            }
        </div>
    )
}

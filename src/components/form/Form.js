import React from 'react';
import './styles/form.css'
import ConfirmPassword from './password/ConfirmPassword';
import Email from './email/Email';
import Password from './password/Password';
import FirstName from './name/FirstName';
import LastName from './name/LastName';
import Gender from './gender/Gender';
import Occupation from './occupation/Ocuppation';
import Address from './address/Address';
import { useDispatch, useSelector } from 'react-redux';
import { setCard } from '../store/slices/cardSlice';

export default function Form(){

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    } = useSelector(state => state.userSlice)

    const dispatchCard = useDispatch()

    const validation = (
        password !== confirmPassword ||
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
    )
    
    function handleSubmit(event){
        event.preventDefault()

        dispatchCard(setCard({ name: 'smallCard', value: true }))
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h1 className='form_title'>Sign up</h1>
            <FirstName />
            <LastName />
            <Email />
            <Password />
            <ConfirmPassword />
            <Gender />
            <Occupation />
            <Address />
            <button className='form_btn' disabled={validation}>Sign up</button>
        </form>
    )
}
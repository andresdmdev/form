import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "../store/slices/cardSlice";
import './styles/bigCard.css'

export default function BigCard(){

  const {
    firstName,
    lastName,
    email,
    password,
    gender,
    occupation,
    address
  } = useSelector(state => state.userSlice)

  const dispatchCard = useDispatch()

  function handleClick(){
    
    dispatchCard(setCard({ name: 'bigCard', value: false }))
  }

  return (
    <div className="card_big">
      <div className="card_big_info">
        <h1 className="card_big_user_title">User data</h1>

        <h4 className="card_big_title">Name</h4>
        <h5 className="card_big_value">{firstName} {lastName}</h5>

        <h4 className="card_big_title">Email</h4>
        <h5 className="card_big_value">{email}</h5>

        <h4 className="card_big_title">Password</h4>
        <h5 className="card_big_value">{password}</h5>

        <h4 className="card_big_title">Gender</h4>
        <h5 className="card_big_value">{gender === '' ? 'No input' : gender}</h5>

        <h4 className="card_big_title">Occupation</h4>
        <h5 className="card_big_value">{occupation === '' ? 'No input' : occupation}</h5>

        <h4 className="card_big_title">Address</h4>
        <h5 className="card_big_value-address">{address === '' ? 'No input' : address}</h5>

        <button className='card_big_btn' onClick={handleClick}>Close</button>
      </div>
    </div>
  )
}
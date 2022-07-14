import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "../store/slices/cardSlice";
import './styles/smallCard.css'

export default function SmallCard(){

  const { firstName, lastName, email } = useSelector(state => state.userSlice)

  const dispatchCard = useDispatch()

  function handleClick(){
    
    dispatchCard(setCard({ name: 'bigCard', value: true }))
  }

  return (
    <div className="card_small" id="smallCard">
      <div className="card_small_info">
        <h2 className="card_small_greeting">Hello 🎉</h2>
        <h3 className="card_small_name">{firstName} {lastName}</h3>
        <p className="card_small_msg">
          We'll send an email to {email} to confirm your subscription
        </p>
        <button className='card_small_btn' onClick={handleClick}>Show info</button>
      </div>
    </div>
  )
}
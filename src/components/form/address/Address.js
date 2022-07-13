import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

export default function Address(){

  const { address } = useSelector(state => state.userSlice)

  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  function handleAddress(event) {

    const { name, value } = event.target

    if (value.length <= 250) {

      dispatch(setUser({ name, value }))

      setCount(value.length)
    } else {
      setCount(value.length - 1)
    }
  }

  return (
    <div className="form_field">
      <label htmlFor="address" className="form_field_label">Address</label>
      <textarea 
        name="address" 
        id="address"
        value={address}
        onChange={handleAddress}
        placeholder='Address here...'
        className="form_field_textarea"
      />
      <p className="form_field_counter">{count}/250</p>
    </div>
  )
}
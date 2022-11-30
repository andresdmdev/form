import React from "react";
import { useState } from "react";

export default function Address({ register }){

  const [count, setCount] = useState(0)

  function handleAddress(event) {

    const { value } = event.target

    if (value.length <= 250) {

      setCount(value.length)
    } else {
      setCount(value.length - 1)
    }
  } 

  return (
    <div className="flex flex-col">
      <label htmlFor="address" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Address</label>
      <textarea 
        data-testid="address" 
        id="address"
        {...register('address')}
        onChange={handleAddress}
        className="rounded-xl px-2.5 py-2 my-2 text-sm text-900 bg-input cursor-pointer h-32"
      />
      <p className="text-xs flex justify-end mr-2">{count}/250</p>
    </div>
  )
}
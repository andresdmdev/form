import React from "react";

export default function Address({ register }){

  return (
    <div className="flex flex-col">
      <label htmlFor="address" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Address</label>
      <textarea
        maxLength="250" 
        data-testid="address" 
        id="address"
        {...register('address',{
          maxLength: 250
        })}
        className="rounded-xl px-2.5 py-2 my-2 text-sm text-900 bg-input cursor-pointer h-32"
      />
    </div>
  )
}
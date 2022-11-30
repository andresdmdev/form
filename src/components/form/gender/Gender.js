import React from 'react'

export default function Gender({ register }){

  const genders = ['Male', 'Female', 'Other']

  const allGender = genders.map(elem => (
    <div key={elem} className="ml-4">
        <input 
          type="radio" 
          value={elem}
          name="gender"
          id={elem}
          className="cursor-pointer hidden peer" 
          {...register('gender')}
        />
        <label htmlFor={elem} className="py-1.5 px-3.5 font-medium peer-checked:text-50 bg-100 text-base cursor-pointer rounded-2xl peer-checked:bg-400 transition hover:ring-2 hover:ring-400">{elem}</label>
    </div>
  ))

  return (
    <div>
      <fieldset>
        <legend className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Gender</legend>
        <div className="flex flex-row justify-center py-3 mt-2">
          {allGender}
        </div>
      </fieldset>
    </div>
  )
}
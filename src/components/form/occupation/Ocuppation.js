import React from "react";
import { HiSelector } from "react-icons/hi";

export default function Occupation({ register }){

  const occupations = [
    'Student', 
    'Programmer', 
    'Entrepreneur', 
    'Doctor', 
    'Lawyer', 
    'Engineer', 
    'Athlete', 
    'Other'
  ]

  const allOccupations = occupations.map(elem => (
    <option 
      key={elem} 
      value={elem}
      name={elem}
      className="p-2 text-sm hover:bg-400 hover:text-white"
    >{elem}</option>
  ))

  return (
    <div className="my-4 flex flex-col relative">
      <label htmlFor="occupation" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Occupation</label>
      <select 
        id="occupation" 
        data-testid='occupation'
        {...register('occupation')}
        className="mt-3 appearance-none bg-input text-800 text-sm rounded-3xl focus:ring-blue-900 focus:border-blue-900 block w-full py-2.5 px-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-800 dark:focus:ring-blue-900 dark:focus:border-blue-900 hover:ring-2 hover:ring-900 cursor-pointer transition-all ease-in-out duration-100">
        <option value='Choose one'>Choose one</option>
        {allOccupations}
      </select>
      <HiSelector className="absolute right-3 top-10.5 text-900 text-xl" />
    </div>
  )
} 
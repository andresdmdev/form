import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function useDataUser(){

  const { userData, setuserData, showCard, setShowCard } = useContext(UserContext)

  return {}
}
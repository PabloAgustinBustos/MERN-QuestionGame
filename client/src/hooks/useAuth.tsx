import React, { useEffect, useState } from 'react'
import { Location } from 'react-router-dom'

const useAuth = (location: Location) => {
  const [isLogged, setIsLogged] = useState(false)
 
  async function checkAuth(){
    let token = localStorage.getItem("kiuact-token")
    
    const res = await fetch("http://localhost:3001/users/checkAuth", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })

    const data = await res.json()

    if(data.status !== "error") setIsLogged(true)
    else setIsLogged(false)
  }

  useEffect(() => {
    checkAuth()
  }, [location])

  return isLogged
}

export default useAuth
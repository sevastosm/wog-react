import React from 'react'
import { useLocation } from "react-router-dom";

export default function WogInfoPage(){
  let location = useLocation()

  const getNameFromLocation = React.useMemo(()=>{
    if(location.pathname === '/about'){
      return "Τι είναι το WordofGod"
    }
  },[location])

  return <div>
    <h3>{getNameFromLocation}</h3>
  </div>
}
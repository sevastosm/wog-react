import React from 'react'
import { useLocation } from "react-router-dom";

export default function HelpPage(){
  let location = useLocation()

  const getNameFromLocation = React.useMemo(()=>{
    if(location.pathname === '/help'){
      return "Βοήθεια"
    }
  },[location])

  return <div>
    <h3>{getNameFromLocation}</h3>
  </div>
}
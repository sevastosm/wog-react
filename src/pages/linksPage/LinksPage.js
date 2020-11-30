import React from 'react'
import { useLocation } from "react-router-dom";

export default function LinksPage(){
  let location = useLocation()

  const getNameFromLocation = React.useMemo(()=>{
    if(location.pathname === '/links'){
      return "Σύνδεσμοι"
    }
  },[location])

  return <div>
    <h3>{getNameFromLocation}</h3>
  </div>
}
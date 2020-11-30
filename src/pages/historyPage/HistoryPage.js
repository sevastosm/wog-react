import React from 'react'
import { useLocation } from "react-router-dom";

export default function HistoryPage(){
  let location = useLocation()

  const getNameFromLocation = React.useMemo(()=>{
    if(location.pathname === '/history'){
      return "Ιστορία"
    }
  },[location])

  return <div>
    <h3>{getNameFromLocation}</h3>
  </div>
}
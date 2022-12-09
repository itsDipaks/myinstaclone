import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const RequiredAuth = ({children}) => {
const navigat=useNavigate()
const {token}=useSelector((store)=>store.Auth)
if(token){

  
  return children
}

  return <Navigate to="/login"/>
}

export default RequiredAuth
import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router'
export default function Adminhome() {
  let admin = useSelector((store1)=>store1.admin.admin)
  let navigate = useNavigate()
  useEffect(()=>
  {
    if(!admin.islogin)
    {
      navigate("/adminlogin")
    }
  },[])
  console.log(admin)
  return (
    <div>Adminhome
      <br></br>
      <Link to="/Addevent">Add Event</Link>
    </div>
  )
}

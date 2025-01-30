import React, { useRef, useState } from 'react'
import {useNavigate} from "react-router"
import { useSelector,useDispatch } from 'react-redux'
import { setadmin } from '../../slices/adminSlice'
export default function AdminLogin() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let nameref = useRef()
    let pwdref = useRef()
    const [msg,setmsg] = useState("");
    let loginFun=()=>
    {
        if(nameref.current.value=="admin" && pwdref.current.value=="123")
        {
            dispatch(setadmin({adminname:'Admin',islogin:true}))
            navigate("/adminhome")
        }
        else
        {
            setmsg("invalid user ");
        }
    }
  return (
    <div>
        <p>Username : <input type="text" ref={nameref} /></p>
        <p>Password : <input type="text" ref={pwdref}  /></p>
        <input type="button" value="Login" onClick={()=>loginFun()}/>
        <p>{msg}</p>
    </div>
  )
}

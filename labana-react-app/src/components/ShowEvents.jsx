import axios from 'axios'
import React, { useState,useEffect,useRef } from 'react'

import { API_URL } from '../Config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
const ShowEvents = () => {
    
  
  const [eventdata,setEventdata]=useState([])
  let dataevent = axios.get(API_URL+"event")
  .then((d)=>setEventdata(d.data))
  
  const [eventsUI,seteventUI]=useState([]);
  useEffect(()=>
  {
   
      selectEvents()
   
  },[eventdata])


    let selectEvents=()=>
    {
      let eventsUIMAP = eventdata.map((e)=>{
        return <tr>
           
          <td>{e.eventname}</td>
          <td>{e.place}</td>
          <td>{e.date}</td>
          <td>{e.time}</td>
          <td>{e.maxlimit}</td>
          <td>{e.category}</td>
          <td><img height={100} width={100} 
          src={API_URL+"uploads/"+e.imgpath}/></td>
        </tr> 
      })
      seteventUI(eventsUIMAP)
    }
 return (
   <div>
    <table border="1">
  {eventsUI}
</table>
   </div>
 )
}

export default ShowEvents;
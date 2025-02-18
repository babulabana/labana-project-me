import axios from 'axios'
import React, { useEffect ,useRef} from 'react'
import { useParams } from 'react-router'
import { API_URL } from '../Config'

export default function EventDetails() {
  let params  = useParams("eid")
  let eventId = params.eid;
  let eventnameref = useRef();
  let placeref = useRef();
  let dateref = useRef();
  let timeref = useRef();
  let maxlimitref = useRef();
  let categoryref = useRef();
  let imgref = useRef();

  useEffect(() => {
    axios.get(API_URL+"event/getEventById/"+eventId)
    .then((d)=>
    {
      let eventObj = d.data[0]
      eventnameref.current.innerHTML = eventObj.eventname
      placeref.current.innerHTML = eventObj.place
      dateref.current.innerHTML = eventObj.date
      timeref.current.innerHTML = eventObj.time
      maxlimitref.current.innerHTML = eventObj.maxlimit
    categoryref.current.innerHTML =  eventObj.category
    imgref.current.src =API_URL+"uploads/"+eventObj.imgpath
    // "category": "Education ",
    // "imgpath": "2025-01-30T05-46-52.991ZUntitled.png",
    // "__v": 0
  })}, [])

  return (
    <div>EventDetails : {eventId}<br></br>
    <div className="flex">
      <div> <img ref={imgref} className="h-64 aspect-square"></img></div>
      <div>
<h2 ref={eventnameref}></h2>
      <div ref={placeref}></div>
  <div ref={dateref}></div>
  <div ref={timeref}></div>
  <div ref={maxlimitref}></div>
  <div ref={categoryref}></div>
  
  



      </div>
      </div></div>
  )
}

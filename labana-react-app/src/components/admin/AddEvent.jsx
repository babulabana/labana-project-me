import axios from 'axios'
import React, { useState,useEffect,useRef } from 'react'
import { Categories } from '../../categorydata'
import { API_URL } from '../../Config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import moment from 'moment'
export default function AddEvent() {

  let admin = useSelector((store1)=>store1.admin.admin)
  let navigate = useNavigate()
  const [eventdata,setEventdata]=useState([])
  let dataevent = axios.get(API_URL+"event")
  .then((d)=>setEventdata(d.data))
  
  const [eventsUI,seteventUI]=useState([]);
  useEffect(()=>
  {
    if(!admin.islogin)
    {
      navigate("/adminlogin")
    }
    else
    {
      selectEvents()
    }
  },[dataevent])


  let categoryUI = Categories.map((c)=>
  {
    return <option value={c.categoryname} id={c.cid}>{c.categoryname}</option>
  })
  let eventnameref = useRef()
  let placeref  = useRef()
  let dateref  = useRef()
  let timeref = useRef()
  let maxlimitref  = useRef()
  let categoryref  = useRef()
  let imgref = useRef()
  
  let selectEvents=()=>
  {
    let eventsUIMAP = eventdata.map((e)=>{
      return <tr className='border'>
         
        <td className='border' >{e.eventname}</td>
        <td className='border'>{e.place}</td>
        <td className='border'>{e.date}</td>
        <td className='border'>{e.time}</td>
        <td className='border'>{e.maxlimit}</td>
        <td className='border'>{e.category}</td>
        <td className='border'><img height={100} width={100} 
        src={API_URL+"uploads/"+e.imgpath}/></td>
        <td className='border'><input type="button" value="Edit" onClick={()=>editFunction(e)}/></td>
        <td className='border'><input type="button" value="Delete" onClick={()=>deleteFunction(e._id)}/></td>
      </tr> 
    })
    seteventUI(eventsUIMAP)
  }
  let add = ()=>
  {
    let data ={ eventname:eventnameref.current.value,
      place :placeref.current.value,
      date:dateref.current.value,
      time:timeref.current.value,
      maxlimit:maxlimitref.current.value,    
      category:categoryref.current.value,
      img:imgref.current.files[0]
    }
    console.log(data)
    let headers =  {headers: {'Content-Type': 'multipart/form-data'}}
    axios.post(API_URL+"event/",data,headers)
    .then((d)=>
      {
        // msg={'message':"",'eventdata':data}
        // console.log(d.data)
        if(d.data.message=="event added")
        {
          setEventdata(d.data.eventdata)
          console.log(eventdata)
          console.log(d.data.eventdata)
        }
        else
        {
          alert("in else of then")
        }
      })
      .catch((e)=>alert(e))
      
  }
  let editFunction = (eventobj)=>
  {
    // alert("we will edit event whose id is "+id)
    eventnameref.current.value=eventobj.eventname
    placeref.current.value=eventobj.place
    dateref.current.value = moment(eventobj.date).format("DD-MM-YYYY")
    dateref.current.defaultValue=(moment(eventobj.date).format('DD-MM-YYYY'))
    // console.log(dateref.current.value)
    alert(moment(eventobj.date).format('DD-MM-YYYY'))
    // alert(dateref.current.innerText)
    timeref.current.value=eventobj.time
    maxlimitref.current.value=eventobj.maxlimit
    categoryref.current.value=eventobj.category

  }
  let deleteFunction = (id)=>
  {
    // alert("we willdelete event whose id is "+id)
    let x=confirm("Are you sure want to Delete ")
    if(!x)
    {
      return
    }
    
    axios.delete(API_URL+"event", { data:  {id:id}  })
    .then((d)=>
    {
      console.log(d)
    })
    .catch((e)=>
    {
      console.log(e)
    })
  }
  // 
  return (
    <div>AddEvent 
      <p>Event name : <input type="text" ref={eventnameref}/></p>
      <p>place : <input type="text" ref={placeref}/> </p>
      <p>Date : <input type="date" ref={dateref}/></p>
      <p>time : <input type="time" ref={timeref}/></p>
      <p>maxlimit : <input type="text" ref={maxlimitref}/></p>
      <p>category:
        <select  ref={categoryref}>
          {categoryUI}
        </select>

      </p>
      <p>Event Image : <input type="file" ref={imgref} name="" id="" /></p>
<p>
  <input type="button" value="Add Event " onClick={()=>add()}/>
</p>

<table border="1" className='table-fixed'>
  {eventsUI}
</table>
    </div>
  )
}

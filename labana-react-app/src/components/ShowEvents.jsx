import axios from 'axios'
import React, { useState,useEffect,useRef } from 'react'
import moment from 'moment'
import { API_URL } from '../Config'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
const ShowEvents = () => {
  
  const [eventdata,setEventdata]=useState([])
  const [eventsUI,seteventUI]=useState([]);
  
  useEffect(()=>{
    
  (async ()=>
  
  {console.log("ineffect")
       await axios.get(API_URL+"event")
    .then((d)=>
    {setEventdata(d.data)
    console.log(eventdata)
      let eventsUIMAP = eventdata.map((e)=>{
        return <div key={e._id} className="w-1/4 text-center">         
                    <img className='w-4/5 aspect-square'
          src={API_URL+"uploads/"+e.imgpath}/>
          <div>{e.eventname}</div>
          <div>{(moment(e.date).utc().format('DD-MM-YYYY'))}</div>
          <div><Link to={"/eventdetails/"+e._id}>View Details</Link></div>
        </div> 
      })
      seteventUI(eventsUIMAP)
    }
    )
  })();
//  await  demo()
  },[])
     
    
 return (
   <div className="flex flex-wrap  gap-4 justify-center">

  {eventsUI}

   </div>
 )
}

export default ShowEvents;
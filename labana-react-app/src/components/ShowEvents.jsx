import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { API_URL } from '../Config';
import axios from 'axios';

export default function ShowEvents() {
  let params = useParams();
  let cname = params.eventname;
  const [eventdata, setEventdata] = useState([]);
  const [eventUi, setEventUi] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get(API_URL + "event/"+cname)
        .then((d) => {
          console.log(d)
          setEventdata(d.data);
          let ui = d.data.map((event) => {
            return (
              <div key={event._id} className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-64">
                <img
                  className="w-full h-48 object-cover"
                  src={API_URL + "uploads/" + event.imgpath}
                  alt={event.eventname}
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{event.eventname}</h2>
                  <p className="text-gray-600 mb-2">{event.place}</p>
                  <p className="text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                  <Link to={"/EventDetails/"+event._id}>Show Details</Link>
                </div>
              </div>
            );
          });
          setEventUi(ui);
        });
    })();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">{cname}</h1>
      <div className="flex flex-wrap justify-center">
        {eventUi}
      </div>
    </div>
  );
}
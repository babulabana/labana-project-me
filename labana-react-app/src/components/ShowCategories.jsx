import React from 'react'
import { Link } from 'react-router'
import { Categories } from '../categorydata'

export default function ShowCategories() {
    let categories = Categories.map((c)=>
    {
      return   <div className=" w-64 aspect-square text-3xl bg-amber-200 text-center content-center" >
<Link to={"/showEvents/"+c.categoryname}>{c.categoryname}</Link>
                </div>
    })
  return (
    <div><p>Choose Category for your interest</p>
    <div className = "flex gap-5  flex-wrap justify-evenly  w-3/4 mx-auto">
    {categories}
    </div>
    </div>
  )
}

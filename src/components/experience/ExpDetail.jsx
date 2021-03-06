import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'

const ExpDetail = ({title, text}) => {
  return (
    <article className="experience__details">
        <BsPatchCheckFill className="experience__details-icon"/>
        <div>
            <h4>{title}</h4>
            <small className="text-light">{text}</small>
        </div>
    </article>
  )
}

export default ExpDetail
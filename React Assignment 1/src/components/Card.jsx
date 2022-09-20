import React from 'react'

export default function Card({showImage,photoUrl,photoText}) {
  return (
    <div onClick={()=>showImage(photoUrl)} className="show-card">
        <img className="show-card-img" src={photoUrl} alt="Card image cap" />
        <p className="show-card-text">{photoText}</p>
      </div>
  )
}

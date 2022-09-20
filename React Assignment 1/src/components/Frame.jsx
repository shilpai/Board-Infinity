import React from 'react'

export default function Frame({frameImage,closeImage}) {
  return (
    <div className='frame'>
        <img alt='frame-image' src={frameImage} ></img>
        <i onClick={closeImage} className="fa-solid fa-window-close"></i>
        {/* <button className='btn btn-danger' onClick={closeImage}>Close</button> */}
    </div>
  )
}

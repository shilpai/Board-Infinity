import React from 'react'
import { useState, useEffect } from "react";
import "../css/Problem3.css";
import Card from './Card';
import {data} from '../utils/images'
import Frame from './Frame';

export default function Problem3() {

  const [images,setImages] = useState([]);
  const [toggle,setToggle] = useState(false)
  const [frameImage,setFrameImage] = useState("")

  const LIMIT = 20

  function showImage(imgUrl) {
    setFrameImage(imgUrl)
    setToggle(true)
  }

  function closeImage() {
    setToggle(false)
  }

  useEffect(() => {
    setImages([...data.slice(0, LIMIT)])
  
    return () => {
      setImages([])
    }
  }, [])
  

  return (
    <div className='showcase'>
      <h2>Photographer's Showcase</h2>
      <div className="show-cards">
        {images.map((val,index)=><Card key={index} showImage={showImage} photoUrl={val.webformatURL} photoText={val.user} />)}
      </div>
      {toggle && <Frame frameImage={frameImage} closeImage={closeImage} />}
    </div>
  )
}

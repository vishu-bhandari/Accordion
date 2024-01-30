import React, { useState } from 'react'
import { questions } from './Api'
import "./Accordion.css"
import Myaccordion from './Myaccordion';

function Accordion() {

    const [data,setData]=useState(questions);
  return (
    <>
    <section className="main-div">
      <h1>React Interview Questions & Answers</h1>
       {
        data.map((curElem)=>{
          const {id }=curElem;
          return <Myaccordion key={id} {...curElem} /> 
        })
       }
    </section>
    </>
  )
}

export default Accordion

"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler =(e)=>{
   e.preventDefault()
   setmaintask([...maintask,{title,desc}])
   console.log(maintask)
   console.log(title)
   console.log(desc)
   settitle("")
   setdesc("")
  }
const deleteHandler =(i)=>{
  let copyTask =[...maintask]
  copyTask.splice(i,1)
  setmaintask(copyTask)
}
  let renderTask =<h2> No task Available</h2>
if (maintask.length>0) {
  

  renderTask =maintask.map((t,i)=>{
    return(
    <li key={i} className='flex items-center justify-between text-center mb-5' > 
    <div className='flex justify-between  w-2/3' >
      <h5 className='text-2xl font-semibold '>{t.title}</h5>
      <h6 className='text-xl font-semibold'>{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    className='bg-red-400 text-white rounded font-bold px-1 py-1'>Delete</button>
    </li>
    )
  })
}
  return (
   <>
   
   <h1>Shivanshu's Todolist</h1>
<form onSubmit={submithandler}>
   <input type='text' placeholder='Enter tast here' value={title} onChange={(e)=>{
    // console.log(e.target.value)
    settitle(e.target.value)

   }}></input>
   <input type='text' placeholder='Enter description here' value={desc} onChange={(e)=>{
    // console.log(e.target.value)
    setdesc(e.target.value)
   }}></input>
   <button>Add task</button>
</form>
<hr/>
<div id='maintask'>
  <ul>
{renderTask}
</ul>
</div>
   </>
  )
}

export default page
 
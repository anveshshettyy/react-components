import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div className='flex'>
      <div className='h-[45vh] w-[40vh] rounded-md bg-zinc-100 flex flex-col  items-center justify-center'>
        <div className='h-[20vh] w-[20vh]  bg-green-300'>
            <img src="" alt="" />
        </div>
        <h1 className='text-black text-[3vh] font-bold'>{props.name}</h1>
        <div className='flex gap-2 '>
            <h2>{props.age}</h2>
            <h2>{props.place}</h2>
        </div>
      </div>
    </div>
  )
}

export default Card

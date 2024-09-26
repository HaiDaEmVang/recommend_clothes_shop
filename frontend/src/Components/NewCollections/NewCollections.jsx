import React from 'react'
import './NewCollections.css'
import Item from '../Item/Item'

const NewCollections = (props) => {
  return (
    <div className='new-collections w-[80%] m-auto mb-8'>
      <h1 className='text-[40px] font-bold m-auto text-center'>NEW COLLECTIONS</h1>
      <hr className='m-auto w-[200px] h-[4px] rounded-lg bg-black mt-2 mb-5'/>
      <div className="collections grid grid-cols-4 grid-rows-2 gap-4">
        {props.data.map((item,index)=>{
                return <Item id={item._id} key={index} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
            })}
      </div>
    </div>
  )
}

export default NewCollections

import React from 'react'

export default function List_Body(item) {
  //debugger;
  return (
    <div className='list'>
      <h3>{item.item.name}</h3>
      <p>{item.item.data}</p>
    </div>
  )
}

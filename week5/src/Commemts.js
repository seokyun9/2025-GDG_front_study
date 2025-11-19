import React from 'react'

function Commemts(props) {
  return (
    <div key ={props.id}>
      <p>{props.name}</p>
    </div>
  )
}

export default Commemts
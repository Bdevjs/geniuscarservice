import React from 'react'

const Service = ({service}) => {

    const {name, img, description, price} = service;
  return (
    <div>
        <h2>{name}</h2>
    </div>
  )
}

export default Service
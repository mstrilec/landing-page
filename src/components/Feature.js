import React from 'react'

export default function Feature({
  file,
  text
}) {
  return (
    <div className='feature'>
      <img src={file} alt={file} />
      <h3 className='feature-text'>{text}</h3>
    </div>
  )
}

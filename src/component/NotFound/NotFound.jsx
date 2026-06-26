import React from 'react'
import notFoundImage from '../../assets/images/notfound.jpg'

export default function NotFound() {
  return (
    <div className='container'>
      <div className="notFound-img mt-5 pt-5">
        <img className='w-100' src={notFoundImage} alt="" />
      </div>
    </div>
  )
}

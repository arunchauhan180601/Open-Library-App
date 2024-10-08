import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-5 col-sm-6 gap-2 col-9 mt-3  ">
      <div className='overflow-hidden'>
        <img src={item.image} className='img-fluid d-flex justify-content-center popular-image' />
      </div>
      <div className='item-bg'>
        <h5 className='p-2 text-break fw-600'>{item.name}</h5>
        <div className="row ps-2">
          <div className="col-3">
            <p className='fw-700' >  ${item.new_price} </p>
          </div>
          <div className="col-3">
            <p className='text-decoration-line-through fw-700'> ${item.old_price} </p>
          </div>

        </div>
        <div className='borrowButton col-3' onClick={window.scrollTo(0, 0)}>
          <Link to={`/product/${item.id}`}><h5> BORROW  </h5></Link>
        </div>
      </div>
    </div>
  )
}

export default Item
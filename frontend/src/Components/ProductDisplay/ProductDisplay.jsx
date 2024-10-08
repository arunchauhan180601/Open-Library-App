import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_image from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = ({ product }) => {

  const { addToCart } = useContext(ShopContext)

  return (
    <div className="container mt-5 ">
      <div className="row d-flex justify-content-between">
        <div className="col-md-2 col-lg-1 left-side-img-main ">

          <div className="row ">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

          <div className="row  mt-1">
            <div className="col-12">
              <img src={product.image} alt='productImage' className='img-fluid product-leftside-img ' />
            </div>
          </div>

        </div>
        <div className="col-md-5 ">
          <img src={product.image} alt='productImage' className='img-fluid product-rightside-img ' />
        </div>
        <div className="col-md-5 col-lg-6 ">
          <h2 className='productName'>{product.name}</h2>
          <div className=' d-flex align-items-center'>
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_image} alt='starImage' height="50%" className='img-fluid me-1' />
            <img src={star_dull_icon} alt='starDullImage' height="50%" className='img-fluid me-1' />
            <p className='pt-3 '>(122)</p>
          </div>



          <pre className='pt-3 productIngredients'>
            {product.details}
          </pre>

          <div className='mt-5'>
            <h5 ><span className='text-danger'> Author </span>: {product.author}</h5>
          </div>

          <div className='mt-4'>
            <h5 > <span className='text-danger'> category : </span> {product.category}, Popular </h5>
            <h5 className='mt-4'> <span className='text-danger'> Tags : </span> Modern, Latest</h5>
          </div>

          <div className='mt-4'>
            <button className='btn btn-danger mt-3 ps-5 pe-5 pt-2 pb-2 fs-5' onClick={() => { addToCart(product.id) }} >Add to Cart</button>
          </div>

        </div>
      </div>






    </div>
  )
}

export default ProductDisplay
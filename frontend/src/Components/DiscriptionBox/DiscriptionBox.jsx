import React from 'react'
import "./DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-2 col-sm-4 col-4  border border-2 pt-3 pb-2 text-center">
          <h6>Description</h6>
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 border border-2 pt-3 pb-2 text-center">
          <h6>Reviews(122)</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-4">
          <p className='discriptionPara' >Discover a vast collection of culinary eBooks on our online platform, featuring digital cookbooks and meal prep guides curated by passionate chefs and home cooks. Authors can easily upload and share their unique cooking eBooks, inspiring others with their culinary creations. Engage with fellow food enthusiasts through comments and discussions, exchanging tips and techniques to enhance your cooking skills. Access exclusive culinary courses and tutorials designed to elevate your cooking knowledge and confidence in the kitchen.  </p>
          <p className='discriptionPara'>Our online book platform is a haven for food lovers, offering an extensive library of cooking eBooks that cater to every taste and skill level. Users can connect with expert chefs and home cooks, discovering new recipes and culinary techniques at their fingertips. The platform encourages collaboration, allowing authors to promote their work and receive feedback from a vibrant community of food enthusiasts. Enjoy easy access to meal plans and digital cookbooks that simplify meal preparation and inspire creativity in the kitchen. </p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox
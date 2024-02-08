import React from 'react'
import Single from '../../components/single/Single'
import { singleProduct } from '../../data'

function Product() {
  return (
    <div>
      <Single {...singleProduct}/>
    </div>
  )
}

export default Product
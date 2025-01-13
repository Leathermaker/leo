import React from 'react'
import { ProductsHero } from './components'
import { Footer } from '../home/footer'
import ProductAndCategory from './components/ProductAndCategory'

const Products:React.FC = () => {
  return (
    <div>
       <ProductsHero/>
       <ProductAndCategory/>
    </div>
  )
}

export default Products

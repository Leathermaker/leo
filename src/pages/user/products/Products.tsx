import React from 'react'
import ProductAndCategory from './components/ProductAndCategory'
import PageHeroSection from '../../../components/PageHeroSection'

const Products:React.FC = () => {
  return (
    <div>
       {/* <ProductsHero/> */}
       <PageHeroSection title={"PRODUCTS"}/>
       <ProductAndCategory/>
    </div>
  )
}

export default Products

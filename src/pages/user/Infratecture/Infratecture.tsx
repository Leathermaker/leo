import React from 'react'
import { InfratectureImages, InfratectureTitle } from './components'
import PageHeroSection from '../../../components/PageHeroSection'

const Infratecture:React.FC = () => {
  return (
    <div>
      {/* <InfratectureHero/> */}
      <PageHeroSection title={"INFRASTRUCTURE"}/>
      <InfratectureTitle/>
      <InfratectureImages/>
    </div>
  )
}

export default Infratecture

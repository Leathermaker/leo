import React from 'react'
import InfratectureHero from './components/InfratectureHero'
import { InfratectureImages, InfratectureTitle } from './components'

const Infratecture:React.FC = () => {
  return (
    <div>
      <InfratectureHero/>
      <InfratectureTitle/>
      <InfratectureImages/>
    </div>
  )
}

export default Infratecture

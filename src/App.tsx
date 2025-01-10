import './App.css'
import { Router } from './router'
import AnimatedCursor from "react-animated-cursor"

function App () {
  return (
    <>
   <Router/>
   <AnimatedCursor 
   innerSize={8}
      outerSize={25}
      color='194, 30, 55'
      outerAlpha={0.1}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />
    </>
  )
}

export default App

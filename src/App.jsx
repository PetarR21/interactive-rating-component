import { useState } from 'react'

import Main from './components/Main'
import ThankYou from './components/ThankYou'

const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const [rating, setRating] = useState(0)

  return submitted ? (
    <ThankYou rating={rating} />
  ) : (
    <Main setSubmitted={setSubmitted} rating={rating} setRating={setRating} />
  )
}

export default App

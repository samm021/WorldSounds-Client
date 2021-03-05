import React from 'react'
import Lottie from 'react-lottie'
import * as errors from '../assets/lottie/error.json'

const defaultOption = {
  loop: true,
  autoplay: true,
  animationData: errors.default,
  renderedSettings: {
    preserveAspectRation: 'xMidYmid slice'
  }
}

const Errors = () => {
  return (
    <div>
      <Lottie options={defaultOption} height={1000} width={1000} ></Lottie>
    </div>
  )
}

export default Errors

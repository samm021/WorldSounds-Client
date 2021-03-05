import React from 'react'
import Lottie from 'react-lottie'
import * as loading from '../assets/lottie/loading.json'

const defaultOption = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  renderedSettings: {
    preserveAspectRation: 'xMidYmid slice'
  }
}

const Loading = () => {
  return (
    <>
      <Lottie options={defaultOption} height={1000} width={1000} ></Lottie>
    </>
  )
}

export default Loading

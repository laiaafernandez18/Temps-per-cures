import React from 'react'
import videoLaCiba from '../../Assets/Img/laciba.mp4'

function VideoPrincipal() {
  return (
    <div>
        <video autoplay src={videoLaCiba} width="420"  height="240"></video>
    </div>
  )
}

export default VideoPrincipal
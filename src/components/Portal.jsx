import React from 'react'
import { createPortal } from 'react-dom'

function Portal() {
  return (
    <div>this is react Portal</div>
  )
}

export default Portal

createPortal(Portal, document.getElementById('portal'));
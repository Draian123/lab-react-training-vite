import React from 'react'

export default function BoxColor({r,g,b}) {
  return (
    <div style={{"background": `rgb(${r},${g},${b})`}}>
        {`rbg(${r},${g},${b})`}
    </div>
  )
}

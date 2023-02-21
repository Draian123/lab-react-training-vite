import React, { useState } from 'react'

export default function Random({min, max}) {
    function getRandomA(mi, mx) {
        return Math.random() * (mx - mi) + mi;
    }

  return (
    <div>
        <h3>Random Value between {min} and {max} ={">"} {Math.floor(getRandomA(min, max))}</h3>
    </div>
  )
}

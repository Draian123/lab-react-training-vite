import React from 'react'

export default function Rating({children, checkValue}) {
    function checkValue() {
        if(children<0.5){
            return "☆☆☆☆☆"
        }
        if(children <1.5 ){
            return "★☆☆☆☆"
        }else if(children<2.5){
            return "★★☆☆☆"
        }else if(children<3.5){
            return "★★★☆☆"
        }
        else if(children<4.5){
            return "★★★★☆"
        }else{
            return "★★★★★"
        }
    }
    return (
    <div>
        {checkValue()}
    </div>
  )
}

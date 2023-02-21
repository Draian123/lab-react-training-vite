import React from 'react'

export default function DriverCard(props) {
    function checkRating() {
        if(props.rating<0.5){
            return "☆☆☆☆☆"
        }
        if(props.rating <1.5 ){
            return "★☆☆☆☆"
        }else if(props.rating<2.5){
            return "★★☆☆☆"
        }else if(props.rating<3.5){
            return "★★★☆☆"
        }
        else if(props.rating<4.5){
            return "★★★★☆"
        }else{
            return "★★★★★"
        }
    }
  return (
    <div style={{"background":"green"}}>
        <img style={{"height":"100px"}} src={props.img} alt="img"/>
        <div>
            <h1>{props.name}</h1>
            <h1>{checkRating()}</h1>
            <h4>{props.car.model} - {props.car.licensePlate}</h4>
        </div>
    </div>
  )
}

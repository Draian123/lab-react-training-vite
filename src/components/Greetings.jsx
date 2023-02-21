import React from 'react'

export default function Greetings(props) {
    function checkLanguage(language){
        if (language == "en"){
            return "Hello"
        } else if (language == "de"){
            return "Hallo"
        }else if (language == "fr"){
            return "Bonjour"
        }else if (language == "es"){
            return "Hola"
        }
    }

  return (
    <div>
        <h1>{checkLanguage(props.lang)} {props.children}</h1>
    </div>
  )
}

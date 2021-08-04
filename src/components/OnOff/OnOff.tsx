import React, { useState } from 'react'


type OnOffType = {
  on: boolean
  onChange: (on: boolean) => void
}

function OnOff(props: OnOffType) {



  console.log("onof render");
    let onClass = ["OnOff__btn-ON", "OnOff__btn-ON active" ]
    let offClass = ["OnOff__btn-OFF", "OnOff__btn-OFF active" ]
    let circleClass = ["OnOff__btn-circle blue", "OnOff__btn-circle red" ]


      return ( <div className="OnOff__btn-wrapper">
                <button onClick={() => {props.onChange(true)} } className={ props.on === true ? onClass[1] : onClass[0] }>ON</button>
                <button onClick={() => {props.onChange(false)}} className={ props.on === true ? offClass[0] : offClass[1] }>OFF</button>
                <button className={ props.on === true ? circleClass[0] : circleClass[1] } ></button>
              </div>
      )
}

export default OnOff

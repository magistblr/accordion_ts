import React, { useState } from 'react'


type OnOffType = {
  selected: boolean
}

function UncontrolledOnOff(props: OnOffType) {


  let [on, setOn] = useState(false);

  console.log("onof render");
    let onClass = ["OnOff__btn-ON", "OnOff__btn-ON active" ]
    let offClass = ["OnOff__btn-OFF", "OnOff__btn-OFF active" ]
    let circleClass = ["OnOff__btn-circle blue", "OnOff__btn-circle red" ]

      return ( <div className="OnOff__btn-wrapper">
                <button onClick={() => {setOn(true)} } className={ on === true ? onClass[1] : onClass[0] }>ON</button>
                <button onClick={() => {setOn(false)}} className={ on === true ? offClass[0] : offClass[1] }>OFF</button>
                <button className={ on === true ? circleClass[0] : circleClass[1] } ></button>
              </div>
      )
}

export default UncontrolledOnOff

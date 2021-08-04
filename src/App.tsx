import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion'
import UncontrolledAccordion from './components/UncontrolledAccordion'
import Rating, { RatingValueType } from './components/Rating'
import OnOff from './components/OnOff/OnOff'
import UncontrolledRating from './components/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';



function App(props: any) {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setswitchOn] = useState<boolean>(false)

  return (
    <div className="app_wrapper_outer">
      <div className="app_wrapper_inner">

        <Accordion  titleValue={"Menu"}
                    collapsed={accordionCollapsed}
                    onChange={ () => { setAccordionCollapsed(!accordionCollapsed) } }/>
        <UncontrolledAccordion titleValue={"Users"}/>

        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledRating  />

        <OnOff onChange={(on) => { setswitchOn(on) } } on={switchOn}/>
        <UncontrolledOnOff selected={true}/>
      </div>
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>
}


export default App;

import React, { useState } from "react"
import Url from 'url-parse';

import Header from "../components/header"
import Bottle from "../components/bottle"
import Details from "../components/details"


if (typeof window !== `undefined`) {
  const windowUrl = window.location.href;
  var parsedUrl = new Url(windowUrl, true);
}


export default function Home() {

  let initDaysOfInfusion = 20;
  let initQuantityOfSugar = 600;
  let initAlcoholicGrade = 35;

  if (typeof window !== `undefined`) {
    initDaysOfInfusion = window.localStorage.getItem('daysOfInfusion') || initDaysOfInfusion;
    initQuantityOfSugar = window.localStorage.getItem('quantityOfSugar') || initQuantityOfSugar;
    initAlcoholicGrade = window.localStorage.getItem('alcoholicGrade') || initAlcoholicGrade;
  }


  const [daysOfInfusion, setDaysOfInfusion] = useState(initDaysOfInfusion)
  const [quantityOfSugar, setQuantityOfSugar] = useState(initQuantityOfSugar)
  const [alcoholicGrade, setAlcoholicGrade] = useState(initAlcoholicGrade)

  const mySetDaysOfInfusion = function (newDaysOfInfusion) {
    setDaysOfInfusion(newDaysOfInfusion);
    window.localStorage.setItem("daysOfInfusion", newDaysOfInfusion);
  }

  const mySetQuantityOfSugar = function (newQuantityOfSugar) {
    setQuantityOfSugar(newQuantityOfSugar);
    window.localStorage.setItem("quantityOfSugar", newQuantityOfSugar);
  }

  const mySetAlcoholicGrade = function (newAlcoholicGrade) {
    console.log("Alcoholic grade", newAlcoholicGrade)
    setAlcoholicGrade(newAlcoholicGrade);
    window.localStorage.setItem("alcoholicGrade", newAlcoholicGrade);
    console.log("state", alcoholicGrade)
  }

  return (
    <div style={{ color: `purple` }}>
      
      <Header headerText="Hello Gatsby!" />

      <div className={"split-view"} style={{color: "black", backgroundColor: "white"}}>
        <div style={{width : "50%", backgroundColor: ""}}>
          <Details 
            step={parsedUrl? parsedUrl.query.step : 0}
            daysOfInfusion={daysOfInfusion}
            quantityOfSugar={quantityOfSugar}
            alcoholicGrade={alcoholicGrade}
            setDaysOfInfusion={mySetDaysOfInfusion}
            setQuantityOfSugar={mySetQuantityOfSugar}
            setAlcoholicGrade={mySetAlcoholicGrade}
          />
        </div>
        <div style={{width : "50%"}}>
          <div className={"screen"}>
            <Bottle 
              daysOfInfusion={daysOfInfusion} 
              quantityOfSugar={quantityOfSugar} 
              alcoholicGrade={alcoholicGrade}
            />
          </div>
        </div>
      </div>
      <div className={"to-the-bottom"}>The end</div>
    </div>
  )
}
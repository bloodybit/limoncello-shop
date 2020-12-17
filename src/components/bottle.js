import React from "react"

import { Link } from "gatsby"
import bottleModule from "./bottle.module.css"

export default function Bottle(props) {

    const getDaysOfInfusion = () => {
        console.log(props.daysOfInfusion)
        if(props.daysOfInfusion==1) {
            return <img className={bottleModule.icon} src="/lambo.png" />;
        }
        let daysOfInfusion = [];
        for(let i=0; i<props.daysOfInfusion/10; i++){
            daysOfInfusion.push(
                <img key={i} src="/coffee.png" className={bottleModule.icon}/>
            )
        }
        return daysOfInfusion;
    }

    const getQuantityOfSugar= () => {
        let quantityOfSugar = [];
        for(let i =0; i<props.quantityOfSugar/200; i++) {
            quantityOfSugar.push(
                <img key={i} src="/sugar.png" className={bottleModule.icon}/>
            )
        }
        return quantityOfSugar
    }

    const getAlcoholicGrade = () => {
        let alcoholicGrade = [];
        for (let i =0; i<((props.alcoholicGrade)-20)/10; i++) {
            alcoholicGrade.push(
                <img key={i} src="/alcohol.png" className={bottleModule.icon}/>
            );
        }
        return alcoholicGrade;
    }
    
    return (
        <div className="center-this">

            <div className="borded">
                <h2>Your bottle</h2>
                <div>
                    <p>Days of infusion ({props.daysOfInfusion}): {getDaysOfInfusion()}</p>
                    <p>Alcoholic grade ({props.alcoholicGrade}%): {getAlcoholicGrade()}</p>
                    <p>Quantity of Sugar ({props.quantityOfSugar}gr.): {getQuantityOfSugar()}</p>
                </div>
            </div>


        </div>
    );
}
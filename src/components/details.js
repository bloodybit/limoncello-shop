import React, {useState} from "react"

import DetailComponent from './detail-component';
import PaymentManager from './payment-manager/payment-manager';
import Infusion from './chooseComponent/infusion';
import AlcoholThreeChoices from './chooseComponent/alcohol-three-choices';
import SugarThreeChoices from './chooseComponent/sugar-three-choices';
import cardsRes from '../resources/cards';


export default function Details(props) {
    const [step, setStep] = useState(props.step||0);

    const changeState = (amount) => {
        setStep(parseInt(step)+amount);
    }
    
    
    const getStep = () => {
        const card = cardsRes.filter(card => card.step == step)[0];


        console.log("DETAILS", props.daysOfInfusion)
        console.log("DETAILS", props.quantityOfSugar)
        console.log("DETAILS", props.alcoholicGrade)

        if(step==3) {
            return <DetailComponent
            step={card.step}
            title={card.title}
            description={<Infusion value={props.daysOfInfusion} setter={props.setDaysOfInfusion}/>}
            gif={card.gif}
            extra={card.extra}
            isNextButton={card.isNextButton}
            isPreviousButton={card.isPreviousButton}
            changeState={changeState}
            />
        }

        if(step==5) {
            return <DetailComponent
                step={card.step}
                title={card.title}
                description={<AlcoholThreeChoices value={props.alcoholicGrade} setter={props.setAlcoholicGrade}/>}
                gif={card.gif}
                extra={card.extra}
                isNextButton={card.isNextButton}
                isPreviousButton={card.isPreviousButton}
                changeState={changeState}
            />
        }

        if(step==7) {
            return <DetailComponent
                step={card.step}
                title={card.title}
                description={<SugarThreeChoices value={props.quantityOfSugar} setter={props.setQuantityOfSugar}/>}
                gif={card.gif}
                extra={card.extra}
                isNextButton={card.isNextButton}
                isPreviousButton={card.isPreviousButton}
                changeState={changeState}
            />
        }

        if(step==8) {
            return <PaymentManager 
                step={card.step}
                title={card.title}
                description={card.description}
                gif={card.gif}
                extra={card.extra}
                isNextButton={card.isNextButton}
                isPreviousButton={card.isPreviousButton}
                changeState={changeState}

                alcoholicGrade={props.alcoholicGrade}
                daysOfInfusion={props.daysOfInfusion}
                quantityOfSugar={props.quantityOfSugar}
            />
        }

        return <DetailComponent
            step={card.step}
            title={card.title}
            description={card.description}
            gif={card.gif}
            extra={card.extra}
            isNextButton={card.isNextButton}
            isPreviousButton={card.isPreviousButton}
            changeState={changeState}
            />


       


            // (<p>Bonus: There is another way which is kind of hipster and consist in boiling the alcohol at 50 degree and macerate the peel for a couple of hour, this gives a fresh taste.</p>
       
            // </DetailComponent>)

    }
    

    return (
    <div className="center-this">

        {getStep()}
       
        

        </div>
  )
}
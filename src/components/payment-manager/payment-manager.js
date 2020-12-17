import React, {useState} from "react"

import { Link } from "gatsby"
import paymentManagerStyle from "./payment-manager.module.css";
import validator from 'email-validator';
import axios from 'axios';



export default function PaymentManager(props) {

    const [value, setValue] = useState("")
    const [extra, setExtra] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")
   
    const emailValue = function (val) {
        setValue(val)
        setErrorMessage("")
    }

    const buy = function (buy) {
        const isEmailValid = validator.validate(value);
        console.log("HEH", props.daysOfInfusion)
        console.log("HEH", props.quantityOfSugar)
        console.log("HEH", props.alcoholicGrade)
        if (!isEmailValid) setErrorMessage(`Email ${value} is not valid!`);
        else {
            console.log(extra)
            axios
                .post('https://mylimoncello.herokuapp.com/order', {
                    email: value,
                    daysOfInfusion: props.daysOfInfusion,
                    quantityOfSugar: props.quantityOfSugar,
                    alcoholicGrade: props.alcoholicGrade,
                    extra: extra
                })
                .then(res => {
                    console.log(`statusCode: ${res.statusCode}`)
                    console.log(res)
                    setSuccessMessage("Congratulation! A bottle will be produced shortly!")
                })
                .catch(error => {
                    console.error(error)
                    setErrorMessage("Something went wrong with the order registration, contact your friend and order it in the 'ld way")
                })
                console.log('bought', isEmailValid);
            }
    }


return <div>
        <h1>{props.title}</h1>
        {props.description}
        <p className={"center-text"} style={{fontSize: "1.4em"}}>25,- €</p>
        {/* <img className={paymentManagerStyle.blink_me} src="http://pixelartmaker.com/art/cc53de89e33b6fa.png" /> */}
        
        <label htmlFor="email">Your email:</label>
        <input type="email" id="email" name="email" onChange={(val) => emailValue(val.target.value)} value={value}/>
        <br/>
        <br/>
        <label htmlFor="notes">Requests:</label>

        <textarea 
            id="notes" 
            name="notes" 
            rows="4" 
            cols="50"
            placeholder="Any request? E.g. Creamy version (with Milk) or with vanilla in the infusion"
            style={{width: "80%", marginTop: 15}}
            onChange={(val) => setExtra(val.target.value)}
            value={extra}
        >
        </textarea>
        <br/>
        <br/>
        <br/>
        <div className={"center-text"}>
            {!successMessage &&<input className={paymentManagerStyle.clickMe}
                type="button"
                value="Buy now"
                onClick={buy}
            />}
            <br/>
            <p style={{color: "red"}}><b>{errorMessage}</b></p>
            <p style={{color: "green"}}><b>{successMessage}</b></p>
        </div>

        {props.extra}
    </div>
}

import React, {useState} from "react"
import chooseStyle from './sugar-three-choices.module.css';

export default function SugarThreeChoices(props) {

    let initialChoicesValue = 450
    if(props.value) initialChoicesValue = props.value;
    const [value, setValue] = useState(initialChoicesValue)

    const onSelectorChange = function (val)  {
        props.setter(val)
        setValue(val)
    }

    
    return (<div style={{paddingLeft: 40}}>
            <div style={{}}>
                    <div style={{position: "relative", width: "100%", display: "flex"}}>
                        <div style={{position: "relative"}}>
                            <img src={value == "350"? "/checked.png" : "/unchecked.png"} className={chooseStyle.iconCheck} onClick={()=>{onSelectorChange("350")}} />
                        </div>
                        <p className={chooseStyle.iconText}>{`350 gr.`}</p>
                    </div>
                    <div style={{position: "relative", width: "100%", display: "flex"}}>
                        <div style={{position: "relative"}}>
                            <img src={value == "450"? "/checked.png" : "/unchecked.png"} className={chooseStyle.iconCheck} onClick={()=>{onSelectorChange("450")}} />
                        </div>
                        <p className={chooseStyle.iconText}>{`450 gr.`}</p>
                    </div>
                    <div style={{position: "relative", width: "100%", display: "flex"}}>
                        <div style={{position: "relative"}}>
                            <img src={value == "600"? "/checked.png" : "/unchecked.png"} className={chooseStyle.iconCheck} onClick={()=>{onSelectorChange("600")}} />
                        </div>
                        <p className={chooseStyle.iconText}>{`>600 gr.`}</p>
                    </div>

            </div>  
        <p>Value: {value}</p>  
    </div>
  )
}



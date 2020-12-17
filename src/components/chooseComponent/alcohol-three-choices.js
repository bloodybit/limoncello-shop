import React, {useState} from "react"
import chooseStyle from './alcohol-three-choices.module.css';

export default function ThreeChoices(props) {

    let initialChoicesValue = 35
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
                            <img src={value == "28"? "/checked.png" : "/unchecked.png"} className={chooseStyle.iconCheck} onClick={()=>{onSelectorChange("28")}} />
                        </div>
                        <p className={chooseStyle.iconText}>{`<30°`}</p>
                    </div>
                    <div style={{position: "relative", width: "100%", display: "flex"}}>
                        <div style={{position: "relative"}}>
                            <img src={value == "35"? "/checked.png" : "/unchecked.png"} className={chooseStyle.iconCheck} onClick={()=>{onSelectorChange("35")}} />
                        </div>
                        <p className={chooseStyle.iconText}>{`<30° but >40°`}</p>
                    </div>
                    <div style={{position: "relative", width: "100%", display: "flex"}}>
                        <div style={{position: "relative"}}>
                            <img src={value == "45"? "/checked.png" : "/unchecked.png"} className={chooseStyle.iconCheck} onClick={()=>{onSelectorChange("45")}} />
                        </div>
                        <p className={chooseStyle.iconText}>{`>40°`}</p>
                    </div>

            </div>  
        <p>Value: {value}</p>  
    </div>
  )
}



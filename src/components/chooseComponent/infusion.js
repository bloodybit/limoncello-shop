import React, {useState} from "react"

import infusionStyle from './infusion.module.css';


export default function Infusion(props) {

    
    let initialSliderValue = 20
    if(props) initialSliderValue = props.value;
    const [value, setValue] = useState(initialSliderValue)
    const [checked, setChecked] = useState(value==1);

    const onSelectorChange = function (val)  {
        props.setter(val)
        setValue(val)
    }

    return (<div style={{paddingLeft: 40}}>
        <h4>{props.title}</h4>
        {!checked &&<div className="center-text">
            <select className={infusionStyle.customSelect} value={value} onChange={v=>onSelectorChange(v.target.value)}>
                <option value="7">7 days</option>
                <option value="10">10 days</option>
                <option value="15">15 days</option>
                <option value="20">20 days</option>
                <option value="30">30 days</option>
                <option value="40">40 days</option>
            </select>
        </div>}
        <div style={{display: "inline-flex"}}>
            <div style={{position: "relative", width: "100%"}}>
                {checked ?
                        <img src="/checked.png" className={infusionStyle.iconCheck} onClick={()=>{setChecked(!checked); onSelectorChange(20)}} />
                        :
                        <img src="/unchecked.png" className={infusionStyle.iconCheck} onClick={()=>{setChecked(!checked); onSelectorChange(1)}} /> 
                            
                }
            </div>
            <p style={{fontSize: "0.9em"}}><b>Bonus🔥🔥🔥:</b> There is another way which is kind of hipster and consist in boiling the alcohol at 50 degree and macerate the peel for a couple of hour, this gives a fresh taste.</p>
        </div>  
    </div>
  )
}



import React, {useState} from "react"


export default function DetailComponent(props) {

    let initialSliderValue = 0
    if(props.slider) initialSliderValue = props.slider.value;
    const [sliderValue, setSliderValue] = useState(initialSliderValue)


    const onSliderChange = (val) => {
        console.log(val.target.value)
        props.slider.setter(val.target.value)
        setSliderValue(val.target.value)
    }

    return (
    <div>
        <h1>
            {props.title}
        </h1>
        {props.description}
        
        {props.children}
        
        {props.gif && 
            <div style={{width: "100%"}} className={"center-text"}>
                <img src={props.gif} style={{
                    width: "70%",
                    margin: "auto",
                }}/>
            </div>
        }

        {props.extra}

        <div style={{width: "100%"}}>
            {props.isPreviousButton == true && 
                <img src="/arrow-left.png" 
                    style={{
                        width: 20}} 
                    onClick={() => props.changeState(-1)}
                /> 
            }

            {props.isNextButton == true && 
                <img src="/arrow-right.png" 
                    style={{width: 20, float: 'right'}} 
                    onClick={() => props.changeState(1)}
                /> 
            }
        </div>
    </div>
  )
}
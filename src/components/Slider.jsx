import { useState} from 'react';

export default function Slider(props) {

    const choicesLength = props.choices.length - 1;

    const [bgPercent, setBgPercent] = useState(`${(props.sliderValue / choicesLength) * 100}%`);

    const bgStyle = {
        backgroundSize: `${bgPercent} 100%`
    }

    

    function handleChange(e) {
        props.handleSlider(e)
        const percentage = (e.target.value / choicesLength) * 100;
        setBgPercent(`${percentage}%`)
    }

    return (
       <input className="slider--input" type="range" name="slider" id="slider" min={0} max={props.choices.length - 1} step={1} value={props.sliderValue} onChange={handleChange} style={bgStyle} />
    )
}
import { useState } from "react"

export default function Toggle(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
    
    return (
        <div className="toggle__section">
        <span>Monthly Billing</span>
        <input type="checkbox" name="toggle"
        id="toggle" checked={props.toggled}
        onChange={props.handleToggle}/>
        <label for="toggle" className="toggle"></label>
        <span>Yearly Billing</span>
        <span className="discount">{windowWidth < 640 ? '-25%' : '25% discount'}</span>
        </div>
    )
}
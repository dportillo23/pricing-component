import {useState} from 'react';
import choices from '../data/choices.json';
import Slider from './Slider';
import Toggle from './Toggle';

export default function Card() {
    const initialIndex = Math.ceil((choices.length-1) / 2);
    const initialParams = {
        toggle: false,
        factor: 1
    }

    // States
    const [views, setViews] = useState(choices[initialIndex].views)
    const [prices, setPrices] = useState(choices[initialIndex].price)
    const [sliderValue, setSliderValue] = useState(initialIndex);
    const [toggled, setToggled] = useState(initialParams.toggle)
    const [factor, setFactor] = useState(initialParams.factor)
    const [finalPrice, setFinalPrice] = useState(+choices[initialIndex].price * initialParams.factor)

    // Functions
    function handleSlider(e) {
        const newValue = e.target.value;
        setSliderValue(newValue);
        setViews(choices[newValue].views);
        setPrices(choices[newValue].price)
        setFinalPrice(choices[newValue].price * factor)
    }


    function handleToggle(e) {
        const isChecked = e.target.checked ? 0.75 : 1
        setToggled(!toggled)
        setFactor(isChecked)
        setFinalPrice(prices * isChecked)
    }

    return(
        <div className='card'>
        <div className="card__top wrapper">
            <p className='views'>{views} pageviews</p>
            <p className='price'><span className="price--display">${finalPrice.toFixed(2)}</span> / month</p>
                <Slider
                    choices={choices}
                    sliderValue={sliderValue}
                    handleSlider={handleSlider}
                />
                <Toggle
                    handleToggle={handleToggle}
                    toggled={toggled}
                />
        </div>
            <div className="card__bottom wrapper">
                <ul>
                    <li className="bottom__section">Unlimited websites</li>
                    <li className="bottom__section">100% data ownership</li>
                    <li className="bottom__section">Email reports</li>
                </ul>
                <button>Start my trial</button>
            </div>
        </div>
    )
}
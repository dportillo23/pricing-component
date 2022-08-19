# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![Mobile design](./screenshots/mobile.png)
![Desktop design](./screenshots/desktop.png)
![Desktop with toggle active](./screenshots/desktop-toggled.png)

### Links

- Repository URL: [Github Repository](https://github.com/dportillo23/pricing-component)
- Live Site URL: [Demo Site](https://dportillo23.github.io/pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

In the css (scss) side, I learned about input range customization. In the React (jsx) side, it was nice to practice some logic and make it work.


```scss
input[type="range"] {
    -webkit-appearance: none;
    height: 0.5rem;
    width: 100%;
    background: var(--col-light-gray-blue);
    border-radius: 1rem;
    background-image: linear-gradient(rgb(var(--col-soft-cyan)), rgb(var(--col-soft-cyan)));
    background-repeat: no-repeat;
  }

  input[type=range]:active {
    outline: none;

    &::-webkit-slider-thumb {
      cursor: grabbing;
    }

    &::-moz-range-thumb {
      cursor: grabbing;
    }

    &::-ms-thumb {
      cursor: grabbing;
    }
  }

//   Thumb
  input[type=range]::-webkit-slider-thumb {
    @include thumb($thumbSize, var(--col-strong-cyan));
    box-shadow: 0 0.25rem 1.5rem 0.75rem rgb(var(--col-soft-cyan));
  }

  input[type=range]::-moz-range-thumb {
    @include thumb($thumbSize, var(--col-strong-cyan));
    box-shadow: 0 0.25rem 1.5rem 0.75rem rgb(var(--col-soft-cyan));
  }

  input[type=range]::-ms-thumb {
    @include thumb($thumbSize, var(--col-strong-cyan));
    box-shadow: 0 0.25rem 1.5rem 0.75rem rgb(var(--col-soft-cyan));
  }
```
```jsx
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
```

### Continued development

It's always nice to keep practicing React, adding some extra stuff to learn, and keep practicing logic, I liked this one.


### Useful resources

- [Styling Cross-Browser Compatible Range Inputs with CSS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - This explains in a detailed manner how to customize a input range. Very good post as almost every post from CSS-tricks.

## Author

- Website - [Daniel Portillo](https://www.danielportillo.dev)
- Frontend Mentor - [@dportillo23](https://www.frontendmentor.io/profile/dportillo23)
- Twitter - [@DaniDev23](https://twitter.com/DaniDev23)


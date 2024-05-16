// scripts

const celsiusField = document.querySelector("#celsius");
const kelvinField = document.querySelector("#kelvin");
const fahrenheitField = document.querySelector("#fahrenheit");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// window loading reset
window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = ""; 
    kelvinField.innerHTML = ""; 
    fahrenheitField.innerHTML = ""; 
})



convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();

    // adding loading
    convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i> Converting....</span>"
    setTimeout(() => {
        convertBtn.innerHTML = "<span>Convert</span>";
    }, 1000)
})

function convertToCelsius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if(tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue -32) * (5/9);
            const fahrenheitToKelvin = (inputValue -32) * (5/9) + 273;
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
            c`;
            kelvinField.innerHTML = `${fahrenheitToKelvin.toFixed(3)} &deg;
            k`;
        }
        else if(tempType.value ==="kelvin"){
            const kelvinToCelsius = inputValue + 273.15;
            const kelvinToFahrenheit = (inputValue - 273) * (9/5) + 32;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;
            c`;
            fahrenheitField.innerHTML = `${kelvinToFahrenheit.toFixed(3)} &deg;
            f`;
        }
        else if(tempType.value ==="celsius"){
            const celsiusToKelvin = inputValue - 273.15;
            const celsiusToFahrenheit = (inputValue) * (9/5) + 32;
            kelvinField.innerHTML = `${celsiusToKelvin.toFixed(3)} &deg;
            k`;
            fahrenheitField.innerHTML = `${celsiusToFahrenheit.toFixed(3)} &deg;
            f`;
        }
    }, 1200)
}

document.addEventListener('DOMContentLoaded', function() {
    const convertBtn = document.getElementById('convert-btn');
    const temperatureInput = document.getElementById('temperature-input');
    const conversionType = document.getElementById('conversion-type');
    const resultDisplay = document.getElementById('result-display');

    convertBtn.addEventListener('click', function() {
        const temperatureValue = parseFloat(temperatureInput.value);
        const conversion = conversionType.value;

        if (isNaN(temperatureValue)) {
            resultDisplay.textContent = 'Please enter a valid number!';
            return;
        }

        let result;
        if (conversion === 'celsius-to-fahrenheit') {
            result = (temperatureValue * 9/5) + 32;
            resultDisplay.textContent = `Result: ${temperatureValue}°C = ${result.toFixed(2)}°F`;
        } else if (conversion === 'fahrenheit-to-celsius') {
            result = (temperatureValue - 32) * 5/9;
            resultDisplay.textContent = `Result: ${temperatureValue}°F = ${result.toFixed(2)}°C`;
        }
    });
});

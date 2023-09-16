// Replace with your own API endpoint for currency conversion
const apiUrl = 'http://data.fixer.io/api/latest';
const access = '3e838f182215e240f819a58a839f847f';

document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convert-btn');
    convertBtn.addEventListener('click', convertCurrency);
});

async function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;

    // Make an API request to get the exchange rate
    try {
        // const response = await fetch(`${apiUrl}?from=${fromCurrency}&to=${toCurrency}`);
        const response = await fetch(`${apiUrl}?access_key=${access}`);
        const data = await response.json();

        if (response.status === 200) {
            // console.log(data);
            console.log(`${data.rates[fromCurrency]} converting to ${data.rates[toCurrency]}`);
            const exchangeRate = data.rates[toCurrency]/data.rates[fromCurrency];
            const convertedAmount = amount * exchangeRate;
            const resultText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            document.getElementById('result-text').textContent = resultText;
        } else {
            document.getElementById('result-text').textContent = 'Error: Unable to fetch exchange rate.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('result-text').textContent = 'Error: An unexpected error occurred.';
    }
}

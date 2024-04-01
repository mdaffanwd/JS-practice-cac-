const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please, Enter a valid height ${height}`
    } else if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please, Enter a valid height ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(1);
        if (bmi < 18.6) {
            results.innerHTML = `<span>your body mass index is ${bmi},<br>you're Under-Weight</span>`
        }
        if (bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>your body mass index is ${bmi},<br>you're in normal range</span>`
        }
        if (bmi > 24.9) {
            results.innerHTML = `<span>your body mass index is ${bmi},<br>you're Over-weighted</span>`
        }
    }



})
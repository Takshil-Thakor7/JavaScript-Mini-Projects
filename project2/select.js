const form = document.querySelectorAll('form')

form.forEach( (form) => {
    form.addEventListener('submit', function(e){
        e.preventDefault()
    
        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)
        const results = document.querySelector('#results')
        
        if (height === '' || height < 0 || isNaN(height)) {
            results.innerHTML = `Please Enter a valid height ${height}`;
        } else if (weight === '' || weight < 0 || isNaN(weight))  {
            results.innerHTML = `Please Enter a valid weight ${weight}`;
        } else {
           const bmi = (weight / (( height*weight)/1000)).toFixed(2)
           //show the result
           //results.innerHTML = `<span>${bmi}</span>`
           if (bmi < 18.6) {
               results.innerHTML = ` <span> ${bmi} It is based on under weight </span>`
           } else if (bmi > 18.6 && bmi < 24.9) {
                console.log("It is based on normal weight");
           } else {
                console.log("It is based on over weight");
           }
        }
    })
});
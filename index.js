document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('form');
    const nameEl = document.querySelector('#user_name');
    const cardnumberEl = document.querySelector('#card_number');
    const expdateEl = document.getElementById('exp_date');
    const expmonthEl = document.querySelector('#exp_month');
    const cvcEl = document.querySelector('#cvc');
    const completeEl = document.querySelector('.complete');
    const carderrormessageEl = document.getElementById('card-error-message');
    const formcontainerEl = document.querySelector('.form');
    const completebtnEl = document.getElementById('complete');

    // CARD NUMBER VALIDATION
    cardnumberEl.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 14) {
            value = value.slice(0, 14);
        }
        e.target.value = value;
    });

    // EXPIRATION DATE VALIDATION
    expdateEl.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2);
        }
        e.target.value = value;
    });

    // SUBMIT FORM 
    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardNumberValue = cardnumberEl.value.trim();
        const expdateValue = expdateEl.value.trim();
        const expmonthValue = expmonthEl.value.trim();
        const cvcValue = cvcEl.value.trim();

        let hasError = false;

        // Check if fields are empty
        if (!cardNumberValue) {
            cardnumberEl.style.border = '1px solid red';
            alert("Card number cannot be empty");
            hasError = true;
        } else if (cardNumberValue.length !== 14 || !/^\d+$/.test(cardNumberValue)) {
            cardnumberEl.style.border = '1px solid red';
            alert("Card number must be exactly 14 digits and contain only numbers");
            hasError = true;
            carderrormessageEl.style.display ='block';
        } else {
            cardnumberEl.style.border = '1px solid green';
        }

        if (!expdateValue) {
            expdateEl.style.border = '1px solid red';
            alert("Expiration date cannot be empty");
            hasError = true;
        } else if (expdateValue.length !== 2 || !/^\d+$/.test(expdateValue)) {
            expdateEl.style.border = '1px solid red';
            alert("Expiration date must be 2 digits");
            hasError = true;
        } else {
            expdateEl.style.border = '1px solid green';
        }

        if (!expmonthValue) {
            expmonthEl.style.border = '1px solid red';
            alert("Expiration month cannot be empty");
            hasError = true;
        } else if (expmonthValue.length !== 2 || !/^\d+$/.test(expmonthValue)) {
            expmonthEl.style.border = '1px solid red';
            alert("Expiration month must be 2 digits");
            hasError = true;
        } else {
            expmonthEl.style.border = '1px solid green';
        }

        if (!cvcValue) {
            cvcEl.style.border = '1px solid red';
            alert("CVC cannot be empty");
            hasError = true;
        } else if (cvcValue.length !== 3 || !/^\d+$/.test(cvcValue)) {
            cvcEl.style.border = '1px solid red';
            alert("CVC must be exactly 3 digits");
            hasError = true;
        } else {
            cvcEl.style.border = '1px solid green';
        }

        // If there's no error, submit the form
        if (!hasError) {
            alert("Form submitted successfully!");
            formEl.reset(); 
            
            // Remove green border from inputs
            cardnumberEl.style.border = '';
            expdateEl.style.border = '';
            expmonthEl.style.border = '';
            cvcEl.style.border = '';

            // Hide the form and show the complete message
            formcontainerEl.style.display = 'none'; // Hide the form
            completeEl.style.display = 'block'; // Show the complete message
        }
    });

    completebtnEl.addEventListener('click', () =>{
        completeEl.style.display = 'none';
        formcontainerEl.style.display = 'block';
    })
});



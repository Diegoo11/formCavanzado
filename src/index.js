const password = document.getElementById('password');
const retryPass = document.getElementById('retrypassword');

document.querySelectorAll('input').forEach((inputText) => {
    // eslint-disable-next-line no-use-before-define
    inputText.addEventListener('blur', () => { validator(inputText); });
});

document.querySelectorAll('input').forEach((inputText) => {
    inputText.addEventListener('input', () => { inputText.setCustomValidity(''); });
});

document.getElementById('retrypassword').addEventListener('input', () => {
    if (!(password.value === retryPass.value)) {
        retryPass.setCustomValidity('Tu contrasena debe coincidir con la esatablecida previamente');
        retryPass.reportValidity();
    }
});

document.querySelector('form').addEventListener('submit', (event) => {
    if (!(password.value === retryPass.value)) {
        retryPass.setCustomValidity('Tu contrasena debe coincidir con la esatablecida previamente');
        retryPass.reportValidity();
        event.preventDefault();
    }
});

function showError(x) {
    if (x.validity.typeMismatch) {
        x.setCustomValidity('El texto ingresado no coinside con un correo');
        x.reportValidity();
    } else if (x.validity.valueMissing) {
        x.setCustomValidity('Porfavor ingresa un valor, el formulario no puede quedar vacio');
        x.reportValidity();
    } else if (x.validity.tooLong) {
        x.setCustomValidity('Porfavor ingresa un codigo postal valido');
        x.reportValidity();
    } else {
        x.setCustomValidity('');
    }
}

function validator(x) {
    x.setCustomValidity('');
    if (!x.validity.valid) {
        showError(x);
    }
}

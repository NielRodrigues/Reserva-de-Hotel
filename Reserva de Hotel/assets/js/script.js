document.querySelector('.form-range').addEventListener('input', () => {
    document.querySelector('span.price').innerText = document.querySelector('.form-range').value
})
const btn = document.querySelector('.num-random-btn');
const resultado = document.querySelector('.resultado');

btn.addEventListener('click', () => {
    let numeroAleatorio = Math.floor(Math.random() * 51);
    resultado.innerText = numeroAleatorio
});
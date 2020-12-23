const icon = document.getElementById('menu__icon');
const nav = document.querySelector('.nav');

icon.addEventListener('click', ()=>{
    nav.classList.toggle('show');
});


const overlay = document.getElementById('overlay');
document.querySelectorAll('#portafolio .container-imgport .container-img img').forEach((elemento)=>{
    const ruta = elemento.getAttribute('src');

    elemento.addEventListener('click', ()=>{
        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
    });
});

document.querySelector('#btn_cerrar_pop').addEventListener('click', ()=>{
    overlay.classList.remove('activo');
});

overlay.addEventListener('click', (evento)=>{
    evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
});
import { arr } from './arr.js';

let ul = document.querySelector('ul')
let del = document.querySelector('.del')
let show = document.querySelector('.show')
let i = document.querySelectorAll('i')

function showList() {
    ul.innerHTML = ''
    const newObj = arr.map(ele => {
        const { name, img, job, tel } = ele;
        return `
        <li>
        <img src="../images/${img}" alt="">
        <strong>
            <p>${name}</p>
            <p>${job}</p>
            <p>${tel}</p>
        </strong>
        <i class="xi-heart-o"></i>
        </li>
        `
    }).join('')
    ul.innerHTML = newObj;
    i = document.querySelectorAll('i')
    i.forEach(ele => {
        ele.addEventListener('click', e => {
            if (e.target.className === 'xi-heart-o') {
                e.target.className = 'xi-heart'
            } else {
                e.target.className = 'xi-heart-o'
            }
        })
    })
}
del.addEventListener('click', e => {
    ul.innerHTML = ''
})
show.addEventListener('click', e => {
    showList();
})
showList();
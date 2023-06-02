import { arr } from './arr.js';
import { get, getAll } from './getEle.js';
import showList from './show.js'

let i = getAll('i')
let ul = get('ul')
let show = get('.show')
let del = get('.del')

ul.innerHTML = showList(arr);
i = getAll('i')
like();

function like() {
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
    ul.innerHTML = showList(arr);
    i = getAll('i')
    like();
})
const showList=(arr)=>{
    let newObj = arr.map(ele => {
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
    return newObj;
}
export default showList;
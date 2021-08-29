let f1 = document.forms.f1
let edit = document.querySelector('.btn.btn-edit')
let lorem = document.getElementsByClassName('lorem')
let box = document.querySelector('.box.box-head');
let boxFoot = document.querySelector('.box.box-foot');
let save = document.querySelector('.btn.btn-save');
let style = document.querySelector('.btn.btn-style')
let but = document.querySelector('.buttons')

f1.area.value = box.innerHTML
edit.addEventListener('click', function (event) {
    f1.classList.add('f1-block')
    f2.classList.remove('f2-block')
})

save.addEventListener('click', function () {
    box.innerHTML = f1.area.value;
    f1.classList.remove('f1-block');
    but.classList.remove('buttons-none')
})

let f2 = document.forms.f2
style.addEventListener('click', function () {
    f2.classList.add('f2-block');
    f1.classList.remove('f1-block')
})

f2.addEventListener('click', function (event) {
    for (const element of lorem) {
        if (event.target.name === 'fontsize') {
            element.style.fontSize = event.target.value
        } else if (event.target.name === 'font-family') {
            element.style.fontFamily = event.target.value
        }

    }
})

let color = document.querySelector('.colors');
let bgSquereColor = document.querySelector('.background-colors');
let btnTxtColor = document.querySelector('.txt-color');
let bgColor = document.querySelector('.bckg-color');

btnTxtColor.addEventListener('click', function (event) {
    color.classList.add('colors-block');
    color.addEventListener('click', function (event) {
        for (const element of lorem) {
            element.style.color = getComputedStyle(event.target).backgroundColor
        }
        color.classList.remove('colors-block');
    })
})

bgColor.addEventListener('click', function (event) {
    bgSquereColor.classList.add('colors-block');
    bgSquereColor.addEventListener('click', function (event) {
        box.style.backgroundColor = getComputedStyle(event.target).backgroundColor;
        bgSquereColor.classList.remove('colors-block');
    })
})


let btnBold = document.getElementsByName('bold')
btnBold[0].addEventListener('click', function () {
    if (this.checked) {
        for (const element of lorem) {
            element.style.fontWeight = this.value
        }
    } else {
        for (const element of lorem) {
            element.style.fontWeight = 'normal'
        }
    }
})

let btnItalic = document.getElementsByName('italic')
btnItalic[0].addEventListener('click', function () {
    if (this.checked) {
        for (const element of lorem) {
            element.style.fontStyle = this.value
        }
    } else {
        for (const element of lorem) {
            element.style.fontStyle = 'normal'
        }
    }
})


let opt = document.querySelector('.option')
let btnCreateElement = document.querySelector('.btn.btn-create-element');
btnCreateElement.addEventListener('click', function () {
    box.classList.add('box-head-none');
    boxFoot.classList.add('box-foot-none');
    but.classList.add('buttons-none');
    opt.classList.add('option-block');
    document.forms.f3.reset();
    document.forms.f4.reset();
})


let f3 = document.forms.f3;
let f4 = document.forms.f4;
opt.addEventListener('click', function (event) {
    if (event.target.value === 'table') {
        opt.style.height = '400px'
        f3.classList.add('f3-block')
        f4.classList.remove('f4-block')
    } else if (event.target.value === 'list') {
        opt.style.height = '250px'
        f4.classList.add('f4-block')
        f3.classList.remove('f3-block')
    }
})


let createTable = document.querySelector('.create-table')
createTable.addEventListener('click', function () {
    let tbl = document.createElement('table')
    opt.classList.remove('option-block')
    box.classList.remove('box-head-none')
    boxFoot.classList.remove('box-foot-none')
    let i = 1;
    while (i <= f3.countTr.value) {
        let tr = document.createElement('tr');
        let j = 1;
        while (j <= f3.countTd.value) {
            let td = document.createElement('td');
            td.textContent = 'TD'
            td.style.width = f3.width.value + 'px'
            td.style.height = f3.height.value + 'px'
            td.style.border = f3.brdWidth.value + 'px'
            td.style.borderStyle = f3.brdType.value
            td.style.borderColor = f3.brdColor.value
            j++;
            tr.appendChild(td)
        }
        i++;
        tbl.appendChild(tr);
    }
    f1.area.value += tbl.outerHTML
})


let liNumb = document.querySelector('.lishka');
let createElement = document.querySelector('.create-list')
createElement.addEventListener('click', function (event) {
    let ul = document.createElement('ul');
    opt.classList.remove('option-block')
    box.classList.remove('box-head-none')
    boxFoot.classList.remove('box-foot-none')
    for (i = 1; i <= liNumb.value; i++) {
        let li = document.createElement('li');
        li.textContent = 'item'
        ul.appendChild(li);
        li.style.listStyleType = f4.tpm.value
    }
    f1.area.value += ul.innerHTML;
})

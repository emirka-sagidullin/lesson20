// 1
let ex1 = document.getElementById('jsstyle');
function js_style(){
    ex1.style = `
    font-size: 20px;
    color: red;
    background: black;
    border: 1px solid blue;
    width: 100px;
    height: 100px;
    `
    console.log(ex1.offsetHeight, ex1.offsetWidth)
};

// 2
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let form1 = document.getElementById('form1');
form1.addEventListener('submit', (e) => {e.preventDefault()})
function getFormvalue(){
    let p = document.createElement('p');
    p.innerHTML = fname.value + ' ' + lname.value;
    document.body.appendChild(p);
};

// 3
let w3r = document.getElementById('w3r');
function getAttributes(){
    href = document.createElement('p')
    href.innerHTML = w3r.href
    hreflang = document.createElement('p')
    hreflang.innerHTML = w3r.hreflang
    rel = document.createElement('p')
    rel.innerHTML = w3r.rel
    target = document.createElement('p')
    target.innerHTML = w3r.target
    type = document.createElement('p')
    type.innerHTML = w3r.type
    document.body.appendChild(href)
    document.body.appendChild(hreflang)
    document.body.appendChild(rel)
    document.body.appendChild(target)
    document.body.appendChild(type)
};

// 4
let sampleTable = document.getElementById('sampleTable');
let s = 2
function insert_Row(){
    s += 0.5
    if(s % 1 != 0){
        let tr = document.createElement('tr');
        let child = document.createElement('td')
        tr.appendChild(child)
        sampleTable.appendChild(tr)
        child.innerHTML = `Row ${s + 0.5} cell1`
    }else{
        let child = document.createElement('td')
        // sampleTable.lastChild.appendChild(child)
        child.innerHTML = `Row ${s} cell2`
        sampleTable.lastChild.appendChild(child)
    }
};

// 5
let myTable = document.getElementById('myTable1');
function changeContent(){
    cell = prompt("Введите координаты ячейки в формате Row(x) cell(y)")
    new_value = prompt('Введите новое значение ячейки')
    if(document.getElementById('1 1').innerHTML == cell){
        document.getElementById('1 1').innerHTML = new_value
    };
    if(document.getElementById('1 2').innerHTML == cell){
        document.getElementById('1 2').innerHTML = new_value
    };
    if(document.getElementById('2 1').innerHTML == cell){
        document.getElementById('2 1').innerHTML = new_value
    };
    if(document.getElementById('2 2').innerHTML == cell){
        document.getElementById('2 2').innerHTML = new_value
    };
    if(document.getElementById('3 1').innerHTML == cell){
        document.getElementById('3 1').innerHTML = new_value
    };
    if(document.getElementById('3 2').innerHTML == cell){
        document.getElementById('3 2').innerHTML = new_value
    };
};


// 6
let myTable2 = document.getElementById('myTable2');
function createTable(){
    let str = prompt('Количество строк');
    let pillars = prompt('Количесво столбов');
    for (let i = 0; i < str; i++) {
    let tr = document.createElement('tr');
    myTable2.append(tr);
    for (let j = 0; j < pillars; j++) {
        let td = document.createElement('td');
        tr.append(td);
    }
    }
};

// 7
let colorSelect = document.getElementById('colorSelect');
function removecolor(){
    el = colorSelect.selectedIndex;
    elch = colorSelect[el].value
    colorSelect.remove(colorSelect.selectedIndex);
    p = document.createElement('p')
    p.innerHTML = `Элемент ${elch} был удален`
    document.body.appendChild(p)
};

// 8
let mySelect = document.getElementById('meSelect');
function getOptions(){
    
};
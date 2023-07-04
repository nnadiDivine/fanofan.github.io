let A=[];
let sel = document.querySelectorAll('#sel');
let con = document.querySelector('#con');
let con1 = document.querySelector('#con1');
let con2 = document.querySelector('#con2');

//conatct select
let B=[];
let sele = document.querySelector('#sele');
let cone = document.querySelector('#cone');
let cone1 = document.querySelector('#cone1');
let cone2 = document.querySelector('#cone2');

function checkFirst(e) {
    for (let i = 0; i < sel.length; i++) {
        let selv = sel[i].value;
        console.log(selv);
        if (selv == "" || selv == "" || selv == null) {
            A[0] = false;
            break;
        } else {
            A[0] = true;
        }
    }
}

    

function popup() {
    checkFirst("");
    if (A[0] == true) {
        con.textContent = sel[1].value+" Agencies";
        if (sel[1].value == "Indian") {
            con1.textContent = "indian location"
            con2.textContent = "indian location 2"
        } else if(sel[1].value == "South african"){
            con1.textContent = "SA location"
            con2.textContent = "SA location 2"
        } else if(sel[1].value == "Nigerian"){
            con1.textContent = "no 11 block 15, okigwe road, Imo State"
            con2.textContent = "no 1 block 13, rayfield lantan, Jos State"
        }
        document.querySelector("#remove").classList.remove("disappear");
    }else{
        alert("Dont Leave A Field Empty")
    }
}

//contact
function popup2() {    
        cone.textContent = sele.value+" Agencies";
        if (sele.value == "") {
            alert("Dont Leave A Field Empty")
        }
        if (sele.value == "Mexican") {
            cone1.textContent = "Phone: +23480123456789"
            cone2.textContent = "Phone: +23480123456789"
        document.querySelector("#removee").classList.remove("disappear");
        }
        if (sele.value == "Russian") {
            cone1.textContent = "Phone: +23480123456789"
            cone2.textContent = "Phone: +23480123456789"
        document.querySelector("#removee").classList.remove("disappear");
        }
}
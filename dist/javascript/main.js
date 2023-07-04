function toggleMenu() {
    document.getElementById('nav-house').classList.toggle('open');
    document.getElementById('mynav').classList.toggle('open');
    document.getElementById('nav-closer').classList.toggle('open');
    //console.log("hi");
}

 // console.log(do)
 function chgnav() {
    let devv = window.scrollY;
    if (devv > 50){
    document.querySelector('#nvb').classList.add('wbg');
    console.log("hi");
}

else{
    document.querySelector('#nvb').classList.remove('wbg');
    // document.querySelectorAll("#nvp").classList.remove('white');
    console.log("hello");
}
console.log(devv);
}

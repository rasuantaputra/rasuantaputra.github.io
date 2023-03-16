const dicEng = document.getElementById('dicEng');
const dicBhs = document.getElementById('dicBhs');

const tombol1 = document.getElementById('tombol1');
const tombol2 = document.getElementById('tombol2');

let flag1 = 0;
let flag2 = 0;
let flag3 = [];

function flipCard(){
    dicEng.classList.toggle('flipped');
    dicBhs.classList.toggle('flipped');
}

function next(){
    tombol1.addEventListener('click', flipCard)
    tombol2.addEventListener('click', flipCard)
    tombol1.innerText = 'Next';
    dicEng.innerHTML = bhs[flag3[flag2 - 2]];
}

function check() {
    tombol1.addEventListener('click', flipCard)
    tombol2.addEventListener('click', flipCard)
    tombol1.innerText = 'Check';
    dicBhs.innerHTML = eng[flag1];
}

function nextKanji() {
    flag1 = Math.floor(Math.random() * eng.length);
    flag2 += 1;
    flag3.push(flag1);

    if (flag2 % 2 == 0) {
        next()
    } else {
        check()
    }
}





function handleFlip() {
  front.classList.toggle('flipped')
  back.classList.toggle('flipped')
}

btn.addEventListener('click', handleFlip)
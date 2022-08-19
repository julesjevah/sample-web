let myNumber = document.querySelector('#number');
let value = 0;

function generateRandom() {
    clearInterval(i);
    value = Math.floor(Math.random()*10);
    console.log(value);
    document.getElementById('number').innerHTML = value;
}

function count() {
    i = setInterval(()=>{
        if(value<10){
            value++;
            document.getElementById('number').innerHTML=value;
        }
    }, 1000);
}

function resetNumber() {
    clearInterval(i);
    value = 0;
    document.getElementById('number').innerHTML = value;
}
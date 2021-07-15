const kiloinput = document.getElementById("kilo");
const grammeinput = document.getElementById("gramme");
const poundinput = document.getElementById("pound");
const ounceinput = document.getElementById("ounce");

function kilo(){
   

    grammeinput.value = kiloinput.value*1000;
    poundinput.value = kiloinput.value*2.204623;
    ounceinput.value = kiloinput.value*35.274;
    
    console.log("value", [kiloinput.value, grammeinput.value, poundinput.value, ounceinput.value]);
}

function gramme(){
    const kiloinput = document.getElementById("kilo");
    const grammeinput = document.getElementById("gramme");
    const poundinput = document.getElementById("pound");
    const ounceinput = document.getElementById("ounce");

    kiloinput.value = grammeinput.value/1000;
    poundinput.value = kiloinput.value*2.204623;
    ounceinput.value = kiloinput.value*35.274;
    
    console.log("value", [kiloinput.value, grammeinput.value, poundinput.value, ounceinput.value]);
}

function pound(){
    const kiloinput = document.getElementById("kilo");
    const grammeinput = document.getElementById("gramme");
    const poundinput = document.getElementById("pound");
    const ounceinput = document.getElementById("ounce");

    kiloinput.value = poundinput.value/2.204623;
    grammeinput.value = kiloinput.value*1000;
    ounceinput.value = kiloinput.value*35.274;
    
    console.log("value", [kiloinput.value, grammeinput.value, poundinput.value, ounceinput.value]);
}

function ounce(){

    kiloinput.value = ounceinput.value/35.274;
    grammeinput.value = kiloinput.value*1000;
    poundinput.value = kiloinput.value*2.204623;
    
    console.log("value", [kiloinput.value, grammeinput.value, poundinput.value, ounceinput.value]);
}

var kilohinput = document.getElementById('kiloh');
var milesinput = document.getElementById('miles');

function kiloh() {
    var kilohinput = document.getElementById('kiloh');
    var milesinput = document.getElementById('miles');
    milesinput.value = kilohinput.value/1.609;
}

function miles() {
    var kilohinput = document.getElementById('kiloh');
    var milesinput = document.getElementById('miles');
    kilohinput.value = milesinput.value*1.609;
}

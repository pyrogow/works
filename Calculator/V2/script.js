// Перелік того, що треба знати
// Базові будувальні блоки
// var a = 0;
// function myFunction(a){
//     return a;
// }
// var b = myFunction(1);
// console.log(b);
// var c = myFunction(2);
// alert(c);
// var d = a;
// var d2 = myFunction(a);
// alert(d + d2);


function sum(a, b) {
    var z = parseInt(a) + parseInt(b);
    return z;
}
function sub(a, b) {
    var z = parseInt(a) - parseInt(b);
    return z;
}
function mult(a, b) {
    var z = parseInt(a) * parseInt(b);
    return z;
}
function div(a, b) {
    var z = parseInt(a) / parseInt(b);
    return z;
}

function operation() {
    // var f = document.forms['testform'].flag.value;
    if (document.forms['testform'].flag.value == 'false') {
        document.forms['testform'].tmp.value = document.forms['testform'].res.value;
        document.forms['testform'].op.value = document.forms['testform'].btn_add.value;
        document.forms['testform'].res.value = "";
        document.forms['testform'].flag.value = 'true';
        console.log(document.forms['testform'].flag.value);
    } else {
        document.forms['testform'].tmp.value = parseInt(document.forms['testform'].tmp.value) + parseInt(document.forms['testform'].res.value);
        document.forms['testform'].res.value = '';
        console.log(document.forms['testform'].tmp.value);
    }
}

function operation2() {
    document.forms['testform'].tmp.value = document.forms['testform'].res.value;
    document.forms['testform'].op.value = document.forms['testform'].btn_minus.value;
    document.forms['testform'].res.value = "";
}

function operation3() {
    document.forms['testform'].tmp.value = document.forms['testform'].res.value;
    document.forms['testform'].op.value = document.forms['testform'].btn_mult.value;
    document.forms['testform'].res.value = "";
}
function operation4() {
    document.forms['testform'].tmp.value = document.forms['testform'].res.value;
    document.forms['testform'].op.value = document.forms['testform'].btn_div.value;
    document.forms['testform'].res.value = "";
}

function getResult(a, b, o) {
    document.forms['testform'].flag.value = false;
    console.log(document.forms['testform'].flag.value);
    // var a = document.forms['testform'].tmp.value;
    // var b = document.forms['testform'].res.value;
    // var o = document.forms['testform'].op.value;
    if (o == "+") {
        return sum(a, b);
    } else if (o == "-") {
        return sub(a, b);
    } else if (o == "*") {
        return mult(a, b);
    } else if (o == "/") {
        return div(a, b);
    } else {
        return 0;
    }
}

function myFunc() {
    var tmp = document.forms['testform'].flag.value;

    if (tmp === false) {
        console.log(tmp);
    } else {
        tmp = false;
        console.log(tmp);
    }
    document.forms['testform'].flag.value = tmp;
}
var generate = document.getElementById('gen');
var submit = document.getElementById('btn');
var unqId = document.getElementById('id');
var result = document.getElementById('result');
var user = document.getElementById("user");

var letId = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var rNum = letId[Math.floor(Math.random() * letId.length)];
const unQ = "RA" + Math.floor(Math.random() * 100000) + rNum;

generate.onclick = () => {
    result.innerHTML = unQ;
}
submit.onclick = () => {
    let txt = /RA[0-9A-Z]/;
    let txt2 = txt.exec(unqId.value);
    let txt3 = unqId.value.slice(- 1)
    if (txt2 && unqId.value.length <= 10 && unqId.value.length > 3 && isNaN(txt3)) {
        user.innerHTML = "Valid ID";
        user.style.color = "green";

    }
    else if (unqId.value === "") {
        user.innerHTML = "Fill in the textBox with a Unique ID"
        user.style.color = "red";
    }

    else {
        user.innerHTML = "Invalid ID";
        user.style.color = "red";
    }

}
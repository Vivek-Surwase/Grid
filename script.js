
var container = document.getElementById("grid-container")
var output = document.getElementById("output-screen");
var item1 = document.getElementById("i1");
var item2 = document.getElementById("i2");
var item3 = document.getElementById("i3");
var item4 = document.getElementById("i4");
var item5 = document.getElementById("i5");
var item6 = document.getElementById("i6");
var item7 = document.getElementById("i7");
var item8 = document.getElementById("i8");
var item9 = document.getElementById("i9");
var check;

function display() {
    item1.addEventListener("mouseover", function () {
        var result = item1.innerText;
        output.innerText = result;
    });

    item2.addEventListener("mouseover", function () {
        var result = item2.innerText;
        output.innerText = result;
    });

    item3.addEventListener("mouseover", function () {
        var result = item3.innerText;
        output.innerText = result;
    });

    item4.addEventListener("mouseover", function () {
        var result = item4.innerText;
        output.innerText = result;
    });

    item5.addEventListener("mouseover", function () {
        var result = item5.innerText;
        output.innerText = result;
    });

    item6.addEventListener("mouseover", function () {
        var result = item6.innerText;
        output.innerText = result;
    });

    item7.addEventListener("mouseover", function () {
        var result = item7.innerText;
        output.innerText = result;
    });

    item8.addEventListener("mouseover", function () {
        var result = item8.innerText;
        output.innerText = result;
    });

    item9.addEventListener("mouseover", function () {
        var result = item9.innerText;
        output.innerText = result;
    });

    container.addEventListener("mouseout",function () {
        output.innerText = "N";
    });
}
display();




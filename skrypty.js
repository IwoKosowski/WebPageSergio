var fun = setInterval(clock, 1000);


var divs = document.querySelectorAll('.images img'),
    i;

for (i = 0; i < divs.length; ++i) {
    divs[i].addEventListener("click", function () {
        document.querySelector('.ima').style.backgroundImage = "url(" + this.src + ")";
        document.querySelector('.ima').style.display = "block";
        document.querySelector('.ima').style.opacity = "1";
        document.querySelector('.wrap').style.opacity = "0";
        document.querySelector('.wrap').style.display = "none";
    });
}
/*
document.querySelector('.images img').addEventListener("click", function () {
    document.querySelector('.ima').style.backgroundImage = "url(" + this.src + ")";
    document.querySelector('.ima').style.display = "block";
    document.querySelector('.ima').style.opacity = "1";
    document.querySelector('.wrap').style.opacity = "0";
    document.querySelector('.wrap').style.display = "none";
});

*/
document.querySelector('.ima i').addEventListener("click", function () {
    document.querySelector('.ima').style.backgroundImage = "";
    document.querySelector('.ima').style.display = "none";
    document.querySelector('.ima').style.opacity = "0";
    document.querySelector('.wrap').style.opacity = "1";
    document.querySelector('.wrap').style.display = "block";
});


function clock() {
    var d = new Date();
    var hours = document.querySelector('.hours');
    var minutes = document.querySelector('.minutes');
    var seconds = document.querySelector(".seconds");

    var currenthours = d.getHours();
    var currentminutes = d.getMinutes();
    var currentsec = d.getSeconds();

    if (currenthours < 10) {
        hours.innerHTML = "0" + currenthours + ":"

    } else {
        hours.innerHTML = currenthours + ":";
    }

    if (currentminutes < 10) {
        minutes.innerHTML = "0" + currentminutes + ":";
    } else {
        minutes.innerHTML = currentminutes + ":";
    }

    if (currentsec < 10) {
        seconds.innerHTML = "0" + currentsec;
    } else {
        seconds.innerHTML = currentsec;
    }
}
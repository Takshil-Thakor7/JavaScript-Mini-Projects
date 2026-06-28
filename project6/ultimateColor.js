// my own method

/*let i = 0;
const changeBg = function () {
    const doc = document.querySelector('body');
    const colors = ["black", "green", "yellow", "red", "purple", "greenyellow", "pink", "navyblue"];
    doc.style.backgroundColor = colors[i];
    i = (i + 1) % colors.length;
}

let intervalId;
const startBtn = document.querySelector('#start').addEventListener('click', function () {
    intervalId = setInterval(changeBg, 10);
})

const stopBtn = document.querySelector('#stop').addEventListener('click', function () {
    clearInterval(intervalId);
    alert("STOPPED PROCESS...");
}) */

//genrate a random colors
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let intervalId;
const startColorChange = function () {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }
    
    function changeBgColor () {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopColorChange = function () {
    clearInterval(intervalId);
    intervalId = null;
    alert("Process stopped");
};

document.querySelector('#start').addEventListener('click', startColorChange)

document.querySelector('#stop').addEventListener('click', stopColorChange)
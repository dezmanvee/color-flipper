const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const bgText = document.querySelector('.color');
const bgColor = document.body;


btn.addEventListener('click', function() {

    bgColor.style.backgroundColor = randomColor()
    bgText.innerText = randomColor()
})

function randomColor() {

    let rand = Math.floor(Math.random() * colors.length);
    let bgRandomColor = colors[rand]

    return bgRandomColor
}
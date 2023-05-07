
//variables
const btn = document.getElementById('btn');
const bgText = document.querySelector('.color');
const bgColor = document.body;


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



function bgColorFunc() {

    bgText.innerText = hexColorMaker();
    //bgText.style.color = hexColorMaker();
    bgColor.style.backgroundColor = hexColorMaker()

}

function hexColorMaker() {

    let hexColor = [];
    
    for (let i = 0; i < 6; i++) {

        let rand = Math.floor(Math.random() * hex.length)
        hexColor.push(hex[rand].toString())
        
    }
    
    hexColor = "#" + hexColor.join('');
    return hexColor
}
hexColorMaker()
btn.addEventListener('click', bgColorFunc)


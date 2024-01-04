// Sidebar
document.getElementById('openNav').addEventListener("click",()=>{
    document.getElementById("menu").style.width = "200px";
});

document.getElementById('closebtn').addEventListener("click",()=>{
    document.getElementById("menu").style.width = "0px";
});

//  Animation Effect
let index = 0;
let speed = 50;
let typing = true; // Flag to track whether typing or erasing
let currentTextIndex = 0;
let texts = [
    "IT graduate specializing in designing and building websites.",
    "Graphic Designer and Illustrator"
];

function typeEffect() {
    let currentText = texts[currentTextIndex];
    if (index < currentText.length && typing) {
        document.getElementById("effect").innerHTML += currentText.charAt(index);
        index++;
    } else {
        typing = false; // Set the flag to indicate erasing
        document.getElementById("effect").innerHTML = currentText.substring(0, index);
        index--;
        if (index < 0) {
            typing = true; // Set the flag to indicate typing
            index = 0;

            // Switch to the next text in the array
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, speed);
}





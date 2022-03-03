const DEFAULT_MODE = 'blackBtn'
const DEFAULT_COLOR = 'black'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentSize = DEFAULT_SIZE
let currentMode = DEFAULT_MODE

// Generates the initial grid when page loads.
window.onload = () => {
    generateGrid(currentSize)   
  }

// Only colors the grid when mouse is held down
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// Generates grid with given dimensions decided by the slider on the web page. Default color mode is black

function generateGrid (givenSize) {
    const gridContainer = document.querySelector(".gridBox");

    gridContainer.style.gridTemplateColumns = `repeat(${givenSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${givenSize}, 1fr)`;

    for (let i = 1; i <= givenSize * givenSize; i++) {
        let div = document.createElement("div");
        div.classList.add("box")
        gridContainer.appendChild(div);
    }
    document.querySelector(".gridSize").textContent = `${givenSize} x ${givenSize}`;

    let gridBoxList = document.querySelectorAll(".box");
    gridBoxList.forEach(gridBox => {
        gridBox.addEventListener("mousedown", changeColor)
        gridBox.addEventListener("mouseover", changeColor)

    });
    fillBtnCol(currentMode)
}

// Chooses the appropriate color to make the boxes within the grid

function changeColor(event){
    if (event.type === 'mouseover' && !mouseDown) return
    if (currentColor === 'black' || currentColor === 'grey' ){
        event.target.style.backgroundColor = currentColor;
    }
    else if (currentColor === 'rainbow') {
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);

        event.target.style.backgroundColor = `rgb(${r},${g},${b})`
    }

    else if (currentColor === 'aliceblue') {
        event.target.style.backgroundColor = currentColor
    }
    
}

// Clears the grid of all colors back to white.

function clearGrid(){
    let gridBoxList = document.querySelectorAll(".box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
}

// Resets the grid completely back to given size
function resetGrid(size) {
    let grid = document.querySelector(".gridBox")

    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    generateGrid(size)
}

function clearBtnCol(btnColor) {

    document.getElementById(`${currentMode}`).style.backgroundColor = 'black'
}

function fillBtnCol (btnColor) {

    document.getElementById(`${currentMode}`).style.backgroundColor = 'grey'

}

// Adjusts the size of the grid given the slider numbers. Also updates the slider numbers.
let gridSizeNum = document.querySelector("#gridSizeSlider")

gridSizeNum.oninput = function(){
    currentSize = this.value
    clearGrid()
    resetGrid(currentSize)
}



// Clear Button click action * scales up on hover and down after

clearBtn.onclick = function () {
    clearGrid()
}

clearBtn.addEventListener("mouseover", function (){
    document.getElementById("clearBtn").style.transform = "scale(1.2)";  
})

clearBtn.addEventListener("mouseout",function() {
    document.getElementById("clearBtn").style.transform = "scale(1)";
})


// Eraser Button

eraserBtn.onclick = function () {
    clearBtnCol(currentColor)
    currentColor = 'aliceblue'
    currentMode = 'eraserBtn'
    fillBtnCol(currentColor)
}

eraserBtn.addEventListener("mouseover", function (){
    document.getElementById("eraserBtn").style.transform = "scale(1.2)";  
})

eraserBtn.addEventListener("mouseout",function() {
    document.getElementById("eraserBtn").style.transform = "scale(1)";
})


// Rainbow button click action & scales up on hover and down after

rainbowBtn.onclick = function() {
    clearBtnCol(currentMode)
    currentColor = "rainbow"
    currentMode = "rainbowBtn"
    fillBtnCol(currentMode)
}

rainbowBtn.addEventListener("mouseover", function (){
    document.getElementById("rainbowBtn").style.transform = "scale(1.2)";  
})

rainbowBtn.addEventListener("mouseout",function() {
    document.getElementById("rainbowBtn").style.transform = "scale(1)";
})

// Grey Button click action & scales up on hover and down after

greyBtn.onclick = function() {
    clearBtnCol(currentMode)
    currentColor = "grey"
    currentMode = "greyBtn"
    fillBtnCol(currentMode)
}

greyBtn.addEventListener("mouseover", function (){
    document.getElementById("greyBtn").style.transform = "scale(1.2)";  
})

greyBtn.addEventListener("mouseout",function() {
    document.getElementById("greyBtn").style.transform = "scale(1)";
})


// Black Button click action & scales up on hover and down after

blackBtn.onclick = function() {
        clearBtnCol(currentMode)
        currentColor = "black"
        currentMode = "blackBtn"
        fillBtnCol(currentMode)  
}

blackBtn.addEventListener("mouseover", function (){
    document.getElementById("blackBtn").style.transform = "scale(1.2)";  
})

blackBtn.addEventListener("mouseout",function() {
    document.getElementById("blackBtn").style.transform = "scale(1)";
})

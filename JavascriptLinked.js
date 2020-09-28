
//Querying the selected html elements 
const bigContainer = document.querySelector('#BigContainer');
const clear = document.querySelector('#Clear');
const grid = document.querySelector('#Grid');

//Adding the drawing pad 
bigContainer.style.border = "solid";
bigContainer.style.height = "850px";
bigContainer.style.width = "850px";
bigContainer.style.display = "grid";
bigContainer.style.gridTemplateColumns = "20% 20% 20%";

//Adding eventhandlers for the "Clear" and "Change grid" buttons 
clear.addEventListener("click", ClearFunction); //check here 
grid.addEventListener("click", ChangeGrid);

//Function that loads the grids 
function LoadDivs(input) {

    const container = [];

    for (var i = 0; i < input; i++) {

        container[i] = document.createElement('div');
        container[i].classList.add('content');
        container[i].addEventListener('mouseover', function (e) {
            e.target.style.background = RandomColor();

        });

        bigContainer.appendChild(container[i]);

    }

}

//Function that loads a random color
function RandomColor() { 

    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    let colorPick = "rgb(" + a + ", " + b + ", " + c + ")"; 

    return colorPick; 

}

//Function that clears all the grids 
function ClearFunction() {

    subDivs = document.getElementsByClassName('content');

    for (var i = 0; i < subDivs.length; i++) {
        subDivs[i].style.backgroundColor = "white";
    } 

}

//Function that changes the amount of grid elements 
function ChangeGrid() {

    let userGrid = prompt("Choose a desired grid");
    let pixels = 100 / userGrid;
    let columns = pixels + "% ";

    for (var i = 0; i < userGrid - 1; i++) {

        columns += pixels + "% ";

    }

    bigContainer.style.gridTemplateColumns = columns;
    bigContainer.querySelectorAll('*').forEach(n => n.remove());

    for (var i = 0; i < userGrid; i++) {

        LoadDivs(userGrid);

    }

    ClearFunction();

} 
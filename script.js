const MAX = 100;
const MIN = 1;
const SIZE = 100;
const DELAY = 100;
const SPEED = 100;
const PRIMARYCOLOR = "#3498db";
const ROWCOLOR = "#ff4500";
const COLUMNCOLOR = "#00ff00";

function generateRandomArray(size, min, max) {
    return Array.from({ length: size }, () =>
        Math.floor(Math.random() * (max - min + 1) + min)
    );
}

function visualizeArray(array) {
    const arrayContainer = document.getElementById("array-container");

    arrayContainer.innerHTML = "";

    array.forEach((value) => {
        const element = document.createElement("div");
        element.classList.add("array-element");
        element.style.height = `${value * 5}px`;
        arrayContainer.appendChild(element);
    });
}

function getNewArray() {
    const arrayToSort = generateRandomArray(SIZE, MIN, MAX);
    visualizeArray(arrayToSort);
}

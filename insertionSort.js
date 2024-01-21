async function insertionSort() {
    const arrayContainer = document.getElementById("array-container");
    const arrayElements =
        arrayContainer.getElementsByClassName("array-element");

    const n = arrayElements.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arrayElements[i].style.height;
        let j = i - 1;

        arrayElements[i].style.backgroundColor = ROWCOLOR;

        while (
            j >= 0 &&
            parseInt(arrayElements[j].style.height) > parseInt(currentElement)
        ) {
            // Move the elements to the right
            arrayElements[j + 1].style.height = arrayElements[j].style.height;
            arrayElements[j + 1].style.backgroundColor = COLUMNCOLOR;

            await new Promise((resolve) =>
                setTimeout(resolve, parseInt(DELAY / SPEED))
            );

            arrayElements[j + 1].style.backgroundColor = PRIMARYCOLOR;

            j--;
        }

        arrayElements[j + 1].style.height = currentElement;
        arrayElements[i].style.backgroundColor = PRIMARYCOLOR;
    }
}

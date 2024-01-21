async function selectionSort() {
    const arrayContainer = document.getElementById("array-container");
    const arrayElements =
        arrayContainer.getElementsByClassName("array-element");

    const n = arrayElements.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        arrayElements[i].style.backgroundColor = ROWCOLOR;

        for (let j = i + 1; j < n; j++) {
            arrayElements[j].style.backgroundColor = COLUMNCOLOR;
            await new Promise((resolve) =>
                setTimeout(resolve, parseInt(DELAY / SPEED))
            );

            arrayElements[j].style.backgroundColor = PRIMARYCOLOR;

            if (
                parseInt(arrayElements[j].style.height) <
                parseInt(arrayElements[minIndex].style.height)
            ) {
                minIndex = j;
            }
        }

        const tempHeight = arrayElements[i].style.height;
        arrayElements[i].style.height = arrayElements[minIndex].style.height;
        arrayElements[minIndex].style.height = tempHeight;

        arrayElements[i].style.backgroundColor = PRIMARYCOLOR;
        arrayElements[minIndex].style.backgroundColor = PRIMARYCOLOR;
    }
}

async function bubbleSort() {
    const arrayContainer = document.getElementById("array-container");
    const arrayElements =
        arrayContainer.getElementsByClassName("array-element");

    const n = arrayElements.length;
    let swapped = true;
    while (swapped) {
        swapped = false;

        for (let i = 1; i < n; i++) {
            arrayElements[i].style.backgroundColor = ROWCOLOR;
            arrayElements[i - 1].style.backgroundColor = COLUMNCOLOR;

            await new Promise((resolve) =>
                setTimeout(resolve, parseInt(DELAY / SPEED))
            );

            arrayElements[i - 1].style.backgroundColor = PRIMARYCOLOR;

            if (
                parseInt(arrayElements[i].style.height) <
                parseInt(arrayElements[i - 1].style.height)
            ) {
                let tempHeight = arrayElements[i].style.height;
                arrayElements[i].style.height =
                    arrayElements[i - 1].style.height;
                arrayElements[i - 1].style.height = tempHeight;
                swapped = true;
            }

            arrayElements[i].style.backgroundColor = PRIMARYCOLOR;
            arrayElements[i - 1].style.backgroundColor = PRIMARYCOLOR;
        }
    }
}

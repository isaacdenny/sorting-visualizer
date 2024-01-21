async function mergeSort() {
    const arrayContainer = document.getElementById("array-container");
    const arrayElements =
        arrayContainer.getElementsByClassName("array-element");

    async function merge(low, mid, high) {
        const leftSize = mid - low + 1;
        const rightSize = high - mid;

        const leftArray = [];
        const rightArray = [];

        // Copy data to temporary arrays
        for (let i = 0; i < leftSize; i++) {
            leftArray[i] = arrayElements[low + i].style.height;
            arrayElements[low + i].style.backgroundColor = ROWCOLOR;
        }

        for (let j = 0; j < rightSize; j++) {
            rightArray[j] = arrayElements[mid + 1 + j].style.height;
            arrayElements[mid + 1 + j].style.backgroundColor = COLUMNCOLOR;
        }

        await new Promise((resolve) => setTimeout(resolve, 100));

        let i = 0;
        let j = 0;
        let k = low;

        while (i < leftSize && j < rightSize) {
            if (parseInt(leftArray[i]) <= parseInt(rightArray[j])) {
                arrayElements[k].style.height = leftArray[i];
                i++;
            } else {
                arrayElements[k].style.height = rightArray[j];
                j++;
            }

            arrayElements[k].style.backgroundColor = PRIMARYCOLOR;
            k++;
        }

        while (i < leftSize) {
            arrayElements[k].style.height = leftArray[i];
            arrayElements[k].style.backgroundColor = PRIMARYCOLOR;
            i++;
            k++;
        }

        while (j < rightSize) {
            arrayElements[k].style.height = rightArray[j];
            arrayElements[k].style.backgroundColor = PRIMARYCOLOR;
            j++;
            k++;
        }
    }

    async function mergeSortHelper(low, high) {
        if (low < high) {
            const mid = Math.floor((low + high) / 2);

            await mergeSortHelper(low, mid);
            await mergeSortHelper(mid + 1, high);

            await merge(low, mid, high);
        }
    }

    const n = arrayElements.length;
    await mergeSortHelper(0, n - 1);

    // Highlight the entire sorted array
    for (let i = 0; i < n; i++) {
        arrayElements[i].style.backgroundColor = "#3498db";
        await new Promise((resolve) => setTimeout(resolve, DELAY / SPEED));
    }
}

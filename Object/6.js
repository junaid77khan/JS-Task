class Sorter {
    constructor(arr) {
        this.arr = arr;
        this.length = arr.length;
    }

    bubbleSort() {
        let swapped;

        do{
            swapped = false;
            for(let i = 0; i < this.length-1; i++) {
                if(this.arr[i] > this.arr[i+1]) {
                    swapped = true;
                    this.#swap(this.arr, i, i+1);
                }
            }
        } while(swapped);
    }

    #swap(newArr, i, j) {
        let temp = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
    }
}

let sorter = new Sorter([4,3,2,1]);
sorter.bubbleSort();
console.log(sorter.arr);
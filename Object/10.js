class ArrayObjectSorting {
    constructor(ArrObj) {
        this.ArrObj = ArrObj
    }

    sortByProper(property, order = 'asc') {
        if(typeof property !== 'string') {
            throw new TypeError('Invalid Property');
        }

        if(this.ArrObj.length === 0) {
            throw new Error('Array is empty, cannot sort');
        }

        if(property in this.ArrObj[0]) {
            this.ArrObj.sort((a,b) => {
                const propA = a[property];
                const propB = b[property];

                if(typeof propA === 'number' && typeof propB === 'number') {
                    return order === 'asc' ? propA - propB : propB - propA;
                }

                if(typeof propA === 'string' && typeof propB === 'string') {
                    const res = propA.localeCompare(propB);
                    return order === 'asc' ? res : -res;
                }

                throw new Error('Property type mismatch.')
            })
        } else {
            throw new Error('Property does not exists');
        }
    }
}

var library = [  
{ 
title:  'The Road Ahead', 
author: 'Bill Gates', 
libraryID: 1254 
}, 
{ 
title: 'Walter Isaacson', 
author: 'Steve Jobs', 
libraryID: 4264 
}, 
{ 
title: 'Mockingjay: The Final Book of The Hunger Games', 
author: 'Suzanne Collins', 
       libraryID: 3245 
   }];

var arrayObjectSorting = new ArrayObjectSorting(library);
arrayObjectSorting.sortByProper('libraryID')
console.log(arrayObjectSorting.ArrObj);

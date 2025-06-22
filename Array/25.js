var library = [  
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
];

library.sort((a, b) => {
    // For string comparision - we are comparing lexicographical or alphabatical.
    if(a.title < b.title) {
        return -1;
    } else if(a.title > b.title) {
        return 1;
    } else {
        return 0;
    }
});
console.log(library);
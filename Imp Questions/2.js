const arrofObj=[
    {title:"The Hobbit",author:"J.R.R. Tolkien",alreadyRead:false},
    {title:"harry Potter and the Philosopher's Stone",author:"J.K. Rowling",alreadyRead:true},
]


for(let book of arrofObj){
    const {title, author, alreadyRead} = book;
    if(alreadyRead){
        console.log(`You already read ${title} by ${author}`);
    }else{
        console.log(`You still need to read ${title} by ${author}`);
    }
}
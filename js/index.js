var bookName = document.getElementById('bookName');
var bookDes = document.getElementById('bookDes');
var bookList=[];

function addBook(){
    let bookData = {
        code : bookName.value,
        desc : bookDes.value,
        image : "../imgs/ladyMidnight.jpg"
    };
    bookList.push(bookData)
    console.log(bookData);
    console.log(bookList );
    
    
}
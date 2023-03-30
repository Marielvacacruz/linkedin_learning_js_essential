class Book{
    constructor(
        title,
        author,
        yearPublished,
        readStatus
    ){
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.readStatus = readStatus;
    }
    changeStatus(status){
        this.readStatus = status;
    }
}

export default Book;

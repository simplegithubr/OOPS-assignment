"use strict";
class BOOK {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    bookdetail() {
        console.log(this);
        console.log(`the title is ${this.title} and author is ${this.author}`);
        BOOK.instanceCount += 1;
    }
    printinstanceCount() {
        return BOOK.instanceCount;
    }
}
BOOK.instanceCount = 0; // ststick class variable to track instance
class EBook extends BOOK {
    constructor(filesize, title, author) {
        super(title, author);
        this.filesize = filesize;
    }
    displyDetaile() {
        console.log(`this title is ${this.title} author is ${this.author} 
            nd filesize is ${this.filesize}`);
    }
}
const book1 = new BOOK("cricket", "Davise");
const book2 = new BOOK("Athletics", "smith");
const Ebook2 = new EBook(2.6, "physics", "chan");
// book2.bookdetail()
// book2.bookdetail()
console.log(Ebook2);
book1.bookdetail();
Ebook2.displyDetaile();
console.log(BOOK.instanceCount);

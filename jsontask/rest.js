const book = { title: "Flowers", pages: 121, author: 'Slexander Duma' }; //?

console.log(book.title)

const {title,...rest } = book

console.log(title)

console.log(rest)

const newBook = {...book, author: 'Talkien'}

const altBook = JSON.parse(JSON.stringify(book))

console.log(newBook)


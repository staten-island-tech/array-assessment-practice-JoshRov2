const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];


//Array of authors and the book they wrote
const bookwriters = books.map((books) => ({
  authorFirst: books.authorFirst,
  authorLast: books.authorLast,
  name: books.name,
}));
console.log(bookwriters);

const bookgenres = books.map((books) => ({
  name: books.name,
  genre: books.genre
}));
console.log(bookgenres)
//"--- wrote --- in ---"
books.forEach((books) => console.log(books.authorFirst + " " + books.authorLast + " wrote " + books.name + " in " + books.publishDate)); 
//Sort books from oldest to most recent 
const bookyears = books.sort(function(book1, book2){
  return book2.publishDate - book1.publishDate
});
console.log(bookyears);


//sort books alphabetically
const sortedbooks = books.map((books) => ({
  name: books.name,
}));
const booktitles = sortedbooks.sort(function(book1, book2){
  return book1.name.localeCompare(book2.name)
});
console.log(sortedbooks);
//Find who wrote War and Peace
const wp = books.filter((book) => book.name === "War and Peace");
const wpauthor = wp.map((wp) => ({
  authorFirst: wp.authorFirst,
  authorLast: wp.authorLast,
}));
console.log(wpauthor)
//how many books were written before 1900?
const bf1900 = books.filter((book) => book.publishDate < 1900);
const countbooks = bf1900.length;
console.log(countbooks + " books were written before 1900.");
//was there at least one book published within the last 100 years?
const last100 = books.filter((book) => book.publishDate >= 1923);
const checkbooks = last100.length;
console.log(checkbooks + " books were written in the last 100 years.")
//was every book published within the last 100 years?
const pre100 = books.filter((book) => book.publishDate < 1923);
const datecheck = pre100.length;
function bookcompare(datecheck){
  if (datecheck = 10) {
    console.log('Yes, every book was published in the last 100 years.');
  } else {
    console.log('No.');
  } 
  return(bookcompare);
}
//print a list of books that "includes" the genre historical
const historicals = books.filter((book) => book.genre = "historical");
console.log(historicals);
historicals.forEach((book) => console.log(book.name));
const authornames = books.map((books) => ({
  authorLast: books.authorLast,
}));
const sortedauthors = authornames.sort(function(book1, book2){
  return book1.authorLast.localeCompare(book2.authorLast);
});
console.log(sortedauthors);

const reviewedbooks = books.map((books) => ({
  name: books.name,
  authorFirst: books.authorFirst,
  authorLast: books.authorLast,
  publishDate: books.publishDate,
  genre: books.genre,
}));
reviewedbooks.pop;
console.log(reviewedbooks);

const arraywithmark = books.map((books) => ({
 name: books.name + "?"
}));
console.log(arraywithmark);

const newArr = books.concat(arraywithmark);
console.log(newArr);

const books1950 = books.filter((book) => book.publishDate > 1950);
console.log(books1950);

const publishDates = books.map((books) => ({
  publishDate: books.publishDate
}));

const sorteddates = publishDates.sort(function(book1, book2){
  return book1.publishDate - book2.publishDate
});
console.log (sorteddates);



books.filter(book => book.name.startsWith("T"))
  .forEach(book => {
    console.log(book.name);
  });

const before1940 = books.filter((book) => book.publishDate < 1940)
console.log(before1940)
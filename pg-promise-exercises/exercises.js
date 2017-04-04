const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/pg-promise-exercises';
const db = pgp(connectionString);

const allBooks = db.any('select * from books')
  allbooks.then(books => {
    assert.deepEqual(books.length, 15)
    assert.deepEqual(book[0].title, 'The Shining')
    assert.deepEqual(book[1].title, 'Dune')
  }).catch(error => {
    console.log('Dang, my assertion failed.', error);
  });

let firstTenBooks = db.any('select * from books limit 10')
  firstTenBooks.then(books => {
    assert.deepEqual(books.length, 10)
    assert.deepEqual(books[3].subject_id, 2)
    assert.deepEqual(books[4].author_id, 1809)
  }).catch(error => {
    console.log('Whoops, my function doesnt behave as expected.', error);
  });

let findAuthorsOrderedByLastName = db.any('select * from authors order by last_name')
  findAuthorsOrderedByLastName.then(authors => {
    assert.deepEqual(authors.length, 21)
    assert.deepEqual(authors[0].last_name, 'Alcott')
    assert.deepEqual(authors[18].last_name, 'Poe')
  }).catch(error => {
    console.log('Whoops, my function doesnt behave as expected.', error);
  });

let findBookAuthors = db.any(
  'select first_name, last_name, title from authors join books on books.author_id = authors.id'
  )
  findBookAuthros.then(authors => {
    assert.deepEqual(books.length, 17)
    assert.deepEqual(authors[0].first_name, 'John')
    assert.deepEqual(authors[12].last_name, 'Christiansen')
  }).catch(error => {
    console.log('The data is just...like...in space...or something', error);
  });

let authorIdWithTwoBooks = db.any(
  'select author_id from books group by author_id having count(author_id) >= 2'
  )
  authroIdWithTwoBooks.then(books => {
    assert.deepEqual(books.length, 2)
    assert.deepEqual(books[0].author_id, 1809)
    assert.deepEqual(books[1].author_id, 7805)
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

let bookTitlesWithMultipleEditions = db.any (
  'select title from editions join books on editions.book_id = books.id group by title having count(title) >= 2'
)
  bookTitlesWithMultipleEditions.then(editions => {
    assert.deepEqual(editions.length, 5)
    assert.deepEqual(editions[0].title, 'The Shining')
    assert.deepEqual(editions[4].title, 'The Tell-Tale Heart')
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

/* --------End of Exercise 6---------------- */




/* -----------------------------------------
   Exercise 7
   -----------------------------------------

   Implement the function `findStockedBooks` which returns the `title` & the
   author's `first_name` & `last_name` of all books which are stocked as
   represented in the `daily_inventory` table.

   @function: `findStockedBooks`
   @input params: None
   @output: [{first_name, last_name, title}]

   In this exercise you will ALSO have to write the assertions. For inspiration,
   look at the assertions in Exercises 1 - 3.

   Expected Result:
   [ {first_name: 'Frank',  title: 'Dune', last_name: 'Herbert'},
     {title: 'The Cat in the Hat', first_name: 'Theodor Seuss', last_name: 'Geisel'}]

*/
let findStockedBooks; // IMPLEMENT THIS FUNCTION

/* --------End of Exercise 7---------------- */




console.log('Reached the end!');
pg.end();

const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/pg-promise-exercises';
const db = pgp(connectionString);

const allBooks = db.any('select * from books')
  allbooks.then(books => {
  assert.deepEqual(books.length, 15)
  }).catch(error => {
    console.log('Dang, my assertion failed.', error);
});

let firstTenBooks = db.any('select * from books limit 10')
  firstTenBooks.then(books => {
    assert.deepEqual(books.length, 10)
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
    assert.deepEqual(first_name[0], 'John')
    assert.deepEqual(last_name[12], 'Christiansen')
    }).catch(error => {
      console.log('Something happened, the data is just...like...in space or something', error);
});

/* -----------------------------------------
   Exercise 5
   -----------------------------------------

   Implement the function `authorIdWithTwoBooks` which returns the
   `author_id` of authors who have 2 books. (HINT: you have to use a SUBQUERY)

   @function: `authorIdWithTwoBooks`
   @input params: None
   @output: [{first_name, last_name, title}]

   In this exercise you will ALSO have to write the assertions. For inspiration,
   look at the assertions in Exercises 1 - 3.

   Expected Result:
     [{author_id: 1809},
      {author_id: 7805}]


*/
let authorIdWithTwoBooks; // IMPLEMENT THIS FUNCTION

/* --------End of Exercise 5---------------- */





/* -----------------------------------------
   Exercise 6
   -----------------------------------------

   Implement the function `bookTitlesWithMultipleEditions` which returns the
   `title` of books which have more than 2 editions. (HINT: you have to use a join)

   @function: `bookTitlesWithMultipleEditions`
   @input params: None
   @output: [{title}]

   In this exercise you will ALSO have to write the assertions. For inspiration,
   look at the assertions in Exercises 1 - 3.

   Expected Result:
     [{title: 'The Shining'},
      {title: 'The Cat in the Hat'},
      {title: 'Dune'}
      {title: '2001: A Space Odyssey'}
      {title: 'The Tell-Tale Heart'}]

*/
let bookTitlesWithMultipleEditions; // IMPLEMENT THIS FUNCTION

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

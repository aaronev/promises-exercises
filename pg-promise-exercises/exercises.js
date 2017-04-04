const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/pg-promise-exercises';
const db = pgp(connectionString);

const allBooks = db.any('SELECT * FROM books')
  allbooks.then(books => {
    assert.deepEqual(books.length, 15)
    assert.deepEqual(book[0].title, 'The Shining')
    assert.deepEqual(book[1].title, 'Dune')
  }).catch(error => {
    console.log('Dang, my assertion failed.', error );
  });

let firstTenBooks = db.any('SELECT * FROM books LIMIT 10')
  firstTenBooks.then(books => {
    assert.deepEqual(books.length, 10)
    assert.deepEqual(books[3].subject_id, 2)
    assert.deepEqual(books[4].author_id, 1809)
  }).catch(error => {
    console.log('Whoops, my function doesnt behave as expected.', error);
  });

let findAuthorsOrderedByLastName = db.any('SELECT * FROM authors ORDER BY last_name')
  findAuthorsOrderedByLastName.then(authors => {
    assert.deepEqual(authors.length, 21)
    assert.deepEqual(authors[0].last_name, 'Alcott')
    assert.deepEqual(authors[18].last_name, 'Poe')
  }).catch(error => {
    console.log('Whoops, my function doesnt behave as expected.', error);
  });

let findBookAuthors = db.any(
  'SELECT first_name, last_name, title FROM authors JOIN books ON books.author_id = authors.id'
  )
  findBookAuthros.then(authors => {
    assert.deepEqual(books.length, 17)
    assert.deepEqual(authors[0].first_name, 'John')
    assert.deepEqual(authors[12].last_name, 'Christiansen')
  }).catch(error => {
    console.log('The data is just...like...in space...or something', error);
  });

let authorIdWithTwoBooks = db.any(
  'SELECT author_id FROM books GROUP BY author_id HAVING COUNT(author_id) >= 2'
  )
  authroIdWithTwoBooks.then(books => {
    assert.deepEqual(books.length, 2)
    assert.deepEqual(books[0].author_id, 1809)
    assert.deepEqual(books[1].author_id, 7805)
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

let bookTitlesWithMultipleEditions = db.any(
  'SELECT title FROM editions JOIN books ON editions.book_id = books.id GROUP BY title HAVING COUNT(title) >= 2'
  )
  bookTitlesWithMultipleEditions.then(editions => {
    assert.deepEqual(editions.length, 5)
    assert.deepEqual(editions[0].title, 'The Shining')
    assert.deepEqual(editions[4].title, 'The Tell-Tale Heart')
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

let findStockedBooks = db.any(
  "SELECT distinct first_name, last_name, title \
  FROM daily_inventory \
  JOIN editions ON daily_inventory.isbn = editions.isbn \
  JOIN books ON editions.book_id = books.id \
  JOIN authors ON books.author_id = authors.id \
  WHERE daily_inventory.is_stocked = 't'"
  )
  findStockedBooks.then(daily_inventory => {
    assert.deepEqual(daily_inventory.length, 2)
    assert.deepEqual(daily_invetory[0].title, 'Dune')
    assert.deepEqual(daily_inventory[1].last_name, 'Geisel')
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

console.log('Reached the end!');
pg.end();

const assert = require('chai').assert
const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/pg-promise-exercises';
const db = pgp(connectionString);

const allBooks = db.any('SELECT * FROM books')
  .then(books => {
    assert.equal(books.length, 15)
    assert.equal(books[0].title, 'The Shining')
    assert.equal(books[1].title, 'Dune')
  }).catch(error => {
    console.log('Dang, my assertion failed.', error );
  });

let firstTenBooks = db.any('SELECT * FROM books LIMIT 10')
  .then(books => {
    assert.equal(books.length, 10)
    assert.equal(books[3].subject_id, 2)
    assert.equal(books[4].author_id, 1809)
  }).catch(error => {
    console.log('Whoops, my function doesnt behave as expected.', error);
  });

let findAuthorsOrderedByLastName = db.any('SELECT * FROM authors ORDER BY last_name')
  .then(authors => {
    assert.equal(authors.length, 21)
    assert.equal(authors[0].last_name, 'Alcott')
    assert.equal(authors[18].last_name, 'Simon')
  }).catch(error => {
    console.log('Whoops, my function doesnt behave as expected.', error);
  });

let findBookAuthors = db.any(
  'SELECT first_name, last_name, title FROM authors JOIN books ON books.author_id = authors.id'
  )
  .then(authors => {
    assert.equal(authors.length, 17)
    assert.equal(authors[0].first_name, 'John')
    assert.equal(authors[12].last_name, 'Clarke')
  }).catch(error => {
    console.log('The data is just...like...in space...or something', error);
  });

let authorIdWithTwoBooks = db.any(
  'SELECT author_id FROM books GROUP BY author_id HAVING COUNT(author_id) >= 2'
  )
  .then(books => {
    assert.equal(books.length, 2)
    assert.equal(books[0].author_id, 1809)
    assert.equal(books[1].author_id, 7805)
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

let bookTitlesWithMultipleEditions = db.any(
  'SELECT title FROM editions JOIN books ON editions.book_id = books.id GROUP BY title HAVING COUNT(title) >= 2'
  )
  .then(editions => {
    assert.equal(editions.length, 5)
    assert.equal(editions[0].title, 'The Shining')
    assert.equal(editions[4].title, 'The Tell-Tale Heart')
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
  .then(daily_inventory => {
    assert.equal(daily_inventory.length, 2)
    assert.equal(daily_inventory[0].title, 'Dune')
    assert.equal(daily_inventory[1].last_name, 'Geisel')
  }).catch(error => {
    console.log('The asserts did not work', error);
  });

console.log('Reached the end!');
pgp.end();

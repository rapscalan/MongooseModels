const mongoose = require('mongoose');
const Book = require('./Book');

describe('Book model', () => {
  it('has a required title', () => {
    const book = new Book();
    const { errors } = book.validateSync();
    console.log(errors);
    expect(errors.title.message).toEqual('Path `title` is required.');
  });
  it('has a required author', () => {
    const book = new Book();
    const { errors } = book.validateSync();
    expect(errors.author.message).toEqual('Path `author` is required.');
  });

  it('has a required genre', () => {
    const book = new Book();
    const { errors } = book.validateSync();
    expect(errors.genre.message).toEqual('Path `genre` is required.');
  });
  it('has a required isbn', () => {
    const book = new Book();
    const { errors } = book.validateSync();
    expect(errors.isbn.message).toEqual('Path `isbn` is required.');
  });
});

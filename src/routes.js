const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require('./handler');

const routes = [
  {
    method: 'post',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'get',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'get',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'put',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'delete',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  }
];

module.exports = routes;
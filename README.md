# Notes-Api Backend
The Bookshelf API backend is a learning project focused on backend development with node.js and Hapi Framework.\
It is part of a collaboration with Dicoding Indonesia as a submission for course completion in Dicoding, within the ID Camp 2024 event.

## The Resouce of This Project Have.
- Adding new book (POST)
- Getting all books (GET)
- Getting book by id (GET)
- Changing value of book by id (PUT)
- Deleting book by id (DELETE)

## Initialisation Guide
### Requirement
- Node.js 18+

## Instalation & Clone this Repository.
### Cloning Repository.
```bash
cd ~
git clone https://github.com/PFebrianoooo/Bookshelf-Api.git
cd Bookshelf-Api
code .
```
## Routes URL
You cam simply use Postman API for testing purpose only. by setting and sending data by JSON File Or using command below.
### Adding New Book (POST)
```bash
curl -X POST http://localhost:PORT/books \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Harry Potter and the Philosopher Stone",
       "year": 1997,
       "author": "J.K. Rowling",
       "summary": "Harry Potter is a wizard...",
       "publisher": "Bloomsbury",
       "pageCount": 223,
       "readPage": 100,
       "reading": true
     }'
```
#### Success Response (201) ✅
```bash 
{
  "status": "success",
  "message": "Buku berhasil ditambahkan",
  "data": {
    "bookId": "abc123def456ghi"
  }
}
```

### Getting All Book (GET)
```bash
curl -X GET http://localhost:PORT/books
```
#### Success Reponse (200) ✅
```bash
{
  "status": "success",
  "data": {
    "books": [
      {
        "id": "abc123def456ghi",
        "name": "Harry Potter and the Philosopher Stone",
        "publisher": "Bloomsbury"
      }
    ]
  }
}
```
#### FIltering Based on Name, Reading or Finished properties
```bash
curl -X GET "http://localhost:PORT/books?reading=1"
```

### Getting Book by Id (GET)
```bash
curl -X GET http://localhost:PORT/books/abc123def456ghi
```
#### Success Response (200) ✅
```bash
{
  "status": "success",
  "data": {
    "book": {
      "id": "abc123def456ghi",
      "name": "Harry Potter and the Philosopher Stone",
      "year": 1997,
      "author": "J.K. Rowling",
      "summary": "Harry Potter is a wizard...",
      "publisher": "Bloomsbury",
      "pageCount": 223,
      "readPage": 100,
      "finished": false,
      "reading": true,
      "insertedAt": "2025-02-08T12:34:56.789Z",
      "updatedAt": "2025-02-08T12:34:56.789Z"
    }
  }
}
```
#### If the Book Doesn't Exist (404) ❌
```bash
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```

### Changing Value of Book by Id (PUT)
```bash
curl -X PUT http://localhost:PORT/books/abc123def456ghi \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Harry Potter and the Chamber of Secrets",
       "year": 1998,
       "author": "J.K. Rowling",
       "summary": "Harry continues his journey...",
       "publisher": "Bloomsbury",
       "pageCount": 251,
       "readPage": 251,
       "reading": false
     }'
```
#### Success Response (200) ✅
```bash
{
  "status": "success",
  "message": "Buku berhasil diperbarui"
}
```
#### If bookId doesn't Exist (404) ❌
```bash
{
  "status": "fail",
  "message": "Buku tidak ditemukan"
}
```
#### If name doestn't Fill (400) ❌
```bash
{
  "status": "fail",
  "message": "Gagal memperbarui buku. Mohon isi nama buku"
}
```
#### If readPage Greater than pageCount (400) ❌
```bash
{
  "status": "fail",
  "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount"
}
```

### Delete of Book by Id (DELETE)
```bash
curl -X DELETE http://localhost:PORT/books/abc123def456ghi
```
#### Success Response (200) ✅
```bash
{
  "status": "success",
  "message": "Buku berhasil dihapus"
}
```
#### If bookId doesn't Exist (404) ❌
```bash
{
  "status": "fail",
  "message": "Buku gagal dihapus. Id tidak ditemukan"
}
```

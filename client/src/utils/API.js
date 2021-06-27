import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id).then(result => result.data);
  },
  // Deletes the book with the given id
  deleteBook: function(bookInfo) {
    return axios.delete("/api/books/" + bookInfo).then(result => result.data);
  },
  // Saves a book to the database
  saveBook: function() {
    return axios.post("/api/books").then(result => result.data);
  }
};

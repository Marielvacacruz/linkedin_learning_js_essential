/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Book from "./Book.js";

//new books; params: title, author, year published, read status

const witches = new Book("Witches", "Brenda Lozano", "2019", true);
console.log("book 1:", witches)

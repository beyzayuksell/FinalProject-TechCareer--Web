package com.beyzayuksel.ui.rest.impl;

import com.beyzayuksel.business.dto.BookDto;
import com.beyzayuksel.business.services.BookServices;
import com.beyzayuksel.ui.rest.IBookRest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

//http://localhost:8080/api/v1/
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")
public class BookRest implements IBookRest {

    @Autowired
    BookServices bookServices;

    //ROOT
    //http://localhost:8080/api/v1
    //http://localhost:8080/api/v1/index
    @GetMapping({"/", "/index"})
    public String getRoot() {
        return "index";
    }

    // SAVE
    // http://localhost:8080/api/v1/books
    @Override
    @PostMapping("/books")
    public BookDto createBook(@RequestBody BookDto bookDto) {
        bookServices.createBook(bookDto);
        return bookDto;
    }

    // LIST
    // http://localhost:8080/api/v1/books
    @Override
    @GetMapping("/employees")
    public List<BookDto> getAllBooks() {
        List<BookDto> list = bookServices.getAllBooks();
        return list;
    }

    // FIND
    // http://localhost:8080/api/v1/books/1
    @Override
    @GetMapping("/books/{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable(name = "id") Long id) throws Throwable {
        ResponseEntity<BookDto> entity=bookServices.getBookById(id);
        return entity;
    }

    // UPDATE
    // http://localhost:8080/api/v1/books/1
    @Override
    @PutMapping("/books/{id}")
    public ResponseEntity<BookDto> updateBook(@PathVariable(name = "id") Long id, @RequestBody BookDto bookDto) throws Throwable {
        bookServices.updateBook(id, bookDto);
        return ResponseEntity.ok(bookDto);
    }

    // DELETE
    // http://localhost:8080/api/v1/books/1
    @Override
    @DeleteMapping("/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable(name = "id") Long id) {
        bookServices.deleteBook(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
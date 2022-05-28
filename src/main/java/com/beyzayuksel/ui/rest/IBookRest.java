package com.beyzayuksel.ui.rest;

import com.beyzayuksel.business.dto.BookDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IBookRest {

    // SAVE
    BookDto createBook(BookDto bookDto);
    
    // LIST
    List<BookDto> getAllBooks();

    // FIND
    ResponseEntity<BookDto> getBookById(Long id) throws Throwable;

    // UPDATE
    ResponseEntity<BookDto> updateBook(Long id,BookDto bookDto) throws Throwable;

    // DELETE
    ResponseEntity<Map<String,Boolean>> deleteBook(Long id);
}

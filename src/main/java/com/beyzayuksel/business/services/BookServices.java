package com.beyzayuksel.business.services;

import com.beyzayuksel.business.dto.BookDto;
import com.beyzayuksel.data.entity.BookEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface BookServices {

    // CRUD PROCESES

    // save
    public BookDto createBook(BookDto bookDto);

    // list
    public List<BookDto> getAllBooks();

    // filter: find book
    public ResponseEntity<BookDto> getBookById(Long id);

    // update
    public ResponseEntity<BookDto> updateBook(Long id, BookDto bookDto);

    // delete
    public ResponseEntity<Map<String, Boolean>> deleteBook(Long id);

    // Model Mapper: DTO to Entity
    // Amaç: Bilgi Güvenliği
    // User lar dışardan direk verilere erişememesi için.
    public BookDto EntityToDto(BookEntity bookEntity);
    public BookEntity DtoToEntity(BookDto bookDto);

}

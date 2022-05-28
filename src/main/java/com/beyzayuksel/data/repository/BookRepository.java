package com.beyzayuksel.data.repository;

import com.beyzayuksel.business.dto.BookDto;
import com.beyzayuksel.data.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface BookRepository extends JpaRepository<BookEntity, Long> {

    // CRUD

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
    public BookDto EntityToDto(BookEntity bookEntity);
    public BookEntity DtoToEntity(BookDto bookDto);


}

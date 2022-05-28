package com.beyzayuksel.business.services.impl;

import com.beyzayuksel.business.dto.BookDto;
import com.beyzayuksel.business.services.BookServices;
import com.beyzayuksel.data.entity.BookEntity;
import com.beyzayuksel.data.repository.BookRepository;
import com.beyzayuksel.exception.ResourceNotFoundException;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Log4j2
public class BookServicesImpl implements BookServices {

    @Autowired
    BookRepository bookRepository;

    @Autowired
    ModelMapper modelMapper;


    //CRUD

    //save
    //http://localhost:8080/save/books
    @Override
    @PostMapping("/save/books")
    public BookDto createBook(@RequestBody BookDto bookDto) {
        BookEntity entity = DtoToEntity(bookDto);
        bookRepository.save(entity);
        log.info("Book kaydedildi.");
        return bookDto;
    }

    //list
    //http://localhost:8080/list/books
    @Override
    @GetMapping("/list/books")
    public List<BookDto> getAllBooks() {
        List<BookDto> list = new ArrayList<>();
        Iterable<BookEntity> listem = bookRepository.findAll();
        for(BookEntity entity  : listem){
            BookDto dto =  EntityToDto(entity);
            list.add(dto);
        }
        return list;
    }

    // filter:find
    // http://localhost:8080/find/books/2
    @Override
    @GetMapping("/find/books/{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable(name="id") Long id) throws Throwable {
        BookEntity entity = bookRepository.
                        findById(id)
                        .orElseThrow(()->new ResourceNotFoundException("Book "+id+" id bulamadı !!!"));
        BookDto dto = EntityToDto(entity);
        return ResponseEntity.ok(dto);
    }

    // Update
    // http://localhost:8080/update/books/4
    @Override
    @PutMapping("/update/books/{id}")
    public ResponseEntity<BookDto> updateBook(@PathVariable(name="id") Long id, @RequestBody BookDto bookDto) throws Throwable {
        //DtoToEntity
        BookEntity entity = DtoToEntity(bookDto);

        //findEntity
        BookEntity entityFind =
                bookRepository.
                        findById(id)
                        .orElseThrow(()->new ResourceNotFoundException("Book "+id+" id bulamadı !!!"));

        //setEntity
        entityFind.setBookTitle(entity.getBookTitle());
        entityFind.setBookAuthor(entity.getBookAuthor());
        entityFind.setBookPublishedYear(entity.getBookPublishedYear());

        BookEntity entity2 = bookRepository.save(entityFind);
        //EntityToDto
        BookDto dto = EntityToDto(entity2);
        return ResponseEntity.ok(dto);
    }

    //Delete
    //http://localhost:8080/delete/books/1
    @Override
    @DeleteMapping("/delete/books/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteBook(@PathVariable(name="id") Long id) {
        // findEntity
        BookEntity bookEntityFind =
                bookRepository.
                findById(id).
                orElseThrow( () -> new ResourceNotFoundException("Book "+id+" id bulamadı !!!") );

        bookRepository.delete(bookEntityFind);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Silindi", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    // Model Mapper

    // EntityToDto
    @Override
    public BookDto EntityToDto(BookEntity bookEntity) {
        BookDto dto = modelMapper.map(bookEntity, BookDto.class);
        return dto;
    }

    @Override
    public BookEntity DtoToEntity(BookDto bookDto) {
        BookEntity entity = modelMapper.map(bookDto, BookEntity.class);
        return entity;
    }
}

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


}

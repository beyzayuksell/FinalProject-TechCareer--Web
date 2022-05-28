package com.beyzayuksel;

import com.beyzayuksel.data.entity.BookEntity;
import com.beyzayuksel.data.repository.BookRepository;
import com.beyzayuksel.iotest.ITestData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class FinalprojectTechApplicationTests implements ITestData {

    // JUNIT Tests

    @Autowired
    BookRepository bookRepository;

    // SAVE
    @Override
    @Test
    public void testCreate() {
        BookEntity entity = new BookEntity();
        entity.setBookTitle("Suç ve Ceza");
        entity.setBookAuthor("Dostoyevski");
        entity.setBookPublishedYear("1884");
        bookRepository.save(entity);
        // eger: 1 id'li data'yı bulamazsa Exception fırlat: java.util.NoSuchElementException: No value present
        assertNotNull(bookRepository.findById(1L).get());

    }
    // FIND
    @Override
    @Test
    public void testFind() {
        BookEntity entity = bookRepository.findById(1L).get();
        // Belirtilen id bulunmazsa: java.util.NoSuchElementException: No value present
        assertEquals("1887", entity.getBookPublishedYear());
    }
    // LIST
    @Override
    @Test
    public void testList() {
        List<BookEntity> entityList=bookRepository.findAll();
        // java.lang.AssertionError:  Expecting actual:0  to be greater than:
        assertThat(entityList).size().isGreaterThan(0);
    }

    //UPDATE
    @Override
    @Test
    public void testUpdate() {
        BookEntity entity = bookRepository.findById(1L).get();
        entity.setBookTitle("Yakut Kırmızısı");
        bookRepository.save(entity);

        //org.opentest4j.AssertionFailedError: expected: not equal but was: <Yakut Kırmızısı>
        //unexpected:Beklenen
        assertNotEquals("Yakut Kırmızısı",bookRepository.findById(1L).get().getBookTitle());

    }
    // DELETE
    @Override
    @Test
    public void testDelete() {
        bookRepository.deleteById(1L);
        // istenilen data yoksa: No class com.beyzayuksel.data.entity.BookEntity entity with id 1 exists!
        assertThat(bookRepository.existsById(1L)).isFalse();
    }
}

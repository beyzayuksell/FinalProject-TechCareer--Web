package com.beyzayuksel.data.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

// LOMBOK lib
@Data
@NoArgsConstructor
@Builder

@Entity
@Table(name = "books")
public class BookEntity extends BaseEntity implements Serializable {

    public final static long serialVersionUID = 1L;

    @Column(name = "book_title")
    private String bookTitle;

    @Column(name = "book_author")
    private String bookAuthor;

    @Column(name = "publishedyear")
    private String bookPublishedYear;

    public BookEntity(String bookTitle, String bookAuthor, String bookPublishedYear) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookPublishedYear = bookPublishedYear;
    }
}

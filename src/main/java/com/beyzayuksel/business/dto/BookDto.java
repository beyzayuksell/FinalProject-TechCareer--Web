package com.beyzayuksel.business.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BookDto {

    private Long bookId;
    private String bookTitle;
    private String bookAuthor;
    private String bookPublishedYear;

}

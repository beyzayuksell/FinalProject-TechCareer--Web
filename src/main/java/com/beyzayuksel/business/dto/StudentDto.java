package com.beyzayuksel.business.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


//Lombok

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class StudentDto {

    private Long studentId;
    private String studentName;
    private String studentSurname;
    private String studentEmail;



}

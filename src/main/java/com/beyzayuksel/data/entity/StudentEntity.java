package com.beyzayuksel.data.entity;


import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

//lombok
@Data
@NoArgsConstructor
@Builder


@Entity
@Table(name = "students")
public class StudentEntity extends BaseEntity implements Serializable {
    public final static long serialVersionUID = 2L;


    @Column(name = "student_name")
    private String studentName;

    @Column(name = "student_surname")
    private String studentSurname;

    @Column(name = "student_email")
    private String studentEmail;


    //parametreli constructor
    public StudentEntity(String studentName, String studentEmail, String studentSurname) {


        this.studentName = studentName;
        this.studentSurname = studentSurname;
        this.studentEmail = studentEmail;

    }
}

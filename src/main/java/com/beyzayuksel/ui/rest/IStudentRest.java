package com.beyzayuksel.ui.rest;

import com.beyzayuksel.business.dto.StudentDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface IStudentRest {

    //save
     StudentDto createStudent(StudentDto studentDto);

    //list
     List<StudentDto> getAllStudents();

    //filter:find
     ResponseEntity<StudentDto> getStudentById(Long id) throws Throwable;

    //update
     ResponseEntity<StudentDto> updateStudent(Long id,StudentDto studentDto) throws Throwable;

    //delete
     ResponseEntity<Map<String,Boolean>> deleteStudent(Long id);
}

package com.beyzayuksel.business.services;


import com.beyzayuksel.business.dto.StudentDto;
import com.beyzayuksel.data.entity.StudentEntity;
import com.beyzayuksel.business.dto.StudentDto;
import com.beyzayuksel.data.entity.StudentEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface StudentServices {

    //modelMapper: DTO  to Entity
    public StudentDto EntityToDto(StudentEntity studentEntity);
    public StudentEntity DtoToEntity(StudentDto studentDto);

    //save
    public StudentDto createStudent(StudentDto studentDto);

    //list
    public List<StudentDto> getAllStudents();

    //filter:find
    public ResponseEntity<StudentDto> getStudentById(Long id) throws Throwable;

    //update
    public ResponseEntity<StudentDto> updateStudent(Long id,StudentDto studentDto) throws Throwable;

    //delete
    public ResponseEntity<Map<String,Boolean>> deleteStudent(Long id);



}

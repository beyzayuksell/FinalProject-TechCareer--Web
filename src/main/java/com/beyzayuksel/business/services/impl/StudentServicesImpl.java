package com.beyzayuksel.business.services.impl;

import com.beyzayuksel.business.services.StudentServices;
import com.beyzayuksel.business.dto.StudentDto;
import com.beyzayuksel.business.services.StudentServices;
import com.beyzayuksel.data.entity.StudentEntity;
import com.beyzayuksel.data.repository.StudentRepository;
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
public class StudentServicesImpl implements StudentServices {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    ModelMapper modelMapper;



    @Override
    public StudentDto EntityToDto(StudentEntity studentEntity) {
        StudentDto dto = modelMapper.map(studentEntity,StudentDto.class);
        return dto;
    }

    @Override
    public StudentEntity DtoToEntity(StudentDto studentDto) {
        StudentEntity entity = modelMapper.map(studentDto,StudentEntity.class);
        return entity;
    }


    //CRUD
    //save
    //http://localhost:8080/save/students
    @Override
    @PostMapping("/save/students")
    public StudentDto createStudent(@RequestBody  StudentDto studentDto) {
        StudentEntity entity = DtoToEntity(studentDto);
        studentRepository.save(entity);
        log.info("Student Kaydedeildi..");
        return studentDto;
    }


    //list
    //http://localhost:8080/list/students
    @Override
    @GetMapping("/list/students")
    public List<StudentDto> getAllStudents() {
        List<StudentDto> list = new ArrayList<>();
        Iterable<StudentEntity> listem = studentRepository.findAll();
        for( StudentEntity entity : listem ){
            StudentDto dto = EntityToDto(entity);
            list.add(dto);
        }
        return list;
    }


    //filter: find
    //http://localhost:8080/find/students/1
    @Override
    @GetMapping("/find/students/{id}")
    public ResponseEntity<StudentDto> getStudentById(@PathVariable(name = "id") Long id) throws Throwable {
        StudentEntity entity=
                (StudentEntity) studentRepository.
                        findById(id)
                        .orElseThrow(()->new ResourceNotFoundException("Student " + id + " id bulunamdı !!"));
        StudentDto dto = EntityToDto(entity);
        return ResponseEntity.ok(dto);
    }


    //update
    //http://localhost:8080/update/students/1
    @Override
    @PutMapping("update/students/{id}")
    public ResponseEntity<StudentDto> updateStudent(@PathVariable(name = "id") Long id, @RequestBody StudentDto studentDto) throws Throwable {

        StudentEntity entity = DtoToEntity(studentDto);

        StudentEntity entityFind =
                studentRepository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException("Student" + id +  "id bulunamdı !!"));


        //set Entity

        entityFind.setStudentName(entity.getStudentName());
        entityFind.setStudentSurname(entity.getStudentSurname());
        entityFind.setStudentEmail(entity.getStudentEmail());

        StudentEntity entity2 = studentRepository.save(entityFind);

        StudentDto dto =EntityToDto(entity2);
        return ResponseEntity.ok(dto);
    }
    //delete
    //http://localhost:8080/delete/students/1
    @Override
    @DeleteMapping("delete/students/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteStudent(@PathVariable(name = "id") Long id) {
        StudentEntity entityFind =
                studentRepository.findById(id)
                        .orElseThrow(()-> new ResourceNotFoundException("Student" + id +  "id bulunamdı !!"));
        studentRepository.delete(entityFind);
        Map<String, Boolean> response = new HashMap<>();
        response.put("silindi.", Boolean.TRUE);

        return ResponseEntity.ok(response);
    }
}

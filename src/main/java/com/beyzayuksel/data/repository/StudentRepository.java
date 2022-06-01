package com.beyzayuksel.data.repository;

import com.beyzayuksel.data.entity.StudentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StudentRepository  extends JpaRepository<StudentEntity , Long> {
    List<StudentEntity> findStudentEntitiesByStudentNameStartsWith(String studentName);
    List<StudentEntity> findStudentEntitiesByStudentNameEndsWith(String studentName);
    List<StudentEntity> findStudentEntitiesByStudentNameEquals(String studentName);
    List<StudentEntity> findStudentEntitiesByStudentNameLike(String studentName);
}

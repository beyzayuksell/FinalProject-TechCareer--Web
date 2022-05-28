package com.beyzayuksel.bean;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// For Data Security
// Not Open entity to outside
// Entity - Dto Mapping(converting)
// Baca Sil - project should add that running for Spring Boot Level

@Configuration
public class ModelMapperBean {

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}

package com.beyzayuksel.bean;

import com.beyzayuksel.audit.AuditorAwareImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

//AUDIT BEAN
//Sisteme kim, ne zaman giriş yaptığını öğrenemek için kullanırız.
@Configuration
public class AuditorAwareBean {

    @Bean
    public AuditorAware<String> auditorAware(){
        return new AuditorAwareImpl();
    }

}

package com.beyzayuksel;

import com.beyzayuksel.jwt.service.IRoleService;
import com.beyzayuksel.jwt.service.IService;
import com.beyzayuksel.jwt.domain.Role;
import com.beyzayuksel.jwt.domain.User;
import com.beyzayuksel.utils.ConstantUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

//exclude:dahil etmemek

@SpringBootApplication(exclude = {
        org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class,
        org.springframework.boot.actuate.autoconfigure.security.servlet.ManagementWebSecurityAutoConfiguration.class
})
// AuditorAwere
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class FinalprojectTechApplication implements CommandLineRunner {

    @Autowired
    private IService<User> userService;

    @Autowired
    private IRoleService<Role> roleService;


    public static void main(String[] args) {
        SpringApplication.run(FinalprojectTechApplication.class, args);

        //JOptionalPane Kullanmak icin
        System.setProperty("java.awt.headless", "false");
    }

    @Override
    public void run(String... args) throws Exception {
        if (roleService.findAll().isEmpty()) {
            roleService.saveOrUpdate(new Role(ConstantUtils.ADMIN.toString()));
            roleService.saveOrUpdate(new Role(ConstantUtils.USER.toString()));
        }

        if (userService.findAll().isEmpty()) {
            User user1 = new User();
            user1.setEmail("user@user.com");
            user1.setName("User");
            user1.setMobile("555555555");
            user1.setRole(roleService.findByName(ConstantUtils.USER.toString()));
            user1.setPassword(new BCryptPasswordEncoder().encode("user"));
            userService.saveOrUpdate(user1);

            User user2 = new User();
            user2.setEmail("admin@admin.com");
            user2.setName("Admin");
            user2.setMobile("44444444");
            user2.setRole(roleService.findByName(ConstantUtils.ADMIN.toString()));
            user2.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userService.saveOrUpdate(user2);
        }
    }
}

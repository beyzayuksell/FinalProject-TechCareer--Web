package com.beyzayuksel.jwt.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtTokenProvider tokenProvider;

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}


	// Hangi  sayfalar görünebilceği/görülemeyeceği belirleme.
	// örn: http://localhost:8080/api/v1/books bu sayfaya izin ver herkes görebilsin.
	// örn: http://localhost:8080/user/* bu sayfaya izin ver herkes görebilsin.
    // user/* bu yıldız user/1 izin ver demek. user/** ise user/1/add user dan sonra path uzantısı 2 tane olana izin ver demek.
	// WebSecurityConfigurerAdapter extend ederek yapılıyor
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors();
      http.csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.authorizeRequests()
				.antMatchers("/api/v1/books").permitAll()
				.antMatchers("/api/v1/books/{id}").permitAll()
				.antMatchers("/user/**").permitAll()
			  .antMatchers("/api/v1/students/**").permitAll()
			  .antMatchers("/beyzayuksel/**").permitAll()
	//			.antMatchers("/user/register").permitAll()
		.anyRequest().authenticated();


		http.apply(new JwtTokenConfigurer(tokenProvider));


		/*		http.cors();
      http.csrf().disable().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.authorizeRequests()
				.antMatchers("/api/v1/books").permitAll()
				.antMatchers("/api/v1/books/{id}").permitAll()
				.antMatchers("/user/*").permitAll()
				.antMatchers("/user/register").permitAll()
		.anyRequest().authenticated();
*/



		/*


//    Stateless session enables authentication for every request. This would help ease the demonstration
//    of this tutorial on Postman.

		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

		http

				.csrf().disable()
				.authorizeRequests()
				.antMatchers(HttpMethod.DELETE, "/api/v1/products/{productId}").hasRole(ADMIN.name()) // Admin should be able to delete
				.antMatchers(HttpMethod.PUT, "/api/v1/products/{productId}").hasRole(ADMIN.name()) // Admin should be able to update
				.antMatchers("/api/v1/products/add").hasAnyRole(ADMIN.name(), SUPERVISOR.name()) // Admin and Supervisor should be able to add product.
				.antMatchers("/api/v1/products").hasAnyRole(ADMIN.name(), SUPERVISOR.name(), INTERN.name()) // All three users should be able to get all products.
				.antMatchers("/api/v1/products{productId}").hasAnyRole(ADMIN.name(), SUPERVISOR.name(), INTERN.name()) // All three users should be able to get a product by id.
				.anyRequest()
				.authenticated()
				.and()
				.httpBasic();

	}



		 */


	}

}
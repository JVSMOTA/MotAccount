package com.sapatariasmota.MotAccountWeb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class MotAccountWebApplication {

	public static void main(String[] args) {
		SpringApplication.run(MotAccountWebApplication.class, args);
	}

}

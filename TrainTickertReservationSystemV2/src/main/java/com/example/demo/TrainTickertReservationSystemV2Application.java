package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"api","config","documents","repository","services"})
public class TrainTickertReservationSystemV2Application {

	public static void main(String[] args) {
		SpringApplication.run(TrainTickertReservationSystemV2Application.class, args);
	}

}

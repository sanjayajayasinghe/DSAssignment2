package config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import documents.Seat;
import documents.TimetableRow;
import documents.Travel;
import documents.User;
import repository.MongoUserRepo;
import repository.SeatRepo;
import repository.TimeTableRowRepo;
import repository.TravelRepo;

@EnableMongoRepositories(basePackageClasses= {MongoUserRepo.class,SeatRepo.class})
@Configuration
public class MongoDBConfig {
	@Bean
	CommandLineRunner commandLineRunner(MongoUserRepo mongoUserRepo,SeatRepo seatRepo,TimeTableRowRepo tableRowRepo,TravelRepo travelRepo) {
		System.out.println("record added");
		return new CommandLineRunner() {
			
			@Override
			public void run(String... args) throws Exception {
							
				mongoUserRepo.save(new User(16,"ss","ss"));
				seatRepo.save(new Seat("1","1", 1, 2,"homa","san" , "sa"));
				seatRepo.save(new Seat("1","1", 1, 3,"maharagama","jan" , "sa"));
				seatRepo.save(new Seat("1","1", 1, 4,"kottawa","jj" , "sa"));
				tableRowRepo.save(new TimetableRow(1,"homa","maharagama","06:00","07:00","onTime",20,true,"Thu May 02 2019","1"));
				tableRowRepo.save(new TimetableRow(2,"homa","kottawa","06:00","06:30","onTime",20,false,"Thu May 02 2019","1"));
				tableRowRepo.save(new TimetableRow(3,"homa","nuge","06:00","07:30","onTime",20,true,"Thu May 02 2019","1"));
				tableRowRepo.save(new TimetableRow(4,"homa","nuge","06:00","07:00","onTime",20,true,"Sat May 04 2019","2"));
				travelRepo.save(new Travel("1", new String[] {"homa","kottawa","maharagama"},new int[] {20,20,20}));
			}
		};
				
				
	}

}

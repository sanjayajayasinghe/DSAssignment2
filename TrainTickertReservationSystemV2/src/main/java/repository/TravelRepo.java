package repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import documents.TimetableRow;
import documents.Travel;
import documents.User;

public interface TravelRepo extends MongoRepository<Travel, String>{
	public Travel findByTravelID(String travelID);
}

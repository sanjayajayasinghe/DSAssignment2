package repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import documents.Seat;
import documents.TimetableRow;


public interface SeatRepo extends MongoRepository<Seat, String>{
 public List<Seat> findByTravelIDAndStation(String travelID,String station);
 public List<Seat> findByStation(String station);
 public List<Seat> findByTravelIDAndStationAndClassNumber(String travelID,String station,int classNumber);
	
}

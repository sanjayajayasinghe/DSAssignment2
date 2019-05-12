package repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import documents.TimetableRow;


public interface TimeTableRowRepo extends MongoRepository<TimetableRow, String>{
	//public Dialog findByCampaignIdAndOptionsPath(String id, String path);
	
	public List<TimetableRow> findByFromOrderByDepartureTimeAsc(String from);
	public List<TimetableRow> findByFromAndDate(String from,String date);
	public List<TimetableRow> findByFromAndDateAndLastStation(String from,String date,Boolean lastStation);
	public List<TimetableRow> findByFromAndDateAndCostGreaterThan(String from,String date,float cost);
}

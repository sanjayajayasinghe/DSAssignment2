package api;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import documents.Seat;
import documents.TimetableRow;
import documents.Travel;
import documents.User;
import filters.DateFilter;
import repository.MongoUserRepo;
import repository.SeatRepo;
import repository.TimeTableRowRepo;
import repository.TravelRepo;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class MainController {
	
	@Autowired
	private MongoUserRepo mongoUserRepo;
	@Autowired
	private TimeTableRowRepo timeTableRowRepo;
	@Autowired
	private TravelRepo travelRepo;
	@Autowired
	private SeatRepo seatRepo;
	
	@RequestMapping("Home")
	@ResponseBody
	public String Home() {
		System.out.println("home works");
		return "works";	
	
	}
	@RequestMapping("add")
	public String add(User user) {
		System.out.println("added");
		mongoUserRepo.save(user);
		return "works";	
	}
	@ResponseBody
	@GetMapping("all")
	public List<User> all() {
		System.out.println("all");
		
		return mongoUserRepo.findAll();	
	}
	 
	@GetMapping(value="/TimeTable",produces = "application/json")
	public List<TimetableRow> TimeTable(String from,String date){
		
		date=DateFilter.dateFormatter(date);
		//
		//return timeTableRowRepo.findByFrom(from);	
		return timeTableRowRepo.findByFromAndDateAndLastStation(from, date, true);
		
	}
	
	@GetMapping(value="/BookTicketTimeTable",produces = "application/json")
	public List<TimetableRow> BookTimeTable(String from,String date){
		
		date=DateFilter.dateFormatter(date);
		//
		//return timeTableRowRepo.findByFrom(from);	
		return timeTableRowRepo.findByFromAndDate(from, date);
		
	}
	
	/*@GetMapping(value="/getSeats",produces = "application/json")
	public List<TimetableRow> getSeats(String from,String to,String travelID){
		
			
		return timeTableRowRepo.findByFromAndDate(from, date);
		
	}
	*/
	
	@GetMapping("TSeats")
	public List<Seat> testSeats(){
		return seatRepo.findByTravelIDAndStation("1","homa");
	}

	@GetMapping("Seats")
	public List<Seat> Seats(String travelID,String from,String to,String classNumber){
		System.out.println("all");
		//
		List<Seat> seats=new ArrayList<>();
		Travel travel=travelRepo.findByTravelID(travelID);
		String stations[]=travel.getStations();
		List<String> selectedStation=new ArrayList<>();
		boolean startStation=false;
		for(String station:stations) {
			if(station.equals(from)||startStation) {
			selectedStation.add(station);
			startStation=true;
			}
			if(station.equals(to))
				break;
			
		}
		
		
		List<Seat> bookedSeats=new ArrayList<>();
		for(String station:selectedStation) {
			try {
			bookedSeats=seatRepo.findByTravelIDAndStationAndClassNumber(travelID, station, Integer.parseInt(classNumber));
			for (Seat s: bookedSeats) {
				seats.add(s);
			}
			}catch(Exception ex) {}
			
		}
		
		
		return seats;	
	}
	
	
	
	@GetMapping(value="/getTotalSeats",produces = "application/json")
	public Optional<Travel> getTotalSeats(String travelID){
		
	
		//
		//return timeTableRowRepo.findByFrom(from);	
		//return travelRepo.findByTravelID(travelID);
		return travelRepo.findById(travelID);
	}
	
	@GetMapping(value="/SeatsBook")
	public void BookNow(String travelID,String from,String to,String classNumber,int seats[]){
		System.out.println("hi");
		int ss []=seats;
		Travel travel=travelRepo.findByTravelID(travelID);
		String stations[]=travel.getStations();
		List<String> selectedStation=new ArrayList<>();
		boolean startStation=false;
		for(String station:stations) {
			if(station.equals(from)||startStation) {
			selectedStation.add(station);
			startStation=true;
			}
			if(station.equals(to))
				break;
			
		}
		//check seats is available.set messege
		/*for(String station:selectedStation) {
			for(int s:seats) {
				seatRepo.findbyTravrlIDAndClassNumberAndStation( travelID, "", Integer.parseInt(classNumber), s, station, "", ""));
			}
		}*/
		
		
		//payment available
		for(String station:selectedStation) {
			for(int s:seats) {
				seatRepo.save(new Seat( travelID, "", Integer.parseInt(classNumber), s, station, "", ""));
				 
			}
		}
		//email;
	
	}
	
}

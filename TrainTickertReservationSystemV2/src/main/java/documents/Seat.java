package documents;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Seat {
	@Id
	private String allocationID;
	
	private String travelID;
	private String trainID;
	
	private int classNumber;
	private int seatNumber;
	private String station;
	private String userName;
	private String nIC;
	
	

	public Seat( String travelID, String trainID, int classNumber, int seatNumber, String station,
			String userName, String nIC) {
		super();
		//this.allocationID = allocationID;
		this.travelID = travelID;
		this.trainID = trainID;
		this.classNumber = classNumber;
		this.seatNumber = seatNumber;
		this.station = station;
		this.userName = userName;
		this.nIC = nIC;
	}
	
	
	public String getTravelID() {
		return travelID;
	}


	public void setTravelID(String travelID) {
		this.travelID = travelID;
	}


	public String getTrainID() {
		return trainID;
	}


	public void setTrainID(String trainID) {
		this.trainID = trainID;
	}


	public String getAllocationID() {
		return allocationID;
	}
	public void setAllocationID(String allocationID) {
		this.allocationID = allocationID;
	}
	public int getClassNumber() {
		return classNumber;
	}
	public void setClassNumber(int classNumber) {
		this.classNumber = classNumber;
	}
	public int getSeatNumber() {
		return seatNumber;
	}
	public void setSeatNumber(int seatNumber) {
		this.seatNumber = seatNumber;
	}
	public String getStation() {
		return station;
	}
	public void setStations(String station) {
		this.station = station;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getnIC() {
		return nIC;
	}
	public void setnIC(String nIC) {
		this.nIC = nIC;
	}


	@Override
	public String toString() {
		return "Seat [allocationID=" + allocationID + ", travelID=" + travelID + ", trainID=" + trainID
				+ ", classNumber=" + classNumber + ", seatNumber=" + seatNumber + ", station=" + station
				+ ", userName=" + userName + ", nIC=" + nIC + "]";
	}


	
	
	
	
	
	
}

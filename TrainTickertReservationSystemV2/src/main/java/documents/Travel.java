package documents;

import java.util.Arrays;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Travel {
	@Id
	private String travelID;
	private String stations[];
	private int classSeates[];
	public Travel(String travelID, String[] stations, int[] classSeates) {
		super();
		this.travelID = travelID;
		this.stations = stations;
		this.classSeates = classSeates;
	}
	public String getTravelID() {
		return travelID;
	}
	public void setTravelID(String travelID) {
		this.travelID = travelID;
	}
	public String[] getStations() {
		return stations;
	}
	public void setStations(String[] stations) {
		this.stations = stations;
	}
	public int[] getClassSeates() {
		return classSeates;
	}
	public void setClassSeates(int[] classSeates) {
		this.classSeates = classSeates;
	}
	@Override
	public String toString() {
		return "Travel [travelID=" + travelID + ", stations=" + Arrays.toString(stations) + ", classSeates="
				+ Arrays.toString(classSeates) + "]";
	}
	
	

	
	
}

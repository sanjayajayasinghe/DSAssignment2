package filters;

import org.springframework.stereotype.Component;

@Component
public class DateFilter {
	public static String dateFormatter(String date) {
		return date.substring(0, 15);
	}
	
	
}

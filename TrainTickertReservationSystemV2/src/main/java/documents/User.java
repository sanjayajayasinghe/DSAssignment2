package documents;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.repository.CrudRepository;

@Document
public class User {
	@Id
	private Integer nIC;
	private String userName;
	private String password;
	
	
	
	public User(Integer nIC, String userName, String password) {
		super();
		this.nIC = nIC;
		this.userName = userName;
		this.password = password;
	}
	public Integer getnIC() {
		return nIC;
	}
	public void setnIC(Integer nIC) {
		this.nIC = nIC;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
	
	@Override
	public String toString() {
		return "User [nIC=" + nIC + ", userName=" + userName + ", password=" + password + "]";
	}
	
	
	
	
	
	
}

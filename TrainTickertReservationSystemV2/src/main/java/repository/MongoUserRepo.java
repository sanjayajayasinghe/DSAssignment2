package repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import documents.User;

public interface MongoUserRepo extends MongoRepository<User, Integer>{

}

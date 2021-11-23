package com.misiontic2.grupo51.sudespensa.sudespensa.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.misiontic2.grupo51.sudespensa.sudespensa.model.Cliente;

public interface ClienteRepository extends MongoRepository<Cliente, Integer> {

	List<Cliente> findByCedula(Integer cedula);
	
}

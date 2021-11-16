package com.misiontic2.grupo51.sudespensa.sudespensa.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.misiontic2.grupo51.sudespensa.sudespensa.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

	List<Usuario> findByUsername(String username);
	
	List<Usuario> findByNombrecompleto(String nombrecompleto);
}

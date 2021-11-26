package com.misiontic2.grupo51.sudespensa.sudespensa.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.misiontic2.grupo51.sudespensa.sudespensa.model.Producto;

public interface ProductoRepository extends MongoRepository<Producto, String> {
	List<Producto> findByCodigoproducto(Long codigoproducto);
	
	List<Producto> findByNombreproducto(String nombreproducto);
}

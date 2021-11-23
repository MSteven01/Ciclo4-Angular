package com.misiontic2.grupo51.sudespensa.sudespensa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.misiontic2.grupo51.sudespensa.sudespensa.model.Cliente;
import com.misiontic2.grupo51.sudespensa.sudespensa.repository.ClienteRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")

public class ClienteController {

	@Autowired
	ClienteRepository clienterepository;
	
	@GetMapping("/clientes")

	public ResponseEntity<List<Cliente>> getAllClientes(@RequestParam(required = false) Integer cedula) {
		try {
			List<Cliente> clientes = new ArrayList<Cliente>();

			if (cedula == null) {
				clienterepository.findAll().forEach(clientes::add);
			} else {
				clienterepository.findByCedula(cedula).forEach(clientes::add);
			}

			if (clientes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(clientes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	@PostMapping("/clientes")
	public ResponseEntity<Cliente> createCliente(@RequestBody Cliente client) {
		try {
			Cliente _client = clienterepository.save(
					new Cliente(client.getCedula() , client.getTelefono() , client.getNombrecompleto() , client.getEmail(), client.getDireccion() ));
			return new ResponseEntity<>(_client, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	

	
	
	
	
	
	
}

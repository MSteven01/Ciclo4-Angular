package com.misiontic2.grupo51.sudespensa.sudespensa.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "clientes")
public class Cliente {

	@Id
	private String id;
	
	private Integer cedula;
	private String telefono;
	private String nombrecompleto;
	private String email;
	private String direccion;
	
	public Cliente() {
		// TODO Auto-generated constructor stub
	}

	public Cliente(Integer cedula, String telefono, String nombrecompleto, String email, String direccion) {
		super();
		this.cedula = cedula;
		this.telefono = telefono;
		this.nombrecompleto = nombrecompleto;
		this.email = email;
		this.direccion = direccion;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * @return the cedula
	 */
	public Integer getCedula() {
		return cedula;
	}

	/**
	 * @param cedula the cedula to set
	 */
	public void setCedula(Integer cedula) {
		this.cedula = cedula;
	}

	/**
	 * @return the telefono
	 */
	public String getTelefono() {
		return telefono;
	}

	/**
	 * @param telefono the telefono to set
	 */
	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	/**
	 * @return the nombrecompleto
	 */
	public String getNombrecompleto() {
		return nombrecompleto;
	}

	/**
	 * @param nombrecompleto the nombrecompleto to set
	 */
	public void setNombrecompleto(String nombrecompleto) {
		this.nombrecompleto = nombrecompleto;
	}

	/**
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * @return the direccion
	 */
	public String getDireccion() {
		return direccion;
	}

	/**
	 * @param direccion the direccion to set
	 */
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	
	
	
}

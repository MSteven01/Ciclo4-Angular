package com.misiontic2.grupo51.sudespensa.sudespensa.model;

public class DetalleVenta {

	private long cantidadproducto;
	private long codigoproducto;
	private double valortotal;
	private double valorventa;
	private double valoriva;
	
	public DetalleVenta() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @return the cantidadproducto
	 */
	public long getCantidadproducto() {
		return cantidadproducto;
	}

	/**
	 * @param cantidadproducto the cantidadproducto to set
	 */
	public void setCantidadproducto(long cantidadproducto) {
		this.cantidadproducto = cantidadproducto;
	}

	/**
	 * @return the codigoproducto
	 */
	public long getCodigoproducto() {
		return codigoproducto;
	}

	/**
	 * @param codigoproducto the codigoproducto to set
	 */
	public void setCodigoproducto(long codigoproducto) {
		this.codigoproducto = codigoproducto;
	}

	/**
	 * @return the valortotal
	 */
	public double getValortotal() {
		return valortotal;
	}

	/**
	 * @param valortotal the valortotal to set
	 */
	public void setValortotal(double valortotal) {
		this.valortotal = valortotal;
	}

	/**
	 * @return the valorventa
	 */
	public double getValorventa() {
		return valorventa;
	}

	/**
	 * @param valorventa the valorventa to set
	 */
	public void setValorventa(double valorventa) {
		this.valorventa = valorventa;
	}

	/**
	 * @return the valoriva
	 */
	public double getValoriva() {
		return valoriva;
	}

	/**
	 * @param valoriva the valoriva to set
	 */
	public void setValoriva(double valoriva) {
		this.valoriva = valoriva;
	}

	public DetalleVenta(long cantidadproducto, long codigoproducto, double valortotal, double valorventa,
			double valoriva) {
		super();
		this.cantidadproducto = cantidadproducto;
		this.codigoproducto = codigoproducto;
		this.valortotal = valortotal;
		this.valorventa = valorventa;
		this.valoriva = valoriva;
	}
	
	
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private objetohttp: HttpClient) { }
  res: any

  ngOnInit(): void {
  }

  codigorespuesta!: number;

  cedula!: string;
  telefono!: string;
  nombrecompleto!: string;
  email!: string;
  direccion!: string;

  postData() {

    if (this.cedula == null || this.telefono == null || this.nombrecompleto == null || this.email == null || this.direccion == null) {
      this.codigorespuesta = 1;

    } else {
      this.objetohttp.post<any>(
        //url de la bd
        "http://localhost:8080/api/clientes",
        //JSON DUMMY
        {
          "cedula": this.cedula,
          "telefono": this.telefono,
          "nombrecompleto": this.nombrecompleto,
          "email": this.email,
          "direccion": this.direccion
        },
        {
          observe: 'response'
        }
      ).subscribe(response => {//Codigo de respuesta
        this.codigorespuesta = response.status;
        this.codigorespuesta = 2; 
        window.location.reload();
      });
      
    }
  }

}

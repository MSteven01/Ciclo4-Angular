import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private toastr: ToastrService) { }

  res: any;
  contenido!: any;
  urlapiGETclientes: string = "http://localhost:8080/api/clientes";
  urlapiGETventas: string = "http://localhost:8080/api/ventas";
  urlapiGETproducto: string = "http://localhost:8080/api/productos";
  urlapiGETconsolidado: string = "http://localhost:8080/api/consolidados";


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}\n ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }



  codigorespuesta!: number;
  ///Clientes/////
  cedula!: string;
  nombrecompleto!: string;
  consecutivo!: string;
  ///Productos/////
  codigoproductos1!: number;
  codigoproductos2!: number;
  codigoproductos3!: number;

  preciocompra!: number;
  nombreproductos!: string;
  cantidad1!: number;
  valortotal1: number = 0;

  preciocompra2!: number;
  nombreproductos2!: string;
  cantidad2!: number;
  valortotal2: number = 0;

  preciocompra3!: number;
  nombreproductos3!: string;
  cantidad3!: number;
  valortotal3: number = 0;

  totalventa: number = 0;
  totaliva: number = 0;
  totalconiva: number = 0;

  ngOnInit(): void {
    ///////// FUNCION DE BUSCAR CONSECUTIVO ////////
    this.res = this.objetohttp.get(this.urlapiGETventas + "/consecutivo").pipe
      (catchError(this.handleError));
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.consecutivo = this.contenido + 1;
    });
  }


  ///////// FUNCION DE BUSCAR CLIENTE POR CEDULA ////////
  buscarcedula() {
    if (this.cedula == null) {
      this.showNotification('top', 'right', 5);
    } else {
      this.res = this.objetohttp.get(this.urlapiGETclientes + "?cedula=" + this.cedula);
      this.res.subscribe((data: any[]) => {
        this.contenido = data;
        console.log(this.contenido);
        if (this.contenido == null) {
          this.nombrecompleto = null;
        } else {
          this.nombrecompleto = this.contenido[0].nombrecompleto;
        }
      });
    }
  }

  ///////// FUNCION DE BUSCAR PRODUCTOS ////////

  buscarproductos1() {
    if (this.codigoproductos1 == null) {
      this.showNotification('top', 'right', 7);
      this.nombreproductos = null;
      this.preciocompra = null;
      this.valortotal1 = null;
      this.totalventa = null;
      this.totaliva = null
      this.totalconiva = null;
      this.cantidad1 = null;
  

    } else {
      this.res = this.objetohttp.get(this.urlapiGETproducto + "?codigoproducto=" + this.codigoproductos1);
      this.res.subscribe((data: any[]) => {
        this.contenido = data;
        console.log(this.contenido);
        if (this.contenido == null) {
          this.showNotification('top', 'right', 6);
          this.nombreproductos = null;
          this.preciocompra = null;
          this.valortotal1 = null;
          
        }
        else {
          this.nombreproductos = this.contenido[0].nombreproducto;
          this.preciocompra = this.contenido[0].preciocompra;
        }
      });
    }
  }


  buscarproductos2() {
    if (this.codigoproductos2 == null) {
      this.showNotification('top', 'right', 7);
      this.nombreproductos2 = null;
      this.preciocompra2 = null;
      this.valortotal2 = null;
      this.totalventa = null;
      this.totaliva = null
      this.totalconiva = null;
      this.cantidad2 = null;

    } else {
      this.res = this.objetohttp.get(this.urlapiGETproducto + "?codigoproducto=" + this.codigoproductos2);
      this.res.subscribe((data: any[]) => {
        this.contenido = data;
        console.log(this.contenido);
        if (this.contenido == null) {
          this.showNotification('top', 'right', 6);
          this.nombreproductos2 = null;
          this.preciocompra2 = null;
          this.valortotal2 = null;
        }
        else {
          this.nombreproductos2 = this.contenido[0].nombreproducto;
          this.preciocompra2 = this.contenido[0].preciocompra;
        }
      });
    }
  }


  buscarproductos3() {
    if (this.codigoproductos3 == null) {
      this.showNotification('top', 'right', 7);
      this.nombreproductos3 = null;
      this.preciocompra3 = null;
      this.valortotal3 = null;
      this.totalventa = null;
      this.totaliva = null
      this.totalconiva = null;
      this.cantidad3 = null;

    } else {
      this.res = this.objetohttp.get(this.urlapiGETproducto + "?codigoproducto=" + this.codigoproductos3);
      this.res.subscribe((data: any[]) => {
        this.contenido = data;
        console.log(this.contenido);
        if (this.contenido == null) {
          this.showNotification('top', 'right', 6);
          this.nombreproductos3 = null;
          this.preciocompra3 = null;
          this.valortotal3 = null;
        }
        else {
          this.nombreproductos3 = this.contenido[0].nombreproducto;
          this.preciocompra3 = this.contenido[0].preciocompra;
        }
      });
    }
  }



  ////////////////// OPERACIONES ///////////////

  sumar1(event: any) {
    this.valortotal1 = this.cantidad1 * this.preciocompra;
  }
  sumar2(event: any) {
    this.valortotal2 = this.cantidad2 * this.preciocompra2;
  }
  sumar3(event: any) {
    this.valortotal3 = this.cantidad3 * this.preciocompra3;
  }



  totalventas() {
    this.totalventa = this.valortotal1 + this.valortotal2 + this.valortotal3;
  }

  totalivas() {
    this.totaliva = this.totalventa * .19;
  }

  totalconivas() {
    this.totalconiva = this.totalventa + this.totaliva;
  }

  /////////////// POST ///////////////////////
  enviarventas(){
    if(this.cedula == null || this.codigoproductos1 == null || this.codigoproductos2 == null || this.codigoproductos3 == null){
      this.showNotification('top', 'right', 4);
    }else{
      this.objetohttp.post<any>(
        "http://localhost:8080/api/ventas",
        {
            "cedulacliente": this.cedula,
            "codigoventa": this.consecutivo,
            "detalleventa": [
              {
                  "cantidadproducto": this.cantidad1,
                  "codigoproducto": this.codigoproductos1,
                  "valoriva": 0.19,
                  "valortotal": this.valortotal1,
                  "valorventa": this.preciocompra
                },
              {
                "cantidadproducto": this.cantidad2,
                "codigoproducto": this.codigoproductos2,
                "valoriva": 0.19,
                "valortotal": this.valortotal2,
                "valorventa": this.preciocompra2
              },
              {
                "cantidadproducto": this.cantidad3,
                "codigoproducto": this.codigoproductos3,
                "valoriva": 0.19,
                "valortotal": this.valortotal3,
                "valorventa": this.preciocompra3
              }
            ],
            "ivaventa": this.totaliva,
            "totalventa": this.totalventa,
            "valorventa": this.totalconiva 
        },
        {
          observe: 'response'
        }
      ).subscribe(response => {//Codigo de respuesta
        this.codigorespuesta = response.status;
        console.log(this.codigorespuesta);
        if(this.codigorespuesta == 201){
          this.showNotification("top","right",1);
         // setTimeout('document.location.reload()',600);
        }else{
          this.showNotification("top","right",6);
        }
      });
    }
  }


  /////////////// Consolidado /////////////////////////////

  ciudad!: any;

  enviarconsolidado(){
    console.log(this.ciudad)
    console.log(typeof this.ciudad)
    this.objetohttp.post(this.urlapiGETconsolidado + "/agregar/" + this.ciudad,
    {},
    {observe:"response"}).subscribe((response: any) =>{
      console.log(response.status)
    });
  }



  

  /////////// NOTIFICACIONES DE TOAST ///////////////////////

  showNotification(from, align, type) {
    switch (type) {
      case 1:
        this.toastr.success('<span class="tim-icons icon-check-2" [data-notify]="icon"></span><b>Datos enviados con éxito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Datos Actualizados</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Error Cedula repetida.</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 4:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Complete todos los campos.</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 5:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Ingresa una cedula.</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 6:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Datos no encontrados.</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 7:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Ingrese un codigo de producto.</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }


}

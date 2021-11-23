import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private objetohttp: HttpClient, private toastr: ToastrService, private router: Router) { }

  //////////////////// GET ///////////////////
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  res: any;
  contenido: any;
  urlapiGET: string = "http://localhost:8080/api/clientes";

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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapiGET).pipe
      (catchError(this.handleError));

    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [
        {
          title: 'Cédula',
        },
        {
          title: 'Teléfono',
        },
        {
          title: 'Nombre completo',
        },
        {
          title: 'Correo electrónico',
        },
        {
          title: 'Dirección',
        }
      ],
      pageLength: 10,
      responsive: true,
      language: {
        processing: "Procesando...",
        search: "Buscar:",
        lengthMenu: "Mostrar _MENU_ elementos",
        info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
        infoEmpty: "Mostrando ningún elemento.",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Cargando registros...",
        zeroRecords: "No se encontraron registros",
        emptyTable: "No hay datos disponibles en la tabla",
        paginate: {
          first: "Primero",
          previous: "Anterior",
          next: "Siguiente",
          last: "Último"
        },
        aria: {
          sortAscending: ": Activar para ordenar la tabla en orden ascendente",
          sortDescending: ": Activar para ordenar la tabla en orden descendente"
        }
      }
    };
  }


  ////////////// POST /////////////////////

  codigorespuesta!: number;
  cedula!: string;
  telefono!: string;
  nombrecompleto!: string;
  email!: string;
  direccion!: string;

  postData() {

    if (this.cedula == null || this.telefono == null || this.nombrecompleto == null || this.email == null || this.direccion == null) {
      this.codigorespuesta = 1;
      this.showNotification('top', 'right', 3);
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
        if (this.codigorespuesta == 201) {
          this.codigorespuesta = 2;
          this.showNotification('top', 'right', 1);
        } else {
          this.codigorespuesta = 3;
          this.showNotification('top', 'right', 2);
        }
      });
    }
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
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Error al registrar los datos.</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
      case 3:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Complete todos los campos.</b>', '', {
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

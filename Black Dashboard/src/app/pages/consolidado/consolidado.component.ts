import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';

@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.scss']
})
export class ConsolidadoComponent implements OnInit {

  constructor(private objetohttp: HttpClient) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  res: any;
  //variable contenedora de contenidos
  contenido: any;
  //url api get
  urlapiGET: string = "http://localhost:8080/api/consolidados";
  totalventa: number = 0;



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
    this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log(this.contenido);
      this.dtTrigger.next(this.dtOptions);
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      columns: [{
        title: 'Ciudad',
      }, {
        title: 'Total ventas',
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

    this.res = this.objetohttp.get(this.urlapiGET);
    this.res.subscribe((data: any[]) => {
      this.contenido = data;
      console.log(this.contenido);
      for (let i = 0; i < this.contenido.length; i++) {
        this.totalventa = this.totalventa + this.contenido[i].totalventas;
        console.log(this.totalventa)
      }
    })
  }
}

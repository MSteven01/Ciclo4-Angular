import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductosComponent } from './productos.component';

@Injectable({
  providedIn: 'root'
})

export class FileUploadService {

  // API url
  baseApiUrl = "http://localhost:8080/api/productos";

  //inicializando objeto http
  constructor(private http: HttpClient) { }

  //variable auxiliar que almacena resultados de cada envio
  resultados = Array();

  // Retorna un objeto observable
  upload(file: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      //leyendo el contenido
      var reader = new FileReader();
      reader.onloadend = (e) => {

        let lines = reader.result as string;

        let separados = lines.split("\n");

        for (let lineaactual of separados) {
          lineaactual.replace(";", ",");
          let columnas = lineaactual.split(",", 6);
          this.http.post(
            this.baseApiUrl,
            {/**  "id": "61916d68c568bb196723ac59",
  "codigoproducto": null,
  "ivacompra": null,
  "nitproveedor": null,
  "nombreproducto": null,
  "preciocompra": null,
  "precioventa": null 
  
  {
  "codigoproducto": 0,
  "id": "string",
  "ivacompra": 0,
  "nitproveedor": 0,
  "nombreproducto": "string",
  "preciocompra": 0,
  "precioventa": 0
}*/
              codigoproducto: columnas[0],
              ivacompra: columnas[1],
              nitproveedor: columnas[2],
              nombreproducto: columnas[3],
              preciocompra: columnas[4],
              precioventa: columnas[5]
            },
            { observe: 'response' }).subscribe(
              (response: any) => {
                let resaux = [];
                resaux[0] = response.status;
                this.resultados.push(resaux);
              }
            );
        }
        //console.log(this.resultados);
        resolve(this.resultados);
      };
      reader.readAsText(file);
    });
  }
}
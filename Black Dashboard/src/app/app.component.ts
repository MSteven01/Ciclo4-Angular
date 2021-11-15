import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
// OnInit para que cargue antes de que la pagina cargue
  title = "Almacenes la generica";
//-------- Consumo de apis----------//
  res:any; //varibale any para traer la api
  contenido:any; 
  urlapi:string="http://universities.hipolabs.com/search?name=middle";
  
  constructor(private objetohttp:HttpClient){}

  ngOnInit(): void {
    this.res = this.objetohttp.get(this.urlapi);
    this.res.subscribe((data:any[])=>{
      this.contenido=data;
      console.log(this.contenido);
    });
    
  }
  
  //Metodo Post
 //! Para permitir null
  codigorespuesta!:number;
  
  username!:string;
  password!:string;
  nombre!:string;
  correo!:string;


  postData(){
    this.objetohttp.post<any>(
      //url de la bd
      "http://localhost:8080/api/usuarios",
      //JSON DUMMY
      {
          "email": this.correo,
          "nombrecompleto": this.nombre,
          "password": this.password,
          "username": this.username
      },
      {
        observe:'response'
      }    
    ).subscribe(response=>{//Codigo de respuesta
      this.codigorespuesta=response.status;
    });
  }

}

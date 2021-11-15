import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title:"Login almacenes la generica";
  constructor(private router:Router) {}

  ngOnInit(): void {
  }
  user_correcto:String="admininicial";
  pass_correcto:String="admin123456";

  user:String="";
  pass:String="";

  verificacion_correcto:number = -2;

  comparar(){
    if(this.user === this.user_correcto && this.pass === this.pass_correcto){
      this.router.navigate(['/dashboard']);
      }else{
        if(this.user=="" && this.pass==""){
        this.verificacion_correcto = -1;
      }else{
        this.verificacion_correcto = -0;
    }
  }
}

}

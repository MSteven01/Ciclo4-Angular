import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";//Importacion para apis
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { LoginComponent } from './login/login.component';
import { NavbarloginComponent } from './navbarlogin/navbarlogin.component';
import { ProductosComponent } from './pages/productos/productos.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,//Importacion necesaria para el consumo de apis
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    DataTablesModule,
    ToastrModule.forRoot()   
  ],
  declarations: [AppComponent, AdminLayoutComponent, LoginComponent, NavbarloginComponent, ProductosComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

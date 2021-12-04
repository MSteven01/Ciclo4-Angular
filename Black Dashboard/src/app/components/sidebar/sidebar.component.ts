import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Inicio",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/productos",
    title: "Productos",
    icon: "icon-app",
    class: ""

  },
  {
    path: '/clientes',
    title: 'Clientes',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/ventas',
    title: 'Ventas',
    icon: 'icon-basket-simple',
    class: ''
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{

    titulo: 'dashboard',
    icono: '"nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios' },
      { titulo: 'Productos', url: 'productos' },
      { titulo: 'Stock', url: 'stock' },
    ]

  }];
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { CuentasService } from 'src/app/services/cuentas.service' 
@Component({
  selector: 'app-listar-cuentas',
  templateUrl: './listar-cuentas.component.html',
  styleUrls: ['./listar-cuentas.component.css']
})
export class ListarCuentasComponent implements OnInit {
  private listaCuentas: [];

  constructor(

    private cuentasService: CuentasService
  ) { }

  ngOnInit() {
    this.cargarListaCuentas();
  }

  cargarListaCuentas() {
    try {
      this.cuentasService.getListaCuentas().subscribe(
        (response: any) => {
          this.listaCuentas = response;
        },
        error =>{
          console.log("cargarListaCuentas Service error", error);
        }
      );

    } catch(error){ console.log('cargarListaCliente error', error);}
  }

}

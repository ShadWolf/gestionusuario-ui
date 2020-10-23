import { Component, OnInit } from '@angular/core';
import { CuentasTransporteService } from 'src/app/services/cuentas-transporte.service'
import { CuentasService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-crear-cuentas',
  templateUrl: './crear-cuentas.component.html',
  styleUrls: ['./crear-cuentas.component.css']
})

export class CrearCuentasComponent implements OnInit {
  private cuentasForm = { cuentas: '', idClientes: null}
  private cliSel;

  constructor(
    private cuentasTransporteService: CuentasTransporteService,
    private cuentasService: CuentasService
  ) { 
    this.cuentasTransporteService.cuentasObservable.subscribe(
      cliSel =>{
        this.cliSel = cliSel;
        this.cuentasForm.idClientes = this.cliSel.idClientesSel;
      }
    );
  }

  ngOnInit() {
  }

  crearListaClientesSeleccionados(){
     let clientesSelect = [];
    this.cliSel.idClientesSel.forEach( id => {
      console.log("id", id);
      let cli =  this.cliSel.listaClientes.find( x => x.id === id);
      if(cli){
        let a = {
          nombre:  cli.nombre,
          apellido: cli.apellido
        }
        clientesSelect.push(cli);
      }
      
      }
    );
    console.log("fin -- clientesSelect", clientesSelect);
    return clientesSelect;
  }
  guardarCuentas(){
    let a: Set<Number> = this.cuentasForm.idClientes;
    
    if((a.size > 0 ) &&
    (this.cuentasForm.cuentas != '')){
      try {
        const listaidClientes = this.crearListaClientesSeleccionados();
        const request = {
          cuenta: this.cuentasForm.cuentas,
          idCliente: listaidClientes
        };

        this.cuentasService.guardarCuentas(request).subscribe(

        );
      } catch(error) {
        console.log("error", error);
      }

    }
  }
}

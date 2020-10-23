import { Component, OnInit } from '@angular/core';
import { ClientesTransporteService } from 'src/app/services/clientes-transporte.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from 'src/app/models/clientes';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {
  private listaClientes: Clientes[];

  selectedRowIds: Set<number> = new Set<number>();
  selectedClientes: [];

  constructor(
    private clienteServ: ClientesService,
    private clientesTransport: ClientesTransporteService
  ) {
    this.clientesTransport.clientesObservable.subscribe( refrescar => {
      if(refrescar){
        this.cargarListaCliente();
      }
     
    });
  }

  ngOnInit() {
    this.cargarListaCliente();
  }

  cargarListaCliente() {
    try {
      this.clienteServ.getListaCliente().subscribe(
        (response: any) => {
          this.listaClientes = response;
          console.log('cargarLista response', response);
        },
        error => {
          console.log('error communication,', error)
        }
      );

    } catch (error) {
      console.log("GuardarCliente error", error);
    }
  }
  seleccionaIdLinea(id: any) {
    return this.selectedRowIds.has(id);
  }
  onLineaClick(id) {
    if(this.selectedRowIds.has(id)) {
     this.selectedRowIds.delete(id);
    }
    else {
      this.selectedRowIds.add(id);
    }
  }
}

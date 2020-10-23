import { Component, OnInit } from '@angular/core';
import { ClientesService} from '../../services/clientes.service';
import { ClientesTransporteService } from 'src/app/services/clientes-transporte.service';

@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit {

  private clienteForm = { nombre: '', apellido: ''};
  constructor(
    private clienteServ: ClientesService,
    private clienteTransporteServ: ClientesTransporteService  
  ) { }

  ngOnInit() {
  }

  guardarCliente(){
    try {
      const request= {
        nombre: this.clienteForm.nombre,
        apellido: this.clienteForm.apellido
      }

      this.clienteServ.postCliente(request).subscribe(
        (success: any) => {
          this.clienteTransporteServ.refrescarListaClientes(true);
          this.clienteForm.nombre ='';
          this.clienteForm.apellido = '';
        }, 
        error => {
          console.log('error communication,', error)
        }
      );

    } catch (error){
      console.log("GuardarCliente error", error);
    }
  }
}

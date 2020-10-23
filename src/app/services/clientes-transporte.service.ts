import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesTransporteService {
  private clientesSubject = new Subject<any>();
  public clientesObservable = this.clientesSubject.asObservable();
  
  public refrescarListaClientes(refrescar: boolean){
    this.clientesSubject.next(refrescar);
  }
  
}

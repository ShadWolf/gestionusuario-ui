import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentasTransporteService {
  private cuentasSubject  = new Subject<any>();
  public cuentasObservable = this.cuentasSubject.asObservable();
 
  public enviarClientesSeleccionados(cliSel: any){
    this.cuentasSubject.next(cliSel);
  }
}

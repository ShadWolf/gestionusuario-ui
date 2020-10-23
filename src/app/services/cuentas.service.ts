import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})

export class CuentasService {

  constructor(
    private http: HttpClientService
  ) { }
  
  public getListaCuentas(){
    try{
      const result =  this.http.getData('/cuentas/listar')
      return result;
    }catch(error){
      console.log("getListaCuentas", error);
    }
  }

  public guardarCuentas(request: any){
    try{
      const result =  this.http.postData('/cuentas/crear', request);
      return result;
    }
    catch(error){ 
      console.log('guardarCuentas error', error);
    }

  }
}

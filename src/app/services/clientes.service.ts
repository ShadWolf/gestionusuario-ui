
import { Injectable } from '@angular/core';
import {HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClientService 

  ) { }

  getListaCliente(){
    try{
      const result =  this.http.getData('/clientes/listar');
      return result;
    } catch(error){
      console.log('getListaCliente error', error);
    }
  }
  
  postCliente(request: any){
    try{
      const result =  this.http.postData('/clientes/crear', request);
      return result;
    }
    catch(error){ 
      console.log('postCliente error', error);
    }
  }
}

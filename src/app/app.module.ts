import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CrearClientesComponent } from './componentes/crear-clientes/crear-clientes.component';
import { ListarClientesComponent } from './componentes/listar-clientes/listar-clientes.component';
import { CrearCuentasComponent } from './componentes/crear-cuentas/crear-cuentas.component';
import { ListarCuentasComponent } from './componentes/listar-cuentas/listar-cuentas.component';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CrearClientesComponent,
    ListarClientesComponent,
    CrearCuentasComponent,
    ListarCuentasComponent,
    PaginaPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

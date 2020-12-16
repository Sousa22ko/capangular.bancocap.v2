import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/* import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker'; */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { LoginComponent } from './component/login/login.component';
import { ContaComponent } from './component/conta/conta.component';
import { RecuperarSenhaComponent } from './component/recuperar-senha/recuperar-senha.component';
import { HomeComponent } from './component/home/home.component';
import { CPFPipe } from './cpf.pipe';
import { ClienteViewComponent } from './component/cliente/cliente-view/cliente-view.component';
import { ContaViewComponent } from './component/conta/conta-view/conta-view.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepositoComponent } from './component/deposito/deposito.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { SaqueComponent } from './component/saque/saque.component';
import { TransferenciaComponent } from './component/transferencia/transferencia.component';
import { ExtratoComponent } from './component/extrato/extrato.component';
import { ButtonComponent } from './component/button/button-renderer.component';
import { maskConfig2, API_CONFIG_URL} from './token';
import { ListClientesService } from './service/list-clientes.service';

const maskConfig: Partial<IConfig> = {
  validation: false,
};
export const customCurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
}

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    ContaComponent,
    RecuperarSenhaComponent,
    HomeComponent,
    CPFPipe,
    ClienteViewComponent,
    ContaViewComponent,
    UsuarioComponent,
    DepositoComponent,
    SaqueComponent,
    TransferenciaComponent,
    ExtratoComponent,
    ButtonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    AgGridModule.withComponents([ButtonComponent]),
    BrowserAnimationsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  providers: [
    { provide: 'API_URL', useValue: API_CONFIG_URL },
    ListClientesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

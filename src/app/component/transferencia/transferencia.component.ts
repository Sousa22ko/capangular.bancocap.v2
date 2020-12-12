import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dateFormat } from 'src/app/util/dateFormat';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  dataHora: string = new Intl.DateTimeFormat('br', dateFormat).format(new Date());
  valor:number = 0;
  hashOrigem:string;
  hashDestino:string;

  error: boolean;
  errorDesc: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDeposito(){
    if(this.dataHora.length < 16){
      this.error = true;
      this.errorDesc = "Data e hora invalida";
    }
    else if(this.valor <= 0){
      this.error = true;
      this.errorDesc = "Valor insufficiente";
    }
    else if(!this.hashOrigem || (this.hashOrigem && this.hashOrigem.length == 0)){
      this.error = true;
      this.errorDesc = "Identifique a conta de origem";
    }
    else if(!this.hashDestino || (this.hashDestino && this.hashDestino.length == 0)){
      this.error = true;
      this.errorDesc = "Identifique a conta de destino";
    }
    else{
      this.router.navigate(["/home"]);
    }
  }

}

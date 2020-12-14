import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dateFormat } from 'src/app/util/dateFormat';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['../../app.component.css']
})
export class DepositoComponent implements OnInit {

  dataHora: string = new Intl.DateTimeFormat('br', dateFormat).format(new Date());
  valor:number = 0;
  hash:string;

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
    else if(!this.hash || (this.hash && this.hash.length == 0)){
      this.error = true;
      this.errorDesc = "Identifique a conta de destino";
    }
    else{
      this.router.navigate(["/home"]);
    }
  }
}

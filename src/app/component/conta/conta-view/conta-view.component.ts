import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/model/conta.model';
import { currencyFormatter } from 'src/app/util/currencyFormatter';

@Component({
  selector: 'app-conta-view',
  templateUrl: './conta-view.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ContaViewComponent implements OnInit {
  conta: Conta = {cliente: 'Kalila', hash:'1234463131', saldo: 2516};

  colunas = [
    { field: 'cliente' },
    { field: 'hash' },
    { field: 'saldo', valueFormatter: params => currencyFormatter(params.data.saldo, 'R$')  },
  ];

  linhas = [
      { cliente: 'Arthur', hash: '001', saldo: 500 },
      { cliente: 'Daniel', hash: '002', saldo: 255 },
      { cliente: 'Kalila', hash: '003', saldo: 950 },
      { cliente: 'Nilson', hash: '004', saldo: 260},
      { cliente: 'Reinaldo', hash: '005', saldo: 389},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

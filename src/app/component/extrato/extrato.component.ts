import { Component, OnInit } from '@angular/core';
import { currencyFormatter } from 'src/app/util/currencyFormatter';
import { tipoOperacao } from "../../model/extrato.model"

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  
  colunas = [
    { field: 'dataHora' },
    { field: 'valor', valueFormatter: params => currencyFormatter(params.data.valor, 'R$')},
    { field: 'tipoOperacao'},
    { field: 'hashOrigem'}
  ];

  linhas = [
      { dataHora: '31/12/2020 15:42', valor:427.33, tipoOperacao: tipoOperacao.saque , hashOrigem: '001' },
      { dataHora: '19/09/2020 09:26', valor:148, tipoOperacao: tipoOperacao.transferencia , hashOrigem: '002' },
      { dataHora: '02/07/2020 11:32', valor:425.98, tipoOperacao: tipoOperacao.deposito , hashOrigem: '003' },
      { dataHora: '14/06/2020 12:37', valor:542.30, tipoOperacao: tipoOperacao.saque , hashOrigem: '004'},
      { dataHora: '21/05/2020 13:19', valor:312.72, tipoOperacao: tipoOperacao.deposito , hashOrigem: '005'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

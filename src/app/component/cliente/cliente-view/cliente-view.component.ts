import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['../../../app.component.css']
})
export class ClienteViewComponent implements OnInit {

  colunas = [
    { field: 'nome' },
    { field: 'cpf' },
  ];

  linhas = [
      { nome: 'Arthur', cpf: '001.222.333-55' },
      { nome: 'Daniel', cpf: '002.999.888-77' },
      { nome: 'Kalila', cpf: '003.777.666-55'},
      { nome: 'Nilson', cpf: '004.444.333-44'},
      { nome: 'Reinaldo', cpf: '005.999.000-11'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

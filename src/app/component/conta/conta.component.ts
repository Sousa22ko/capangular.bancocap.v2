import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContaComponent implements OnInit {
  error = false;
  errorDesc = '';
  clienteSelecionado = '';
  conta: Conta[] = [
    {cliente: 'Arthur'},
    {cliente: 'Daniel'},
    {cliente: 'Kalila'},
    {cliente: 'Nilson'},
    {cliente: 'Reinaldo'}
  ];

  constructor(private router: Router) { }

  onCadastrarConta(formConta: NgForm){
    console.log(formConta.value.hash, formConta.value.cliente);

     if (formConta.value.hash === '' ) {
      this.error = true;
      this.errorDesc = 'Preencha os campos';
    } else  if ( formConta.value.cliente === ''  ){
      this.error = true;
      this.errorDesc = 'Preencha o dado cliente';
    } else{
      this.error = false;
      this.router.navigate(['/dados-conta']);
    }
  }

  ngOnInit(): void {
  }

}

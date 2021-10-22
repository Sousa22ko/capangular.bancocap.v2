import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.model';
import { ListClientesService } from 'src/app/service/list-clientes.service';
import { validateCPF } from 'src/app/util/validateCPF';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['../../app.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente = {};
  error = false;
  errorDesc = '';

  constructor(private router: Router, private service: ListClientesService) { }

  onCadastrar(){
    const valido = validateCPF(this.cliente.cpf);

    if (!this.cliente.nome) {
      this.error = true;
      this.errorDesc = 'Preencha o campo nome';
    } else if (!this.cliente.cpf) {
      this.error = true;
      this.errorDesc = 'Insira o CPF';
    } else if (!valido) {
      this.error = true;
      this.errorDesc = 'Insira um CPF válido';
    } else {
      this.error = false;
      this.service.save(this.cliente);
      this.router.navigate(['/perfil']);
    }
  }

  ngOnInit(): void {
  }

}

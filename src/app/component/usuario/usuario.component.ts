import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['../../app.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario = {};
  error = false;
  errorDesc = '';

  constructor(private router: Router) { }

  onUser(formUser: NgForm){
    console.log(formUser.value);
    if (formUser.value.nome === '') {
      this.error = true;
      this.errorDesc = 'Preencha o campo nome';
    } else if (formUser.value.email === ''){
      this.error = true;
      this.errorDesc = 'Preencha o campo email';
    } else if (!formUser.value.dataDeNascimento){
      this.error = true;
      this.errorDesc = 'Preencha o campo data de nascimento';
    }
     else{
      this.error = false;
      this.onUserErro(formUser.value.password, formUser.value.confirmPassword);
      //this.router.navigate(['/perfil']);
    }
  }

  onUserErro(confirmPassword: string, password: string){
    if (confirmPassword !== password) {
      this.error = true;
      this.errorDesc = 'As senhas não coincidem';
    } else if(!password){
      this.error = true;
      this.errorDesc = 'Preencha o campo senha';
    } else{
      this.error = false;
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
  }

}

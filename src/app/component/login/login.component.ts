import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../app.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario ={email:'', senha: '' };
  error = false;
  errorDesc = '';

  constructor(private router: Router) { }

  onLogin(formLogin: NgForm){

  }

  onLoginErro(email: string, password: string){
    console.log(email, password);
    if (!email) {
      this.error = true;
      this.errorDesc = 'Preencha o campo e-mail';
    } else if(!password){
      this.error = true;
      this.errorDesc = 'Preencha o campo senha';
    }
  }

  ngOnInit(): void {
  }

}

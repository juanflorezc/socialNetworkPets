import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    correo: [null, Validators.required],
    pass: [null, Validators.required]    
  });

  constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {}

  onSubmit() {
    this.UserService.IniciarSesion({Correo:this.loginForm.get("correo").value,    
    Passwprd:this.loginForm.get("pass").value}).subscribe(rest=>{
      if(rest)
      {
        alert("Usuario logeado correctamente.");
        this.router.navigate(['ventas']);
      }
      else{
        alert("No existe usuario o la combinación de usuario y contraseña no corresponden.");
      }      
    });
  
  }
}

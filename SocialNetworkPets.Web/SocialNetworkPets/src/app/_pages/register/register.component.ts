import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  addressForm = this.fb.group({    
    email: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    password: [null, Validators.required],    
  });


  constructor(private fb: FormBuilder, private UserService: UserService, private router: Router) {

  }

  onSubmit() {
    this.UserService.CreateUser({Correo:this.addressForm.get("email").value,
    Nombres:this.addressForm.get("firstName").value,
    Apellidos:this.addressForm.get("lastName").value,
    Passwprd:this.addressForm.get("password").value}).subscribe(rest=>{
      if(rest.UsuarioId>0)
      {
        alert("Usuario registrado correctamente");
        this.router.navigate(['']);
      }
      else{
        alert("Error al registrar usuario");
      }      
    });
  }
}

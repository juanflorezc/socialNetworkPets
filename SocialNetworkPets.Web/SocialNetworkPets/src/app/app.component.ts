import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SocialNetworkPets';
  loginForm = this.fb.group({
    correo: [null, Validators.required],
    pass: [null, Validators.required]    
  });

  constructor(private fb: FormBuilder) {}

  onSubmit()
  {
    
  }
}



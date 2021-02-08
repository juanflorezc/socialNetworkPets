import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private actualUserSubject: BehaviorSubject<Usuario>;
  public actualUser: Usuario;
  public actualUser$: Observable<Usuario>;

  constructor(private http: HttpClient, private router: Router) { 
    this.actualUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('actualUser')));
    this.actualUser$ = this.actualUserSubject.asObservable();
  }

  IniciarSesion(usuario: Usuario)
  {
    return this.http.post<any>(`${environment.apiUrl}/users/login`, usuario).
    pipe(
      map(user => {
      // login successful if there's a jwt token in the response                
      console.log(user);

      if (user && user.Token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              
              let usuariocompleto=user;
              console.log(usuariocompleto);
              localStorage.setItem('actualUser', JSON.stringify(usuariocompleto));              
              this.actualUser = usuariocompleto;
              this.actualUserSubject.next(usuariocompleto);
      }
      //console.log(user);
      return user;
      }));
  }

  CreateUser(usuario:Usuario)
  {
    return this.http.post<any>(`${environment.apiUrl}/users/create`, usuario);
  }

  public get actualUserValue(): Usuario {
    return this.actualUserSubject.value;
  }
  public get currentUserValue(): Usuario {
      return this.actualUserSubject.getValue();
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('actualUser');
    this.actualUserSubject.next(null);
    this.actualUser = null;
    this.router.navigate(['']);
  }
  

}


export interface Usuario{
  
  usuarioId?: number;
  Correo: string;
  Nombres?: string;
  Apellidos?: boolean;
  Passwprd?: boolean;
  Eliminado?: boolean;
  Token?:any;
  FechaCreacion?:Date;
}
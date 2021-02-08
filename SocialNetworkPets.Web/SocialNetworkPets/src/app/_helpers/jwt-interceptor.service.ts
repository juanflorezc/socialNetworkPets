import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, filter, finalize, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor  {
  mensajeenviado: boolean=false;
  constructor(private authenticationService: UserService) { }
  private isTokenRefreshing: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(this.attachTokenToRequest(request)).pipe(
          tap((event : HttpEvent<any>) => {
              if(event instanceof HttpResponse) 
              {
                 // console.log("Success");
              }
          }),
          catchError((err) : Observable<any> => {
              if(err instanceof HttpErrorResponse) {
                  switch((<HttpErrorResponse>err).status) 
              {
                      case 401:
                          console.log("Token expired. Attempting refresh ...");
                          if(!this.mensajeenviado)
                          {
                              alert("Su sesión ha expirado.");
                              this.mensajeenviado=true;
                          }                          
                          return this.handleHttpResponseError(request, next);
                      case 400:
                          return this.handleError(err);
                  }
              } else 
              {
                  return throwError(err);
              }
          })
         );
      
  }

   // Method to handle http error response
   private handleHttpResponseError(request : HttpRequest<any>, next : HttpHandler) 
   {

       // First thing to check if the token is in process of refreshing
       if(!this.isTokenRefreshing)  // If the Token Refresheing is not true
       {
           this.isTokenRefreshing = true;

           // Any existing value is set to null
           // Reset here so that the following requests wait until the token comes back from the refresh token API call
           this.tokenSubject.next(null);
          return <any>this.authenticationService.logout();
       }
       else 
       {
           this.isTokenRefreshing = false;
           if(this.authenticationService.currentUserValue){
           return this.tokenSubject.pipe(filter(token => token != null),
               take(1),
               switchMap(token => {
               return next.handle(this.attachTokenToRequest(request));
               }));
              }else{
                  return this.handleError(new HttpErrorResponse({error:"Authentication Fail", status: 401}));
              }
       }


   }

   
  // Global error handler method 
  public handleError(errorResponse : HttpErrorResponse) 
  {
      let errorMsg : string;

      if (errorResponse.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMsg = "An error occured : " + errorResponse.error.message;
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          if ([401, 403].indexOf(errorResponse.status) !== -1) {
              //     // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                if(!this.mensajeenviado)
                {
                    alert("Su sesión ha expirado.");
                    this.mensajeenviado=true;
                }
              
              this.authenticationService.logout();
              //location.reload(true);
          } else {
              // console.log(err);
              errorMsg = `Backend returned code ${errorResponse.status}, body was: ${errorResponse.error}`;
            console.log(errorMsg);
          }
      }
      return throwError(new Error(errorMsg));
  }

  private attachTokenToRequest(request: HttpRequest<any>) 
  {
      // add authorization header with jwt token if available
      console.log(this.authenticationService.currentUserValue);
      let currentUser = this.authenticationService.currentUserValue;
      if (currentUser && currentUser.Token) {
        console.log("tiene token");
        console.log(currentUser.Token);
          request = request.clone({
              setHeaders: {
                  Authorization: `Bearer ${currentUser.Token.Value}`
              }
          });
      }
      else{
        console.log("no tiene token");
      }
      return request;
  }
}

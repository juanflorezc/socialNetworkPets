import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  getVentas()
  {
    //string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha
    return this.http.get<any>(`${environment.apiUrl}/sales/getSales`)
  }

  getVentasByNit(nit:string)
  {
    //string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha
    return this.http.get<any>(`${environment.apiUrl}/sales/getSales`)
  }

  getVentasbyProduct(productname:string)
  {
    //string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha
    return this.http.get<any>(`${environment.apiUrl}/sales/getSales`)
  }
  getVentasByProveedor(proveedorName:string)
  {
    //string? prmNit, string? prmProducto, string? prmProveedor, DateTime? prmFecha
    return this.http.get<any>(`${environment.apiUrl}/sales/getSales`)
  }
  getVentasByDate(date:Date)
  {
    return this.http.get<any>(`${environment.apiUrl}/sales/getSales`)
  }
}

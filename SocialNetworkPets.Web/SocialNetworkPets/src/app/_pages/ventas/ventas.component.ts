import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { VentasService } from 'src/app/_services/ventas.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent implements  OnInit {
  @ViewChild( MatPaginator, {static: true} ) paginator: MatPaginator;
  @ViewChild( MatSort, { static: true } ) sort: MatSort;
  dataSource= new MatTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ProveedorString', 'ProductoString','Cantidad','FechaCreacion'];

  ngOnInit() {
    this.ventaServices.getVentas().subscribe(response=>    {
      console.log(response)
      this.dataSource = new MatTableDataSource( response );
      this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
            this.paginator._intl.getRangeLabel = (page, pageSize, length) => {
              if (length === 0 || pageSize === 0) {
                return '0 de ' + length;
              }
              length = Math.max(length, 0);
              const startIndex = page * pageSize;
              // If the start index exceeds the list length, do not try and fix the end index to the end.
              const endIndex = startIndex < length ?
                Math.min(startIndex + pageSize, length) :
                startIndex + pageSize;
              return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
            };
    });
    
  }


  constructor(private ventaServices: VentasService, private router: Router) {
  }
  regresar(){
    this.router.navigate(['']);
  }

}

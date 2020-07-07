import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, typeMessage: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [typeMessage]
    });
  }

  create(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  read(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  readById(id: string): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IProduct>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  update(product: IProduct): Observable<IProduct> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<IProduct>(url, product).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  delete(id: number): Observable<IProduct> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IProduct>(url).pipe(
      map(obj => obj),
      catchError(e => this.handleError(e))
    );
  }

  handleError(e: any): Observable<any> {
    this.showMessage(e.message, 'msg_error')
    return EMPTY;
  }

}

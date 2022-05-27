import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll(): Observable<Categoria[]> {
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url);
  }

  findById(id: String): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url);
  }

  create(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url, categoria);
  }

  delete(id: String): Observable<void>{
    const url=`${this.baseUrl}/categorias/${id}`
    return this.http.delete<void>(url)
  }

  message(str: String){

    this._snack.open(`${str}`,'Ok',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })


  }
}

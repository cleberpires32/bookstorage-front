import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl: string = environment.baseUrl;

  ngOnInit(): void {}

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }



  findByIdPorCategoria(id_cat: string): Observable<Livro[]> {
    //const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    const url = `${this.baseUrl}/livros/${id_cat}/categoria`
    console.log("findbyidporcategoria")
    return this.http.get<Livro[]>(url)
  }

  create(livro: Livro, id_cat: string ): Observable<Livro> {
    const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    return this.http.post<Livro>(url, livro)
  }

  update(livro: Livro, id: String): Observable<Livro> {
    const url = `${this.baseUrl}/livros/${id}`
    return this.http.put<Livro>(url, livro)
  }

  findById(id: string): Observable<Livro>{
   const url = `${this.baseUrl}/livros/${id}`;
   return this.http.get<Livro>(url);

  }

  message(str: String){

    this._snackBar.open(`${str}`,'Ok',{
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}

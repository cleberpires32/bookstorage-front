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

  ngOnInit(): void {

  }
  constructor(private http: HttpClient ) { }


  findByIdPorCategoria(id_cat: string): Observable<Livro[]> {
    //const url = `${this.baseUrl}/livros?categoria=${id_cat}`
    const url = `${this.baseUrl}/livros/${id_cat}/categoria`
    console.log(url)
    return this.http.get<Livro[]>(url)
  }

}

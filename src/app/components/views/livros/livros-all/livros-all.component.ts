import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-all',
  templateUrl: './livros-all.component.html',
  styleUrls: ['./livros-all.component.css']
})
export class LivrosAllComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome_autor', 'titulo', 'texto','acoes']
  livros: Livro[] =[]
  id_cat: string=''

  constructor(
    private service: LivroService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
    this.findAll()
  }

  findAll(): void{
    this.service.findByIdPorCategoria(this.id_cat).subscribe(response => {
      this.livros = response
      console.log(this.livros[0])
    })
  }
}

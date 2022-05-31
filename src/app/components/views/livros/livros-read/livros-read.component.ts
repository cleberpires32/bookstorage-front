import { LivroService } from './../livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from './../livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros-read',
  templateUrl: './livros-read.component.html',
  styleUrls: ['./livros-read.component.css']
})
export class LivrosReadComponent implements OnInit {

  livro: Livro = {
    id: '',
    nome_autor: '',
    titulo: '',
    texto: ''
  }

  id_li = ''
  id_cat = ''

  constructor(
    private actvR: ActivatedRoute,
    private serve: LivroService,
    private route: Router) { }

  ngOnInit(): void {
    this.id_li = this.actvR.snapshot.paramMap.get('id_li')!;
    this.id_cat = this.actvR.snapshot.paramMap.get('id_cat')!;
    this.findById();
  }

  findById(): void {
    this.serve.findById(this.id_li).subscribe(response => {
      this.livro = response;
    })
  }

  cancelar(): void {
    this.route.navigate([`categorias/${this.id_cat}/livros`])
  }
}

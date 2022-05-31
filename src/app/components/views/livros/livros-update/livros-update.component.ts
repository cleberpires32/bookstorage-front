import { LivroService } from './../livro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Livro } from './../livro.model';

@Component({
  selector: 'app-livros-update',
  templateUrl: './livros-update.component.html',
  styleUrls: ['./livros-update.component.css']
})
export class LivrosUpdateComponent implements OnInit {

  livro: Livro = {
    id: '',
    nome_autor: '',
    titulo: '',
    texto: ''
  }

  titulo = new FormControl('', [Validators.minLength(3)])
  nome_autor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])

  id_cat = ''
  id_li = ''

  constructor(
    private route: Router, 
    private actRoute: ActivatedRoute,
    private service: LivroService) { }

  ngOnInit(): void {
    this.id_cat = this.actRoute.snapshot.paramMap.get('id_cat')!;
    this.id_li = this.actRoute.snapshot.paramMap.get('id_li')!;
    this.findById();
  }

  editar(): void {
    this.service.update(this.livro,this.id_li!).subscribe(response =>{
      this.service.message('Livro atualizado com sucesso.')
      this.route.navigate([`categorias/${this.id_cat}/livros`]);
    },err =>{
      this.service.message('Erro interno tente mais tarde.')
      this.route.navigate([`categorias/${this.id_cat}/livros`]);
    })
  }

  cancel(): void {
    this.route.navigate([`categorias/${this.id_cat}/livros`])
  }

  findById(): void { 
    this.service.findById(this.id_li!).subscribe(resposta =>{
        this.livro = resposta;
    })
  }

  getMessage() {

    if (this.titulo.invalid) {
      return "O TITULO deve conter entre 3 e 100 caracteres."
    }
    if (this.nome_autor.invalid) {
      return "O TITULO deve conter entre 3 e 50 caracteres."
    }
    if (this.texto.invalid) {
      return "O TITULO deve conter entre 3 e 2.000.000 caracteres."
    }
    return false;
  }
}

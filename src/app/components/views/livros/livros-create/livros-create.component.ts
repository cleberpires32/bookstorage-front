import { Livro } from './../livro.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LivroService } from './../livro.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ForwardRefHandling } from '@angular/compiler';

@Component({
  selector: 'app-livros-create',
  templateUrl: './livros-create.component.html',
  styleUrls: ['./livros-create.component.css']
})
export class LivrosCreateComponent implements OnInit {

  titulo = new FormControl('', [Validators.minLength(3)])
  nome_autor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])

  id_cat: string = ''

  livro: Livro = {
    id: '',
    nome_autor: '',
    titulo: '',
    texto: ''
  }

  constructor(
    private route: ActivatedRoute,
    private service: LivroService,
    private router: Router) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
  }

  create(): void {
    console.log(this.id_cat + "  esse pé o id da categoria")
    this.service.create(this.livro, this.id_cat).subscribe(response => {
      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.service.message("Livro criado com sucesso.!")
    }, err => {

      this.router.navigate([`categorias/${this.id_cat}/livros`])
      this.service.message("Houve um erro ao criar o Livro. Tente mais tarde.!")

    })
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`])
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

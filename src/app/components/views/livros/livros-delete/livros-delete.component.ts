import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Livro } from '../livro.model';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livros-delete',
  templateUrl: './livros-delete.component.html',
  styleUrls: ['./livros-delete.component.css']
})
export class LivrosDeleteComponent implements OnInit {

  livro: Livro = {
    id: '',
    nome_autor: '',
    titulo: '',
    texto: ''
  }

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

  delete(): void {
    this.service.delete(this.id_li!).subscribe(response =>{
      this.service.message('Livro deletado com sucesso.')
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

}

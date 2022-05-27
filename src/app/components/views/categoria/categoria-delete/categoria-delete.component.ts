import { Categoria } from './../categoria.model';
import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private routerAtiv: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.routerAtiv.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById() {
   this.service.findById(this.categoria.id!).subscribe((response) => {
     
     this.categoria.nome = response.nome;
     this.categoria.descricao = response.descricao;
   })
  }

  delete(): void{
    this.service.delete(this.categoria.id!).subscribe((response) => {
      this.route.navigate(['categorias'])
      this.service.message('Categoria deletada com sucesso!');
    },err => {this.service.message(err.error.error)})
    
  }

  cancelar(){
    this.route.navigate(['categorias']);
  }
}

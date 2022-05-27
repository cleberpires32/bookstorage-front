import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {

  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  };

  constructor(
    private service: CategoriaService, 
    private acTrouter: ActivatedRoute, 
    private route: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.acTrouter.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((response) => {
      this.categoria.nome = response.nome;
      this.categoria.descricao = response.descricao;
    })
  }

  editar(): void {
    console.log(this.categoria.descricao)
    this.service.update(this.categoria).subscribe((response) => {
      this.route.navigate(['categorias'])
      this.service.message('Categoria atulizada com sucesso.')
    },err =>{
      this.service.message('Falta validar todos os campos se estão preenchidos corretamente');
    })
  }
    cancel(): void{
    this.route.navigate(['categorias']);
  }
}

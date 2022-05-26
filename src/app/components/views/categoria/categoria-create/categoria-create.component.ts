import { Router } from '@angular/router';
import { CategoriaService } from './../categoria.service';
import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})

export class CategoriaCreateComponent implements OnInit {

  @Input() categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.message("Categoria criada com sucesso!")
    }, err => {
      this.service.message("Falta implementar validaçoes dos campos!")

    })
  }

  cancel(){
    this.router.navigate(['categorias']);
  }

}

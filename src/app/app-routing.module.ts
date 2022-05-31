import { LivrosCreateComponent } from './components/views/livros/livros-create/livros-create.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';

import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { LivrosAllComponent } from './components/views/livros/livros-all/livros-all.component';
import { LivrosUpdateComponent } from './components/views/livros/livros-update/livros-update.component';
import { LivrosDeleteComponent } from './components/views/livros/livros-delete/livros-delete.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categoria/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/livros',
    component: LivrosAllComponent
  },
  {
    path:'categorias/:id_cat/livros/create',
    component: LivrosCreateComponent
  },
  {
    path:'categorias/:id_cat/livros/update/:id_li',
    component: LivrosUpdateComponent
  },
  {
    path:'categorias/:id_cat/livros/delete/:id_li',
    component: LivrosDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
